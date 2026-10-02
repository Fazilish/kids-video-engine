import sys,os,re,copy; sys.path.insert(0,'..')
from h import *
SRC={}
for d in 'ABC':
    ns={}; exec(open(f'../{d}/clip.py').read().replace("sys.path.insert(0,'..')",""),ns); SRC[d]=ns['QS']
W='one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty twenty-one twenty-two twenty-three twenty-four'.split()
pick=['A1','B1','C2','A3','C3','B2','A4','C4','B3','A6','C5','B5','A7','C6','B6','A8','C7','B7','A5','C8','B8']
# last: A5 (compare) kept in, bonus b1s from A,B and C b2

def BQ(kind,q,a,**kw): return Q(0,kind,q,a,bonus=True,**kw)
NEWB=[
 BQ('tf',"True or false? ... A bird's nest is a kind of home.","True! ... Birds raise their young in nests.",correct='T',vis={'bg':'forest','items':[I('nest',640,430,2.2),I('egg',620,400,1.1)]}),
 BQ('open',"What can we do to keep animal homes clean?","Put rubbish in the bin, ... and never throw it on the ground.",vis={'bg':'forest','items':[I('bin',640,470,1.8)]},rev={'pills':['RUBBISH IN THE BIN'],'c':'#2e9a52'}),
 BQ('opts',"Where would a penguin live? ... In the snow and ice, ... in the desert, ... or in a pond?","In the snow and ice! ... Penguins love the cold.",correct=0,top=[I('penguin',790,250,.8)],opts=[dict(l='SNOW AND ICE',bg='arctic'),dict(l='DESERT',bg='desert'),dict(l='POND',bg='pond')]),
 BQ('tf',"True or false? ... A fish can live in the desert.","False! ... A fish needs water to live.",correct='F',vis={'bg':'desert','items':[I('fish',640,450,1.5,sad=True)]}),
 BQ('open',"Name an animal that can live in the air.","Birds! ... Like eagles, ... and insects, ... like bees and butterflies.",vis={'bg':'home','items':[I('qmark',640,360,2)]},rev={'chips':[dict(ic='eagle',l='EAGLE',c='#8a5a30'),dict(ic='butterfly',l='BUTTERFLY',c='#a06bff')]}),
 BQ('open',"Which part of a plant grows under the ground, ... and drinks water from the soil?","The roots!",vis={'bg':'home','items':[I('flower',640,480,1.8)]},rev={'pills':['ROOTS'],'c':'#8a5a30'}),
 BQ('tf',"True or false? ... Plants need sunlight to grow.","True! ... Plants need light, ... water, ... and air.",correct='T',vis={'bg':'home','items':[I('sun',900,250,1.4),I('flower',640,480,1.6)]}),
 BQ('opts',"Which tree gives us dates? ... The date palm, ... the cactus, ... or the fern?","The date palm! ... It is our national tree.",correct=0,top=[I('dates',790,250,.9)],opts=[dict(l='DATE PALM',bg='home',items=[I('palm',640,430,.55)]),dict(l='CACTUS',bg='desert',items=[I('cactusBig',640,430,.5)]),dict(l='FERN',bg='forest',items=[I('fern',640,430,.8)])]),
 BQ('open',"Name a fruit that grows on a tree.","Apples, ... dates, ... and many more!",vis={'bg':'home','items':[I('tree',640,420,1.4)]},rev={'chips':[dict(ic='apple',l='APPLE',c='#ef4b4b'),dict(ic='dates',l='DATES',c='#8a5a30')]}),
 BQ('tf',"True or false? ... A plant can walk to a new home.","False! ... A plant cannot move. ... It stays in one place.",correct='F',vis={'bg':'home','items':[I('bush',640,470,1.6)]}),
 BQ('open',"Which animal makes honey?","The honey bee!",vis={'bg':'home','items':[I('flower',560,500,1.6),I('bee',780,330,1.6)]},rev={'pills':['THE BEE'],'c':'#e0a800'}),
 BQ('tf',"True or false? ... A fish can breathe on dry land.","False! ... A fish lives and breathes in water.",correct='F',vis={'bg':'home','items':[I('fish',640,480,1.4,sad=True)]}),
 BQ('opts',"Which animal lays eggs? ... A bird, ... a rabbit, ... or a camel?","A bird! ... Birds lay eggs in nests.",correct=0,top=[I('egg',790,260,1)],opts=[dict(l='BIRD',bg='forest',items=[I('eagle',640,250,1)]),dict(l='RABBIT',bg='forest',items=[I('rabbit',640,420,1)]),dict(l='CAMEL',bg='desert',items=[I('camel',640,420,.9)])]),
 BQ('open',"What is a baby frog called?","A tadpole! ... It lives in the water, ... and grows into a frog.",vis={'bg':'pond','items':[I('spawn',640,480,1.6)]},rev={'pills':['TADPOLE'],'c':'#2e9a52'}),
 BQ('open',"Name an animal that has a shell.","A turtle, ... or a snail!",vis={'bg':'home','items':[I('qmark',640,360,2)]},rev={'chips':[dict(ic='turtle',l='TURTLE',c='#6fae3a'),dict(ic='snail',l='SNAIL',c='#a06bff')]}),
]

QS={};order=[];n=0;nb=0
for p in pick:
    d=p[0];k=p[1:]; q=copy.deepcopy(SRC[d][k]); isb=k.startswith('b')
    q['q']=re.sub(r'^(Question \w+\.|Bonus question \w+!)\s*\.\.\.\s*','',q['q'])
    if isb:
        nb+=1; q['q']='Bonus question %s! ... '%W[nb-1]+q['q']; q['label']='BONUS %d !'%nb; q['bonus']=True
    else:
        n+=1; q['q']='Question %s. ... '%W[n-1]+q['q']; q['label']='Question %d'%n; q['bonus']=False
    key='%d'%len(order); QS[key]=q; order.append('?'+key)
for q in NEWB:
    q=copy.deepcopy(q); nb+=1
    q['q']='Bonus question %s! ... '%W[nb-1]+q['q']; q['label']='BONUS %d !'%nb
    key='%d'%len(order); QS[key]=q
    if nb==1: order.append('bonusintro')
    order.append('?'+key)
N=n
S={}
S['intro']=SEG("Welcome to the big test! ... Ollie has twenty-one questions from all three topics. ... Habitats, ... plants, ... and animals. ... Think, ... then answer out loud. ... Ready? ... Let's go!",
 [I('ollie',380,400,1.9,happy=True),TX('Big Test!',850,220,0,'#a06bff',120),I('qmark',1120,380,1.2),I('qmark',640,150,.8)]+[I(f,x,540,.6,at=2) for f,x in [('polarBear',620),('frog',780),('flower',930),('cactus',1060)]],'party',corner=False)
S['bonusintro']=SEG("Great work! ... Now it is bonus time! ... These questions are not from the slides. ... Fifteen bonus questions, ... all about habitats, ... plants, ... and animals.",[I('ollie',380,400,1.9,happy=True),TX('BONUS',850,220,0,'#ff8a30',120),TX('Round!',850,350,1,'#ff6b9a',120),I('sparkle',1120,380,1.6),I('sparkle',640,150,1.4)],'party',corner=False)
S['outro']=OUTRO('a science','Science','#a06bff','#ff6b9a')
CLIP=dict(title=dict(l1="Ollie's Big Test",l2='All topics!',sub='Habitats, plants and animals',c='#a06bff',deco='camel'),segs=S,qs=QS,order=['intro']+order+['outro'],endSeg='outro')
