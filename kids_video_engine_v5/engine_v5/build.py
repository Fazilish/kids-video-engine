import json, sys, os, hashlib, numpy as np, soundfile as sf
ns={}; exec(open('clip.py').read(),ns); CLIP=ns['CLIP']
DRY='--dry' in sys.argv; SR=24000; PAUSE=float(os.environ.get('PAUSE','5.0'))
texts={}
for n in CLIP['order']:
    if n.startswith('?'):
        q=CLIP['qs'][n[1:]]; texts['q'+n[1:]]=q['q']; texts['a'+n[1:]]=q['a']
    else: texts[n]=CLIP['segs'][n]['text']
cache=json.load(open('aud_cache.json')) if os.path.exists('aud_cache.json') else {}
meta={}
if not DRY:
    from kokoro_onnx import Kokoro
    k=Kokoro("kokoro.onnx","voices.bin")
for name,text in texts.items():
    import re
    parts=[p.strip() for p in text.split("...") if p.strip()]
    say=CLIP.get('say',{})  # phonetic respellings for TTS only, e.g. {'Yousif':'Yoo-sif'}
    disp=[re.sub(r'\{([^|}]*)\|([^}]*)\}',r'\2',p) for p in parts]; parts=[re.sub(r'\{([^|}]*)\|([^}]*)\}',r'\1',p) for p in parts]
    for w_,v_ in say.items(): parts=[p.replace(w_,v_) for p in parts]
    if DRY:
        meta[name]={'dur':len(parts)*2.0+.4,'parts':[{'t':i*2.0,'text':p} for i,p in enumerate(disp)]}; continue
    f=f'aud_{name}.wav'; h=hashlib.md5((text+json.dumps(say,sort_keys=True)).encode()).hexdigest()
    if cache.get(name)!=h or not os.path.exists(f):
        out=[];cur=0;starts=[]
        for p in parts:
            a,sr=k.create(p,voice="af_heart",speed=0.82,lang="en-us"); starts.append(cur); out+=[a,np.zeros(int(sr*.35),dtype=np.float32)]; cur+=len(a)/sr+.35
        au=np.concatenate(out+[np.zeros(int(sr*.4),dtype=np.float32)]); sf.write(f,au,sr); cache[name]=h
        json.dump({'starts':starts},open(f'aud_{name}.json','w'))
        json.dump(cache,open('aud_cache.json','w'))
    a,sr=sf.read(f,dtype='float32'); st=json.load(open(f'aud_{name}.json'))['starts']
    meta[name]={'dur':len(a)/sr,'parts':[{'t':s_,'text':p} for s_,p in zip(st,disp)]}
order=[('title',None,2.5)]
for n in CLIP['order']:
    if n.startswith('?'):
        i=n[1:]; order+=[('q'+i,'q'+i,None),('p'+i,None,PAUSE),('a'+i,'a'+i,None)]
    else: order.append((n,n,None))
order.append(('end',None,2.0))
t=0; tl=[]; ch=[]
for name,aud,dur in order:
    if aud:
        d=meta[aud]['dur']; parts=[{'t':t+p['t'],'text':p['text']} for p in meta[aud]['parts']]
        a=np.zeros(int(d*SR),dtype='float32') if DRY else sf.read(f'aud_{aud}.wav',dtype='float32')[0]
    else: d=dur; parts=[]; a=np.zeros(int(d*SR),dtype='float32')
    tl.append({'name':name,'t0':t,'dur':d,'parts':parts}); ch.append(a); t+=d
audio=np.concatenate(ch)
def add(at,snd):
    i=int(at*SR); audio[i:i+len(snd)]+=snd[:len(audio)-i]
tt=np.arange(int(.9*SR))/SR; ding=(np.sin(2*np.pi*1318*tt)+.6*np.sin(2*np.pi*1975*tt))*np.exp(-5*tt)*.18
tk=np.arange(int(.04*SR))/SR; tick=np.sin(2*np.pi*900*tk)*np.exp(-60*tk)*.12
for s in tl:
    if s['name'][0]=='a' and s['name'][1:] in CLIP['qs']: add(s['t0'],ding)
    if s['name'][0]=='p' and s['name'][1:] in CLIP['qs']:
        for q in range(int(PAUSE)): add(s['t0']+q,tick)
audio=np.clip(audio,-1,1); sf.write('final.wav',audio,SR)
open('clip.js','w').write('const CLIP='+json.dumps(CLIP)+';const TL='+json.dumps(tl)+';const TOTAL='+str(t)+';')
print(round(t,1),'sec;', 'words',sum(len(x.split()) for x in texts.values()))
