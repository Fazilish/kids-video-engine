from h import *
NW='one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty twenty-one twenty-two twenty-three twenty-four twenty-five twenty-six twenty-seven twenty-eight'.split()
LT=dict(A='ay',B='bee',C='see',D='dee',E='ee',F='eff',G='jee',H='aitch',I='eye',J='jay',K='kay',L='el',M='em',N='en',O='oh',P='pee',Q='cue',R='are',S='ess',T='tee',U='you',V='vee',W='double you',X='ex',Y='why',Z='zee')
class Ctr:
    n=0
def WQ(tag,kind,q,a,**kw):
    Ctr.n+=1; n=Ctr.n; label='%d · %s'%(n,tag)
    d=dict(kind=kind,q='Number %s. ... %s'%(NW[n-1],q),a=a,bonus=False,label=label,lw=len(label)*24+70); d.update(kw); return d
def SP(word,items,bg='home',show=(0,),hint=None):
    ans='The word is %s. ... '%word.lower()+' ... '.join('{%s|%s}'%(LT[c],c) for c in word)
    return WQ('SPELL IT','spell',"Look at the picture. ... Spell the word on your whiteboard."+(' ... '+hint if hint else ''),ans,word=word,items=items,bg=bg,show=list(show))
def TF(stmt,correct,why,items=(),bg='home'):
    return WQ('TRUE OR FALSE','tf',"True or false? ... "+stmt,('True! ... ' if correct=='T' else 'False! ... ')+why,correct=correct,vis={'bg':bg,'items':list(items)})
def CI(q,opts,correct,why,top=()):
    return WQ('CIRCLE IT','circle',"Circle the correct answer. ... "+q,why,opts=opts,correct=correct,top=list(top))
def FB(lines,words,answer,spoken,why=None,sz=44):
    return WQ('FILL THE BLANK','fill',"Fill in the blank. ... "+spoken,'The answer is %s. ... %s'%(answer,why or spoken.replace('blank',answer)),lines=lines,words=words,answer=answer,sz=sz)
def WR(q,a,items=(),bg='home',pills=None,c='#2a8fd0',chips=None):
    rev={}
    if pills:rev['pills']=pills;rev['c']=c
    if chips:rev['chips']=chips
    return WQ('WRITE IT','open',q+' ... Write your answer on the whiteboard.',a,vis={'bg':bg,'items':list(items)},rev=rev)
def MA(q,left,right,pairs,spoken,lw2=260,rw=None):
    d=WQ('MATCH IT','match',"Match them up. ... "+q,spoken,left=left,right=right,pairs=pairs,lw2=lw2)
    if rw:d['rw']=rw
    return d
def LB(q,items,pts,spoken,bg='home',cw=420,cy=135):
    return WQ('LABEL IT','label',"Label the picture. ... "+q,spoken,items=items,pts=pts,bg=bg,cw=cw,cy=cy)
def build(QSlist,title,intro,outro,outro_word):
    QS={};order=['i']
    for i,q in enumerate(QSlist): QS[str(i+1)]=q; order.append('?'+str(i+1))
    order.append('o')
    S={'i':intro,'o':outro}
    return dict(title=title,segs=S,qs=QS,order=order,endSeg='o')
def INTRO(topic,c1,c2):
    return SEG("Whiteboard time! ... Get your marker, ... and your whiteboard. ... We will do %s questions. ... You write the answers, ... then we check them together. ... Pause the video, ... if you need more time."%topic,[I('ollie',380,400,1.9,happy=True),TX('Write it!',850,220,0,c1,120),TX(topic.title(),850,350,1,c2,100),I('sparkle',1120,150,1.4)],'party',corner=False)
def OUTRO2(c1,c2):
    return SEG("Great writing! ... Well done, little scientist! ... Check your answers with your parent, ... and give yourself a smiley!",[I('ollie',380,410,1.9,happy=True),TX('Great',850,230,0,c1,120),TX('Writing!',850,350,1,c2,120)]+[I('sparkle',640+i*150,430+(i%2)*60,1.6,0) for i in range(5)],'party',corner=False)

# ---- school-style helpers (v2) ----
def CH(q,opts,correct,why,pic=None):
    return WQ('CIRCLE IT','choice',"Circle the correct answer. ... "+q,why,opts=opts,correct=correct,pic=pic)
def TFL(items,whys):
    return WQ('TRUE OR FALSE','tflist',"True or false? ... Write T or F for each one.",whys,items=[dict(s=s,v=v) for s,v in items])
def BXQ(q,words,good,why):
    return WQ('CHOOSE','boxes',q+' ... Write the correct ones on your board.',why,words=words,good=[words.index(g) for g in good])
def TBQ(tag,q,head,rows,hide,why,pics=None,wbox=None,c0=230,rh=None,sz=24):
    d=WQ(tag,'table',q+" ... Copy the table and fill it in. Take your time.",why,head=head,rows=rows,hide=hide,pics=pics,wbox=wbox,c0=c0,sz=sz)
    if rh:d['rh']=rh
    return d
def PFQ(q,fields,why,pic=None):
    return WQ('PROFILE','profile',q+" ... Write your answers on your board.",why,fields=fields,pic=pic)
def DLQ(q,bg,items,boxes,why,cw=500):
    return WQ('DRAW AND LABEL','drawlabel',q+" ... Draw and label on your board.",why,bg=bg,items=items,boxes=boxes,cw=cw)
def WSQ(tag,q,model,spoken_answer,pic=None,story=None):
    return WQ(tag,'write',q+" ... Write your answer in a full sentence.",spoken_answer,pic=pic,story=story,model=model)
