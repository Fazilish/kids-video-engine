import sys; sys.path.insert(0,'..')
from h import *
S={}
S['s1']=SEG("Hello! ... I am Ollie the owl, ... a little scientist. ... Today, we are going on a habitat adventure! ... Jump in my balloon! ... But first, ... a new word. ... Environment. ... The environment is all the natural and made space and things around you.",
 [I('ollie',300,420,1.5,happy=True),I('balloon',930,300,1.1,at=3,until=8),I('sparkle',200,250,1.3),I('sparkle',420,260,1),TX('ENVIRONMENT',640,115,7,'#2f8f55',90),
  I('tree',640,380,.85,at=8),I('house',1010,470,.7,at=8),I('flower',830,470,1.0,at=8)],'home',corner=False)
S['s2']=SEG("Now, the big word. ... Habitat! ... A habitat is the place where a living thing finds everything it needs, ... to grow, ... and to have babies. ... Every habitat gives food, ... water, ... and shelter. ... A good habitat makes an animal feel safe and happy.",
 [I('house',640,370,1.5,at=1,until=5),I('sparkle',420,250,1.3,at=1,until=5),I('sparkle',860,270,1.1,at=1,until=5),TX('HABITAT',640,110,1,'#ef6a5b',110,until=5),
  I('flower',420,430,1.2,at=3,until=5),I('nest',860,420,2.2,at=4,until=5),
  TX('A habitat gives:',640,95,5,'#3b3355',64),I('icard',260,350,1,at=5,c='#ef4b4b',ic='apple',l='FOOD'),I('icard',640,350,1,at=6,c='#2e9ad6',ic='water',l='WATER'),I('icard',1020,350,1,at=7,c='#e0883a',ic='shelter',l='SHELTER'),
  I('sparkle',450,330,1.6,at=8),I('sparkle',830,330,1.6,at=8)],'party',corner=False)
S['s3']=SEG("Let's fly to the Arctic! ... The Arctic is a freezing cold habitat, ... at the top of the Earth. ... It is covered in snow and ice. ... Can a rabbit live here? ... No! ... The Arctic is not a good habitat for a rabbit.",
 [B('ARCTIC','freezing cold','#4a9be0'),I('polarBear',760,440,.9,at=1),I('thermo',1000,360,1,at=1,col='#4a9be0'),TX('BRRR!',900,230,1,'#3b82d6',80),
  I('rabbit',320,470,.9,at=4),I('qmark',320,300,1,at=4,until=5),I('cross',320,440,1,at=5,r=85)],'arctic')
S['qi1']=QI(1)
S['s4a']=SEG("Next, we land in a forest. ... A forest has tall, mostly evergreen trees, ... and a little rain. ... Small insects live in the trees and the grass, ... and there are plenty of plants for animals to eat.",
 [B('FOREST','tall trees, a little rain','#2e9a52'),I('cloud',900,190,1,at=2,n=2),I('ladybug',300,545,1.1,at=3),I('ladybug',760,565,1.1,at=3),I('butterfly',520,400,1,at=3),
  I('flower',200,540,.9,at=4),I('flower',1000,545,.9,at=4),I('rabbit',470,525,.8,at=4)],'forest')
S['s4b']=SEG("Now, a rainforest! ... It has tall evergreen trees too, ... but a very high amount of rain. ... Let's compare them! ... To compare, we look at two things, ... and find what is the same, ... and what is different. ... Both have tall trees. ... But the rainforest has much more rain!",
 [B('RAINFOREST','','#1f7a4a',at=0,until=3),I('cloud',900,200,1.3,at=2,until=3,n=10),TX('COMPARE',640,105,3,'#a06bff',90),
  I('cardEnv',330,340,1,at=3,until=8,env='forest',w=520,l='FOREST',lc='#2e9a52'),I('cardEnv',950,340,1,at=3,until=8,env='rainforest',w=520,l='RAINFOREST',lc='#1f7a4a'),
  I('cardEnv',330,340,1,at=8,env='forest',w=520,l='FOREST',lc='#2e9a52',**{'in':[I('cloud',900,160,1.8,n=2)]}),I('cardEnv',950,340,1,at=8,env='rainforest',w=520,l='RAINFOREST',lc='#1f7a4a',**{'in':[I('cloud',700,160,2.2,n=14)]}),
  PL('SAME: tall trees',640,560,7,'#2fbf71',w=420,sz=34,until=8),PL('DIFFERENT: rain',640,560,8,'#2a8fd0',w=420,sz=34)],
 'home',bgs=[{'at':0,'bg':'rainforest'},{'at':2,'bg':'rainforest','o':{'heavy':True}},{'at':3,'bg':'home'}],corner=False)
S['s5']=SEG("Now, a pond and a lake. ... Wet places like these make it easy to find water, ... shelter, ... and food. ... Frogs and fish live here.",
 [B('POND','a wet place','#2a8fd0'),I('frog',640,440,1.1,at=1),PL('water',860,300,1,'#2a8fd0'),PL('shelter',860,360,2,'#e0883a'),PL('food',860,420,3,'#ef4b4b'),I('fish',380,545,.6,at=4),I('fish',930,560,.55,at=4,flip=True)],'pond')
S['qi2']=QI(2)
S['s6a']=SEG("Let's fly to the desert! ... A desert is a very dry place. ... It hardly ever rains. ... It is hot in the day, ... but cold at night!",
 [B('DESERT','very dry','#e08a2e',at=0,until=4),B('DESERT','cold at night','#3b3b8f',at=4),I('camel',420,450,.8,at=1,until=4),I('camel',420,450,.8,at=4,shiver=True),
  I('cloud',900,200,1.2,at=2,until=3,n=0),I('cross',900,205,1,at=2,until=3,r=80),I('thermo',1000,380,1,at=3,until=4,col='#ef4b4b'),I('thermo',1000,380,1,at=4,col='#4a9be0')],
 'desert',bgs=[{'at':4,'bg':'desertNight'}])
S['s6b']=SEG("Some deserts are hot, ... but some deserts are very cold. ... The Arctic and the Antarctic are cold deserts too! ... And the hottest desert in the world ... is the Sahara, in Africa.",
 [I('cardEnv',330,340,1,at=0,until=3,env='desert',w=520,l='HOT DESERT',lc='#e08a2e'),I('cardEnv',950,340,1,at=1,until=3,env='arctic',w=520,l='COLD DESERT',lc='#4a9be0',**{'in':[I('penguin',640,440,1.5)]}),
  I('ring',950,340,1,at=2,until=3,r=190,dash=True),TX('Arctic and Antarctic',640,110,2,'#3b82d6',64,until=3),
  B('SAHARA','Africa','#e0452e',at=3),I('thermo',1000,350,1.2,at=3,col='#ef4b4b'),TX('HOTTEST!',640,300,3,'#ef4b4b',90),I('camel',420,470,.8,at=4)],
 'home',bgs=[{'at':3,'bg':'desert'}],corner=False)
S['s7']=SEG("Who lives in the desert? ... Camels, ... lizards, ... and scorpions! ... And cactus plants grow here too. ... A cactus has thick leaves, ... or spiky spines. ... Desert plants do not need much water. ... But we cannot find many animals in the desert. ... Not all animals can bear the heat!",
 [B('DESERT','who lives here?','#e08a2e'),I('camel',330,440,.75,at=1),I('lizard',640,525,.8,at=2),I('scorpion',850,535,.75,at=3),I('cactusBig',1080,360,.85,at=4),
  PL('thick leaves',860,230,5,'#3da35d',until=6),PL('spiky spines',860,230,6,'#3da35d',until=7),PL('needs little water',860,230,7,'#2a8fd0',w=330,until=8),
  I('thermo',1130,300,1,at=8),TX('TOO HOT!',640,150,9,'#ef4b4b',90)],'desert',corner=False)
S['s7b']=SEG("In the forest, ferns need water to grow. ... When ferns dry out, ... they turn dull in colour. ... But as soon as you water them, ... they turn green again!",
 [B('FOREST','ferns','#2e9a52'),I('fern',640,545,1.8,at=0,until=1),I('fern',640,545,1.8,at=1,until=4,dull=True),I('fern',640,545,1.8,at=4)]+
 [I('drop',470+i*80,190,1.5,at=3,until=4,move={'dx':0,'dy':320,'dur':1.4}) for i in range(5)]+[PL('dull',900,300,2,'#a8a56a',until=4),PL('green again!',900,300,4,'#2fbf71',w=300)],'forest')
S['qi3']=QI(3)
S['s8']=SEG("Now, home! ... Our home is Bahrain. ... What is the weather in Bahrain? ... Hot! ... Bahrain's environment is dry, like a desert. ... Camels live at the Royal Camel Farm. ... Flamingos visit Askar Beach. ... And dolphins swim in the waters of Bahrain.",
 [B('BAHRAIN','our home','#c0392b'),I('qmark',700,250,1,at=2,until=3),I('thermo',1000,340,1,at=3,col='#ef4b4b'),I('camel',330,470,.75,at=5),PL('Royal Camel Farm',380,300,5,'#d98a2e',sz=30),
  I('flamingo',700,400,.8,at=6),PL('Askar Beach',700,215,6,'#2a9fd0',sz=30),I('dolphin',860,430,.8,at=7,move={'dx':230,'dy':20,'arc':230,'dur':2.6})],'bahrain2')
S['s9']=SEG("Can a polar bear live in Bahrain? ... No! ... It would be too hot, ... and it needs the cold Arctic. ... Can a dolphin live in the desert? ... No! ... It needs the ocean, ... with water to swim in.",
 [I('polarBear',640,430,.9,at=0,until=3,sweat=True,sad=True),I('qmark',640,250,1,at=0,until=1),I('cross',640,380,1,at=1,until=3,r=150),I('polarBear',640,430,.9,at=3,until=4),
  I('dolphin',640,470,1.0,at=4,until=6),I('qmark',640,260,1,at=4,until=5),I('cross',640,440,1,at=5,until=6,r=150),I('dolphin',560,400,1.0,at=6,move={'dx':160,'dy':-30,'arc':50,'dur':2})],
 'home',bgs=[{'at':0,'bg':'bahrain2'},{'at':3,'bg':'arctic'},{'at':4,'bg':'desert'},{'at':6,'bg':'underwater'}])
S['s10']=SEG("Animals live in different places. ... Some live in the air, ... some live in the water, ... and some live on the land. ... Different plants and animals have different habitats. ... Animals cannot all live in the same habitat! ... And a plant cannot walk to a new home. ... A bush cannot move from one place to another. ... But a bush can be a home for a tiny insect!",
 [I('cardEnv',250,340,1,at=1,until=6,env='home',w=360,l='AIR',lc='#4aa3ff',**{'in':[I('eagle',640,330,1.6,fly=True)]}),I('cardEnv',640,340,1,at=2,until=6,env='underwater',w=360,l='WATER',lc='#2a8fd0',**{'in':[I('fish',640,380,1.8)]}),
  I('cardEnv',1030,340,1,at=3,until=6,env='desert',w=360,l='LAND',lc='#e0883a',**{'in':[I('camel',640,420,1.4)]}),TX('Different habitats!',640,110,4,'#a06bff',72,until=6),
  I('bush',470,400,2.0,at=6),I('feet',880,420,1.4,at=6),I('cross',880,420,1,at=7,r=100),I('ladybug',470,300,1.7,at=8),I('heart',560,260,1.2,at=8)],
 'party',bgs=[{'at':6,'bg':'home'}],corner=False)
S['s11']=SEG("What if there was no habitat? ... Without food, ... water, ... or air, ... living things would die. ... So we must take care of every habitat!",
 [I('qmark',640,200,1.2,at=0,until=1),I('crossed',300,360,1.6,at=1,until=5,ic='apple'),I('crossed',640,360,1.6,at=2,until=5,ic='water'),I('crossed',980,360,1.6,at=3,until=5,ic='air'),
  I('flower',200,520,1.4,at=4,until=5,pale=True,droop=True),I('tree',1000,420,.9,at=5),I('flower',300,520,1.3,at=5),I('heart',640,230,1.6,at=5)],'home')
S['qi4']=QI(4)
S['outro']=OUTRO('a habitat','Habitat','#ef6a5b','#4aa3ff')
QS={}
QS['1']=Q(1,'open',"Question one. ... What is a habitat?","A habitat is the place where a living thing finds everything it needs.",vis={'bg':'home','items':[I('house',640,400,1.8),I('rabbit',300,520,1),I('frog',980,540,1)]},rev={'pills':["A LIVING THING'S HOME"]})
QS['2']=Q(2,'open',"Question two. ... Name three things a habitat gives.","Food, ... water, ... and shelter.",vis={'bg':'home','items':[I('house',640,400,1.8)]},rev={'chips':[dict(ic='apple',l='FOOD',c='#ef4b4b'),dict(ic='water',l='WATER',c='#2e9ad6'),dict(ic='shelter',l='SHELTER',c='#e0883a')]})
QS['3']=Q(3,'tf',"Question three. ... True or false? ... The Arctic is a good habitat for a rabbit.","False! ... It is far too cold for a rabbit.",correct='F',vis={'bg':'arctic','items':[I('rabbit',640,470,1.5),I('thermo',1000,380,1.3,col='#4a9be0')]})
QS['4']=Q(4,'opts',"Question four. ... Which place has a very high amount of rain? ... The forest, ... the rainforest, ... or the desert?","The rainforest!",correct=1,top=[I('cloud',790,215,1.7,n=9)],opts=[dict(l='FOREST',bg='forest'),dict(l='RAINFOREST',bg='rainforest'),dict(l='DESERT',bg='desert')])
QS['5']=Q(5,'open',"Question five. ... What does the word compare mean?","To look at two things, ... and find what is the same, ... and what is different.",vis={'bg':'home','items':[I('rabbit',380,470,1.6),I('frog',900,500,1.6),I('qmark',640,250,1.2)]},rev={'pills':['SAME AND DIFFERENT']})
QS['6']=Q(6,'tf',"Question six. ... True or false? ... A desert is a very dry place.","True! ... It hardly ever rains in the desert.",correct='T',vis={'bg':'desert','items':[I('camel',640,480,1.3)]})
QS['7']=Q(7,'opts',"Question seven. ... Which plant grows in the desert? ... A cactus, ... or a fern?","A cactus! ... It does not need much water.",correct=0,opts=[dict(l='CACTUS',bg='desert',items=[I('cactusBig',640,420,1.4)]),dict(l='FERN',bg='forest',items=[I('fern',640,540,1.7)])])
QS['b1']=Q(1,'open',"Bonus question one! ... Can you build a snowman in the desert? ... Why not?","No! ... It is too hot, ... and the snowman would melt!",bonus=True,vis={'bg':'desert','items':[I('snowman',640,430,1.6)]},rev={'pills':['TOO HOT - IT MELTS'],'c':'#ef6a5b'})
QS['8']=Q(8,'opts',"Question eight. ... A dolphin needs water to swim in. ... Which habitat is right for a dolphin? ... The ocean, ... or the desert?","The ocean!",correct=0,opts=[dict(l='OCEAN',bg='underwater',items=[I('dolphin',640,380,1.4)]),dict(l='DESERT',bg='desert')])
QS['b2']=Q(2,'open',"Bonus question two! ... What would happen if we threw rubbish into a pond?","The water would get dirty, ... and the animals could get sick. ... We must keep habitats clean!",bonus=True,vis={'bg':'pond','items':[I('frog',640,470,1.5),I('litter',420,540,1.4),I('litter',880,520,1.3)]},rev={'pills':['KEEP HABITATS CLEAN'],'c':'#2f8f55'})
ORDER=['s1','s2','s3','qi1','?1','?2','?3','s4a','s4b','s5','qi2','?4','?5','s6a','s6b','s7','s7b','qi3','?6','?7','?b1','s8','s9','s10','s11','qi4','?8','?b2','outro']
CLIP=dict(title=dict(l1="Ollie's Habitat",l2='Adventure!',sub='Habitats for little scientists',c='#e0883a',deco='bush'),segs=S,qs=QS,order=ORDER,endSeg='outro')
