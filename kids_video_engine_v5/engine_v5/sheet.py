import sys, json, subprocess
from PIL import Image
TL=json.loads(open('clip.js').read().split('const TL=')[1].split(';const TOTAL')[0])
names=sys.argv[2:]; out=sys.argv[1]; ts=[]
for n in names:
    nm,_,off=n.partition('@'); x=[s for s in TL if s['name']==nm][0]
    if off=='' : t=x['parts'][-1]['t']+1.2 if x['parts'] else x['t0']+x['dur']*.5
    elif off.startswith('p'): t=x['parts'][int(off[1:])]['t']+1.2
    else: t=x['t0']+float(off)
    ts.append(round(t,2))
subprocess.run(['python3','shot.py']+[str(t) for t in ts],check=True,capture_output=True)
ims=[Image.open(f'shot_{t}.png').resize((640,360)) for t in ts]
W=Image.new('RGB',(1280,360*((len(ims)+1)//2)))
for i,im in enumerate(ims): W.paste(im,((i%2)*640,(i//2)*360))
W.save(out); print(ts)
