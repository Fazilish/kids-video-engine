def I(f,x=640,y=400,s=1,at=0,until=None,flip=False,move=None,rot=0,nopop=False,**o):
    d={'f':f,'x':x,'y':y,'s':s,'at':at,'o':o}
    if until is not None:d['until']=until
    if flip:d['flip']=True
    if move:d['move']=move
    if rot:d['rot']=rot
    if nopop:d['nopop']=True
    return d
def B(t,sub='',c='#2e9a52',at=0,until=None): return I('banner',40,34,1,at,until,nopop=True,t=t,sub=sub,c=c)
def PL(t,x,y,at=0,c='#a06bff',w=None,sz=34,until=None):
    o=dict(t=t,c=c,sz=sz)
    if w:o['w']=w
    return I('pill',x,y,1,at,until,**o)
def TX(t,x,y,at=0,c='#ef6a5b',sz=100,until=None): return I('text',x,y,1,at,until,t=t,c=c,sz=sz)
def SEG(text,items=(),bg='home',bgs=None,corner=True,react=None):
    d={'text':text,'items':list(items),'bg':bg,'corner':corner}
    if react:d['react']=react  # e.g. [{'at':3,'k':'!'}] = mascot reacts with a bubble
    if bgs:d['bgs']=bgs
    return d
def QI(n): return SEG("Time for Ollie's questions! ... Think, ... then answer out loud.",[I('ollie',380,400,1.9,happy=True),TX('Question',850,220,0,'#a06bff',110),TX('Time!',850,340,1,'#ff6b9a',130),I('qmark',1120,380,1.2),I('qmark',640,150,.8)],'party',corner=False)
def OUTRO(a,b,c1,c2): return SEG(f"Well done, little scientist! ... You are {a} expert!",[I('ollie',380,410,1.9,happy=True),TX(b,850,230,0,c1,120),TX('Expert!',850,350,1,c2,130)]+[I('sparkle',640+i*150,430+(i%2)*60,1.6,0) for i in range(5)],'party',corner=False)
def Q(num,kind,q,a,bonus=False,**kw):
    d=dict(kind=kind,q=q,a=a,bonus=bonus,label=('BONUS %s !'%num if bonus else 'Question %s'%num)); d.update(kw); return d

def LBL(text,x,y,tx,ty,at=0,c='#2f9fd8',until=None): return I('callout',x,y,1,at,until,t=text,dx=tx-x,dy=ty-y,c=c)  # label pill at (x,y) with a pointer line to (tx,ty)
