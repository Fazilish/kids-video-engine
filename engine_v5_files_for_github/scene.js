const INK='#3b3355';
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
const pop=(t,t0,d=.45)=>{const x=(t-t0)/d;if(x<=0)return 0;if(x>=1)return 1;return 1+2.70158*Math.pow(x-1,3)+1.70158*Math.pow(x-1,2);};
const fade=(t,t0,d=.4)=>clamp((t-t0)/d);
const g=(x,y,s,inner,rot=0)=>{const [sx,sy]=Array.isArray(s)?s:[s,s];if(Math.abs(sx)<.001)return '';return `<g transform="translate(${x},${y}) rotate(${rot}) scale(${sx},${sy})">${inner}</g>`;};
const T=(x,y,s,sz,fill=INK,o={})=>`<text x="${x}" y="${y}" font-size="${sz}" fill="${fill}" text-anchor="${o.a||'middle'}" font-weight="${o.w||600}" ${o.stroke?`stroke="${o.stroke}" stroke-width="${o.sw||10}" paint-order="stroke" stroke-linejoin="round"`:''}>${s}</text>`;
const R=(x,y,w,h,rx,fill,stroke,sw=4,extra='')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" ${stroke?`stroke="${stroke}" stroke-width="${sw}"`:''} ${extra}/>`;
const E=(cx,cy,rx,ry,fill,stroke,sw=4)=>`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" ${stroke?`stroke="${stroke}" stroke-width="${sw}"`:''}/>`;
const Ci=(cx,cy,r,fill,stroke,sw=4)=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" ${stroke?`stroke="${stroke}" stroke-width="${sw}"`:''}/>`;
const P=(d,fill,stroke,sw=4,extra='')=>`<path d="${d}" fill="${fill}" ${stroke?`stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"`:''} ${extra}/>`;
const eye=(x,y,r=7)=>Ci(x,y,r,'#2b2540')+Ci(x+r*.3,y-r*.35,r*.35,'#fff');
const drop=(x,y,s,fill='#5cc3ff')=>g(x,y,s,P('M0 -22 Q16 4 0 16 Q-16 4 0 -22Z',fill,'#2e9ad6',3));

// ---------- characters (origin ~ center of body) ----------
function polarBear(t,o={}){const b=Math.sin(t*5)*3,sh=o.shiver?Math.sin(t*45)*2.5:0,F='#fff',S='#bcd3e6';
 let sweat='';if(o.sweat){for(let i=0;i<3;i++){const k=((t*1.3+i/3)%1);sweat+=drop(60+i*28,-110+k*60,.9,'#5cc3ff').replace('<g','<g opacity="'+(1-k)+'"');}}
 return `<g transform="translate(${sh},${b})">${E(0,100,125,13,'rgba(0,0,0,.13)')}
 ${R(-88,30,44,70,20,F,S)}${R(46,30,44,70,20,F,S)}${E(0,0,116,72,F,S)}${Ci(-114,-8,16,F,S)}
 ${Ci(52,-93,18,F,S)}${Ci(106,-95,18,F,S)}${Ci(52,-93,8,'#f4b6c2')}${Ci(106,-95,8,'#f4b6c2')}
 ${Ci(78,-48,54,F,S)}${E(113,-33,27,21,'#f1f5f9',S,3)}${E(129,-42,9,7,'#2b2540')}${eye(92,-60,6.5)}
 ${o.sad?P('M103 -16 Q114 -26 127 -16','none','#2b2540',3.5):P('M103 -24 Q114 -12 127 -24','none','#2b2540',3.5)}${sweat}</g>`;}
function camel(t,o={}){const b=Math.sin(t*4)*3,sh=o.shiver?Math.sin(t*45)*2.5:0,C='#dba662',D='#b9823f';
 return `<g transform="translate(${sh},${b})">${E(0,112,125,13,'rgba(0,0,0,.13)')}
 ${R(-75,30,22,82,9,D)}${R(48,30,22,82,9,D)}${E(0,0,106,56,C,D)}${R(-50,28,22,84,9,C,D,3)}${R(24,28,22,84,9,C,D,3)}
 ${E(-8,-60,42,44,C,D)}${E(-8,-36,36,26,C)}${P('M70 -20 Q112 -40 106 -125 L138 -122 Q146 -30 112 24Z',C,D)}
 ${E(136,-127,42,27,C,D)}${Ci(116,-150,9,C,D,3)}${eye(145,-134,6)}${E(170,-124,6,4,'#8a5a2b')}
 ${o.sad?P('M130 -112 Q146 -120 162 -110','none','#2b2540',3):P('M130 -114 Q146 -104 162 -114','none','#2b2540',3)}
 ${P('M-104 -12 Q-132 10 -126 52','none',D,6)}${o.shiver?'':''}</g>`;}
function frog(t){const j=Math.abs(Math.sin(t*3))*8;
 return `<g transform="translate(0,${-j})">${E(-70,45,30,18,'#5fc35c','#3f9a43')}${E(70,45,30,18,'#5fc35c','#3f9a43')}${E(0,0,88,64,'#5fc35c','#3f9a43')}${E(0,24,56,36,'#d3f59a')}
 ${Ci(-40,-58,25,'#fff','#3f9a43')}${Ci(40,-58,25,'#fff','#3f9a43')}${Ci(-36,-56,11,'#2b2540')}${Ci(44,-56,11,'#2b2540')}${Ci(-33,-60,4,'#fff')}${Ci(47,-60,4,'#fff')}
 ${P('M-48 14 Q0 56 48 14','none','#2b2540',4)}${E(-58,6,12,8,'#ff9fb0')}${E(58,6,12,8,'#ff9fb0')}</g>`;}
function kid(t){const w=Math.sin(t*6)*28;
 return `${E(0,152,70,10,'rgba(0,0,0,.13)')}${R(-30,105,24,46,10,'#3b3355')}${R(6,105,24,46,10,'#3b3355')}${R(-42,8,84,106,30,'#4aa3ff','#2b78c9')}
 ${R(-70,22,30,70,14,'#f3c5a1','#d9a47e',3)}${g(40,24,1,R(0,-6,30,70,14,'#f3c5a1','#d9a47e',3),-158+w)}
 ${Ci(0,-40,50,'#f3c5a1','#d9a47e')}${P('M-50 -45 Q-45 -95 0 -92 Q45 -95 50 -45 Q30 -70 0 -66 Q-30 -70 -50 -45Z','#4a2f1c')}
 ${eye(-18,-38,6)}${eye(18,-38,6)}${E(-30,-22,9,6,'#ff9fb0')}${E(30,-22,9,6,'#ff9fb0')}${P('M-14 -18 Q0 -4 14 -18','none','#2b2540',3.5)}`;}
function house(){return `${R(-110,-30,220,150,10,'#ffd27a','#d99a2b',5)}${P('M-138 -30 L0 -138 L138 -30Z','#ef6a5b','#c4473a',5)}
 ${R(-28,40,56,80,10,'#8b5a2b')}${Ci(15,82,4,'#ffd27a')}${R(-96,5,50,46,6,'#bfe6ff','#fff',4)}${R(46,5,50,46,6,'#bfe6ff','#fff',4)}${R(80,-120,28,50,4,'#c4473a')}`;}
function bush(){return `${R(-8,30,16,42,4,'#8b5a2b')}${Ci(-34,8,40,'#3fa65a')}${Ci(34,8,40,'#3fa65a')}${Ci(0,-24,44,'#4cbb68')}${Ci(-20,-10,5,'#ff7aa8')}${Ci(22,-30,5,'#ffd23f')}${Ci(30,12,5,'#ff7aa8')}`;}
function fish(t,o={}){const w=Math.sin(t*(o.sad?4:9))*(o.sad?3:8);
 return `<g transform="rotate(${w})">${P('M-62 0 L-122 -38 L-122 38Z','#ff8a30','#d96a14',4)}${E(0,0,78,50,'#ffa54a','#d96a14')}${P('M-10 -48 Q10 -78 30 -46','#ff8a30','#d96a14',4)}${P('M-30 -36 Q-20 0 -30 36','none','#ffd9a8',6)}
 ${Ci(38,-12,13,'#fff','#2b2540',3)}${Ci(41,-12,6,'#2b2540')}${o.sad?P('M30 22 Q48 10 64 22','none','#2b2540',4):P('M30 14 Q48 30 64 14','none','#2b2540',4)}</g>`;}
function hamster(t){const b=Math.sin(t*3)*3;
 return `<g transform="translate(0,${b})">${E(0,90,80,10,'rgba(0,0,0,.13)')}${Ci(-48,-52,22,'#e8b87a','#c78f4d')}${Ci(48,-52,22,'#e8b87a','#c78f4d')}${Ci(-48,-52,11,'#ffb4c4')}${Ci(48,-52,11,'#ffb4c4')}
 ${E(0,0,76,68,'#e8b87a','#c78f4d')}${E(0,22,50,42,'#fff0d8')}${E(-42,14,28,22,'#f6d3a0')}${E(42,14,28,22,'#f6d3a0')}${eye(-26,-14,7)}${eye(26,-14,7)}${E(0,4,8,6,'#ff8fa8')}
 ${P('M-10 12 Q0 22 10 12','none','#2b2540',3)}${R(-5,14,10,10,2,'#fff','#c78f4d',2)}${E(-26,66,16,10,'#f6d3a0','#c78f4d',3)}${E(26,66,16,10,'#f6d3a0','#c78f4d',3)}</g>`;}
function rabbit(t){const b=Math.abs(Math.sin(t*3))*6;
 return `<g transform="translate(0,${-b})">${E(0,100,70,9,'rgba(0,0,0,.13)')}${E(-34,-92,17,56,'#fff','#cfd8e3')}${E(34,-92,17,56,'#fff','#cfd8e3')}${E(-34,-92,8,40,'#ffc2d0')}${E(34,-92,8,40,'#ffc2d0')}
 ${E(0,40,62,56,'#fff','#cfd8e3')}${Ci(0,-22,46,'#fff','#cfd8e3')}${eye(-16,-26,6)}${eye(16,-26,6)}${E(0,-10,7,5,'#ff8fa8')}${P('M-10 -2 Q0 8 10 -2','none','#2b2540',3)}${Ci(-60,60,16,'#fff','#cfd8e3')}${E(-26,92,20,11,'#fff','#cfd8e3',3)}${E(26,92,20,11,'#fff','#cfd8e3',3)}</g>`;}
function flamingo(t){const s=Math.sin(t*2)*3;
 return `${P('M0 70 L0 175','none','#f08aa8',7)}${P('M0 120 L22 120','none','#f08aa8',7)}<g transform="rotate(${s})">${P('M40 10 Q100 -30 60 -90 Q38 -125 74 -140','none','#ff8fb1',20)}${E(0,24,60,40,'#ff8fb1','#e0668d')}${P('M-40 24 Q-20 50 20 40','none','#ffc0d4',6)}
 ${Ci(78,-142,18,'#ff8fb1','#e0668d',3)}${P('M88 -146 Q118 -140 112 -122 Q100 -120 90 -130Z','#f5d5a0','#2b2540',3)}${eye(80,-148,4)}</g>`;}
function dolphin(){return `${P('M-112 10 Q-72 -72 20 -62 Q82 -56 124 -16 Q86 -10 62 6 Q22 58 -50 42 Q-86 32 -112 10Z','#5aa9e6','#3a7fbd',4)}${P('M-70 24 Q-10 58 52 14','none','#d8efff',8)}
 ${P('M-112 10 Q-138 -12 -142 -40 Q-120 -18 -100 -8 Q-126 14 -136 42 Q-120 28 -104 22Z','#5aa9e6','#3a7fbd',4)}${P('M-10 -62 Q2 -104 34 -62Z','#4a93d0','#3a7fbd',4)}${eye(76,-20,6)}${P('M100 -6 Q114 0 122 -8','none','#2b2540',3)}`;}
function owl(t,o={}){const b=Math.sin(t*3)*4,f=o.happy?Math.sin(t*9)*22:0;
 return `<g transform="translate(0,${b})">${E(0,95,70,10,'rgba(0,0,0,.13)')}${g(-66,5,1,E(0,0,22,56,'#7c5230','#5e3b1c',4),12+f)}${g(66,5,1,E(0,0,22,56,'#7c5230','#5e3b1c',4),-12-f)}
 ${E(0,0,70,86,'#9a6b3f','#5e3b1c')}${E(0,20,50,60,'#f3dcb6')}${P('M-52 -64 L-62 -100 L-26 -76Z','#9a6b3f','#5e3b1c',4)}${P('M52 -64 L62 -100 L26 -76Z','#9a6b3f','#5e3b1c',4)}
 ${Ci(-26,-28,25,'#fff',INK,5)}${Ci(26,-28,25,'#fff',INK,5)}${Ci(-24,-26,10,'#2b2540')}${Ci(28,-26,10,'#2b2540')}${Ci(-21,-30,3.5,'#fff')}${Ci(31,-30,3.5,'#fff')}${P('M-2 -28 L2 -28','none',INK,5)}
 ${P('M-9 -10 L9 -10 L0 8Z','#ffa52e','#d9801a',3)}${P('M-24 86 l-6 14 m6 -14 l0 14 m0 -14 l8 14','none','#ffa52e',5)}${P('M24 86 l6 14 m-6 -14 l0 14 m0 -14 l-8 14','none','#ffa52e',5)}
 ${o.cap===false?'':`${P('M-56 -74 L0 -100 L56 -74 L0 -52Z','#2b2540')}${R(-28,-72,56,18,4,'#2b2540')}${P('M44 -78 L44 -48','none','#ffd23f',4)}${Ci(44,-46,6,'#ffd23f')}`}</g>`;}
const apple=()=>`${Ci(0,6,36,'#ef4b4b','#b82d2d')}${P('M0 -28 Q6 -44 18 -46','none','#6b4a2a',5)}${P('M4 -30 Q22 -52 34 -36 Q20 -26 4 -30Z','#4cbb68','#2f8f45',3)}${P('M-20 -6 Q-16 -16 -8 -18','none','#ff9a9a',5)}`;
const waterIcon=()=>`${P('M0 -52 Q42 4 0 40 Q-42 4 0 -52Z','#5cc3ff','#2e9ad6',5)}${P('M-16 8 Q-14 22 0 26','none','#d8f1ff',6)}`;
const shelterIcon=()=>`${P('M-48 -4 L0 -50 L48 -4Z','#ef6a5b','#c4473a',4)}${R(-38,-4,76,52,6,'#ffd27a','#d99a2b',4)}${R(-10,16,20,32,5,'#8b5a2b')}`;
const qmark=(x,y,s,t)=>g(x,y+Math.sin(t*4)*8,s,T(0,0,'?',120,'#ff7a45',{stroke:'#fff',sw:14}));
const sparkle=(x,y,s,t,c='#ffd23f')=>g(x,y,s*(0.8+0.25*Math.sin(t*6+x)),P('M0 -20 Q3 -3 20 0 Q3 3 0 20 Q-3 3 -20 0 Q-3 -3 0 -20Z',c,'#fff',2),t*40);
const heart=(x,y,s,c='#ff6b9a')=>g(x,y,s,P('M0 12 C-30 -10 -18 -32 0 -16 C18 -32 30 -10 0 12Z',c,'#fff',2));
const cactus=(x,y,s=1)=>g(x,y,s,`${R(-16,-100,32,150,16,'#3da35d','#2a7a43',3)}${R(-52,-62,20,16,8,'#3da35d','#2a7a43',3)}${R(-52,-86,18,42,9,'#3da35d','#2a7a43',3)}${R(32,-48,20,16,8,'#3da35d','#2a7a43',3)}${R(34,-76,18,42,9,'#3da35d','#2a7a43',3)}`);
const tree=(x,y,s,t,c1='#2e9a52',c2='#3fb866')=>g(x,y,s,`${R(-14,-20,28,150,6,'#8b5a2b')}<g transform="rotate(${Math.sin(t*1.5+x)*1.5} 0 -20)">${Ci(-40,-50,56,c1)}${Ci(40,-50,56,c1)}${Ci(0,-100,62,c2)}${Ci(0,-40,52,c2)}</g>`);

// ---------- backgrounds (1280x720 space) ----------
const sky=(id,a,b)=>`<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="1280" height="720" fill="url(#${id})"/>`;
const BG={
 arctic:t=>{let s=sky('gA','#b7e0ff','#eaf7ff')+Ci(1040,130,62,'#fff6d6')+P('M0 400 L180 270 L330 380 L520 250 L720 390 L900 290 L1100 400 L1280 330 V720 H0Z','#dff0fb')+P('M0 480 Q320 430 650 490 T1280 460 V720 H0Z','#ffffff','#d3e6f5',4)+P('M0 620 Q400 570 800 630 T1280 600 V720 H0Z','#e3f0fa');
  s+=P('M140 520 L190 440 L250 520Z','#cfe9fb','#a8d0ee',3)+P('M980 540 L1040 450 L1110 540Z','#cfe9fb','#a8d0ee',3);for(let i=0;i<42;i++){const x=(i*137.5)%1280,y=((t*55+i*71)%760)-20;s+=Ci(x+Math.sin(t+i)*10,y,2+i%3,'#fff');}return s;},
 desert:t=>{let s=sky('gD','#ffe49a','#ffcc6a');s+=`<g transform="translate(1040,130)">${Ci(0,0,70,'#fff0a8')}${[...Array(12)].map((_,i)=>`<line x1="0" y1="-90" x2="0" y2="-120" stroke="#ffe17a" stroke-width="8" stroke-linecap="round" transform="rotate(${i*30+t*12})"/>`).join('')}</g>`;
  s+=P('M0 520 Q250 400 560 500 T1280 470 V720 H0Z','#f4c870')+P('M0 610 Q300 530 700 610 T1280 585 V720 H0Z','#e7b45a')+cactus(190,470,1.1)+cactus(1110,500,.9)+cactus(960,540,.6);
  for(let i=0;i<4;i++){s+=P(`M${300+i*180} ${380+Math.sin(t*2+i)*4} q20 -14 40 0 t40 0`,'none','rgba(255,255,255,.45)',4);}return s;},
 forest:t=>{let s=sky('gF','#c8ecff','#e9f8ff');s+=P('M0 430 Q300 340 640 430 T1280 410 V720 H0Z','#9bd993')+P('M0 520 Q400 470 800 520 T1280 500 V720 H0Z','#5fb85a');
  [90,300,520,760,990,1190].forEach((x,i)=>s+=tree(x,360+(i%2)*40,.85+(i%3)*.1,t));s+=Ci(380,640,26,'#4cab52')+Ci(850,650,30,'#4cab52')+Ci(410,650,22,'#ff7aa8')+Ci(880,645,8,'#ffd23f');return s;},
 rainforest:(t,o={})=>{let s=sky('gR','#86c2a6','#c2e6cf');s+=P('M0 440 Q300 350 640 440 T1280 420 V720 H0Z','#2f8f55')+P('M0 540 Q400 480 800 540 T1280 520 V720 H0Z','#1f7a4a');
  [60,250,470,700,930,1150].forEach((x,i)=>s+=tree(x,330+(i%2)*40,1.05+(i%3)*.12,t,'#1c6b43','#2a8a55'));
  s+=P('M0 0 Q80 120 160 40','none','#1c6b43',10)+P('M1280 0 Q1200 140 1120 50','none','#1c6b43',10)+P('M300 0 Q330 90 300 150','none','#2a8a55',8)+P('M900 0 Q930 100 900 170','none','#2a8a55',8);
  const n=o.heavy?80:28;for(let i=0;i<n;i++){const x=(i*53)%1280,y=((t*700+i*97)%800)-40;s+=`<line x1="${x}" y1="${y}" x2="${x-9}" y2="${y+42}" stroke="rgba(255,255,255,.75)" stroke-width="3" stroke-linecap="round"/>`;}return s;},
 pond:t=>{let s=sky('gP','#cdeeff','#f1fbff')+P('M0 380 Q300 330 640 380 T1280 360 V720 H0Z','#9bd993')+P('M0 440 Q400 400 800 440 T1280 430 V720 H0Z','#7cc96b');
  s+=E(640,520,560,160,'#4db6ea','#3a98cc',6);for(let i=0;i<3;i++){const k=((t*.4+i/3)%1);s+=`<ellipse cx="${380+i*260}" cy="${530+(i%2)*30}" rx="${20+k*70}" ry="${8+k*26}" fill="none" stroke="rgba(255,255,255,${.7*(1-k)})" stroke-width="4"/>`;}
  s+=E(360,540,60,22,'#3fa65a','#2a7a43',3)+E(900,500,56,20,'#3fa65a','#2a7a43',3)+Ci(900,490,10,'#ff7aa8')+[0,1,2,3].map(i=>P(`M${120+i*30} 440 Q${112+i*30} 380 ${124+i*30} 330`,'none','#3a8f3a',6)).join('')+[0,1,2].map(i=>P(`M${1120+i*30} 440 Q${1112+i*30} 380 ${1124+i*30} 335`,'none','#3a8f3a',6)).join('');return s;},
 home:t=>sky('gH','#bfe8ff','#f1fbff')+Ci(120,110,54,'#fff3b0')+P('M0 540 Q400 500 800 540 T1280 520 V720 H0Z','#7ccb6b')+P('M0 620 Q400 590 800 620 T1280 610 V720 H0Z','#69b85a'),
 party:(t,v=0)=>{v=typeof v==='number'?v:0;const pal=[['#fff3c4','#ffe0d3'],['#d9f1ff','#e8e1ff'],['#e3f9d8','#fff4c9'],['#ffe3ef','#e3f0ff']][v%4];let s=sky('gQ',pal[0],pal[1]);for(let i=0;i<45;i++){const x=(i*83)%1280,y=((t*(60+(i%5)*20)+i*131)%800)-40;s+=v%2?`<circle cx="${x}" cy="${y}" r="7" fill="${['#ff6b9a','#4aa3ff','#ffd23f','#4cbb68','#a06bff','#ff8a30'][i%6]}" opacity=".55"/>`:`<rect x="${x}" y="${y}" width="14" height="8" fill="${['#ff6b9a','#4aa3ff','#ffd23f','#4cbb68','#a06bff','#ff8a30'][i%6]}" transform="rotate(${t*120+i*40} ${x} ${y})" opacity=".8"/>`;}return s;},
 bahrain:t=>{let s=sky('gB','#8fd3ff','#fff0c8')+`<g transform="translate(1080,120)">${Ci(0,0,64,'#fff0a8')}${[...Array(12)].map((_,i)=>`<line x1="0" y1="-82" x2="0" y2="-108" stroke="#ffe17a" stroke-width="7" stroke-linecap="round" transform="rotate(${i*30+t*12})"/>`).join('')}</g>`;
  s+=R(0,330,1280,200,0,'#38b6e8')+[0,1,2,3,4,5].map(i=>P(`M${i*230-30} ${380+(i%2)*50} q30 -16 60 0 t60 0`,'none','rgba(255,255,255,.6)',5)).join('')+P('M0 520 Q300 470 640 520 T1280 500 V720 H0Z','#f2cf86')+P('M0 620 Q400 570 900 620 T1280 600 V720 H0Z','#e8bd6c');
  s+=`<g transform="translate(150,520)">${P('M0 0 Q-10 -120 10 -230','none','#9b6b3a',20)}${[-70,-35,0,35,70].map(a=>P(`M10 -230 Q${a*1.8+10} ${-300+Math.abs(a)*.6} ${a*2.2+10} ${-200+Math.abs(a)}`,'none','#3fa65a',12)).join('')}${Ci(0,-215,9,'#c0752f')}${Ci(18,-210,9,'#c0752f')}</g>`;return s;},
};
function card(x,y,w,env,t,o={}){const h=w*9/16,s=w/1280,id='cc'+(cid++),bg=BG[env](t);
 return `<g opacity="${o.dim?.35:1}" transform="translate(${x+w/2},${y+h/2}) scale(${o.win?1.05:1}) translate(${-w/2},${-h/2})"><defs><clipPath id="${id}"><rect width="${w}" height="${h}" rx="22"/></clipPath></defs><g clip-path="url(#${id})"><g transform="scale(${s})">${bg}${o.inner||''}</g></g><rect width="${w}" height="${h}" rx="22" fill="none" stroke="${o.win?'#2fbf71':INK}" stroke-width="${o.win?9:5}"/></g>`;}
let cid=0;
const pill=(x,y,w,txt,fill,tc='#fff',sz=34)=>R(x,y,w,sz*1.6,sz*.8,fill,'#fff',4)+T(x+w/2,y+sz*1.15,txt,sz,tc);
const banner=(txt,sub,col)=>`<g>${R(40,34,Math.max(300,txt.length*44+60),sub?122:84,40,col,'#fff',6)}${T(40+Math.max(300,txt.length*44+60)/2,sub?92:94,txt,56,'#fff')}${sub?T(40+Math.max(300,txt.length*44+60)/2,138,sub,32,'#fff',{w:500}):''}</g>`;
function wrap(s,m){const w=s.split(' ');const L=[];let c='';w.forEach(x=>{if((c+' '+x).trim().length>m){L.push(c.trim());c=x}else c+=' '+x});L.push(c.trim());return L;}
function caption(text,col=INK,tc=INK){const L=wrap(text,48),sz=L.length>2?32:40,h=L.length*(sz+12)+28,y0=704-h;
 return R(60,y0,1160,h,30,'rgba(255,255,255,.95)',col,5)+L.map((l,i)=>T(640,y0+18+sz*.86+i*(sz+12),l,sz,tc)).join('');}
const pat=(seg,t)=>{let k=-1;seg.parts.forEach((p,i)=>{if(t>=p.t)k=i});return k;};
const pT=(seg,i)=>seg.parts[i]?seg.parts[i].t:1e9;
const confettiTop=t=>'';


// ---------- plant props ----------
function flower(t,o={}){const sw=Math.sin(t*2)*2,c=o.c||'#ff6b9a',st=o.pale?'#b8c46a':'#3fa65a',dr=o.droop?28:0;
 return `<g transform="rotate(${sw+dr} 0 90)">${R(-5,-5,10,95,4,st)}${E(-26,50,26,11,st,'#2f8f45',3).replace('/>',' transform="rotate(-25 -26 50)"/>')}${E(26,35,26,11,st,'#2f8f45',3).replace('/>',' transform="rotate(25 26 35)"/>')}${[...Array(8)].map((_,i)=>g(0,0,1,E(0,-32,15,24,o.pale?'#e8e2a0':c,'#fff',3),i*45)).join('')}${Ci(0,0,20,o.pale?'#d9d27a':'#ffd23f','#e0a800',3)}${eye(-7,-3,3.5)}${eye(7,-3,3.5)}${o.droop?P('M-7 9 Q0 3 7 9','none','#2b2540',2.5):P('M-7 6 Q0 13 7 6','none','#2b2540',2.5)}</g>`;}
function cactusBig(t,o={}){const sh=Math.sin(t*2)*1;return `${E(0,142,70,10,'rgba(0,0,0,.13)')}${R(-80,-40,56,26,13,'#3da35d','#2a7a43',4)}${R(-84,-84,30,72,15,'#3da35d','#2a7a43',4)}${R(24,-20,56,26,13,'#3da35d','#2a7a43',4)}${R(54,-62,30,72,15,'#3da35d','#2a7a43',4)}${R(-34,-100,68,240,34,'#3da35d','#2a7a43',4)}
 ${o.water?R(-22,-90,44,215,22,'rgba(92,195,255,.55)')+drop(0,-20+Math.sin(t*3)*10,1.3)+drop(0,50+Math.cos(t*3)*10,1):''}${[-14,14].map(x=>P(`M${x} -70 l0 -10`,'none','#c8f5d0',3)).join('')}${eye(-12,-40,6)}${eye(12,-40,6)}${P('M-10 -22 Q0 -12 10 -22','none','#2b2540',3)}${E(-22,-26,7,5,'#ff9fb0')}${E(22,-26,7,5,'#ff9fb0')}`;}
function fern(t){const s=Math.sin(t*1.5)*2;let o='';[-65,-35,0,35,65].forEach((a,i)=>{let leaf='';for(let j=1;j<=8;j++){const y=-j*17,w=17-j;leaf+=g(0,y,1,E(-w,0,w,5,'#3fa65a','#2f8f45',2),-35)+g(0,y,1,E(w,0,w,5,'#3fa65a','#2f8f45',2),35);}o+=g(0,0,1,`${P('M0 0 L0 -150','none','#2f8f45',5)}${leaf}`,a+s*(i%2?1:-1));});return o;}
function waterLily(t){const b=Math.sin(t*2)*3;return `<g transform="translate(0,${b})">${E(0,0,70,22,'#3fa65a','#2a7a43',3)}${[-40,-20,0,20,40].map(a=>g(0,-6,1,E(0,-17,9,19,'#ff8fb1','#fff',2),a)).join('')}${Ci(0,-8,8,'#ffd23f')}</g>`;}
function seaweed(t,h,c='#2f8f55'){const a=Math.sin(t*2)*18;return P(`M0 0 Q${a} ${-h*.25} 0 ${-h*.5} Q${-a} ${-h*.75} 0 ${-h}`,'none',c,14);}
function acacia(t,o={}){return `${E(0,125,120,12,'rgba(0,0,0,.13)')}${P('M0 -10 L-60 -55 M0 -10 L60 -55','none','#8b5a2b',14)}${R(-20,-12,40,134,10,'#8b5a2b','#6b4220',4)}${o.water?R(-10,-4,20,120,8,'rgba(92,195,255,.65)')+drop(0,50+Math.sin(t*3)*14,1.1):''}${E(0,-72,170,40,'#4cab52','#2f8a3a',4)}${E(-62,-92,92,28,'#5cc263')}${E(70,-94,92,28,'#5cc263')}`;}
function beachGrass(t,x,wind){let o='';for(let i=0;i<8;i++){const b=Math.sin(t*3+x+i)*8+(wind?34:0);o+=P(`M${i*9-32} 0 Q${i*7-26+b*.5} -60 ${i*13-48+b*1.6} ${-95-i*4}`,'none',['#7fbf4a','#5fa83a'][i%2],6);}return o;}
function tuft(t,s=1){let o='';for(let i=0;i<5;i++){const b=Math.sin(t*30+i)*1.5;o+=P(`M${i*8-16} 0 Q${i*6-12+b} -20 ${i*10-22+b} -${34+i*3}`,'none','#6fae6a',5);}return o+E(0,6,30,8,'#fff','#d3e6f5',2);}
function palm(t){const frond=(a,mir,sw)=>{let l='';for(let i=1;i<=8;i++){const u=i/9,x=2*(1-u)*u*60+u*u*130,y=2*(1-u)*u*(-60);l+=P(`M${x} ${y} l7 24`,'none','#3fa65a',6)+P(`M${x} ${y} l7 -18`,'none','#4cbb68',5);}return g(8,-240,[mir,1],g(0,0,1,P('M0 0 Q60 -60 130 0','none','#3fa65a',12)+l,a+sw));};
 let f='';[-70,-40,-12,14].forEach((a,i)=>{const sw=Math.sin(t*1.6+i)*3;f+=frond(a,1,sw)+frond(a,-1,sw);});
 return `${E(0,10,80,12,'rgba(0,0,0,.13)')}${P('M0 0 Q-14 -120 8 -240','none','#9b6b3a',24)}${f}${[[-6,-222],[14,-216],[2,-206],[-14,-210]].map(([x,y])=>E(x,y,10,14,'#c0752f','#8a4a14',2)).join('')}`;}
function vGarden(t){let c='';for(let r=0;r<7;r++)for(let q=0;q<12;q++){const v=(r*7+q*13)%6,x=-275+q*50+(r%2)*10,y=-155+r*50;c+=Ci(x,y,29,['#3fa65a','#4cbb68','#2f8f55','#5cc263','#3a9a50','#6fd070'][v])+(v===1?Ci(x+6,y-4,10,'#ff7aa8'):v===3?Ci(x-6,y+4,9,'#ffd23f'):v===5?Ci(x,y,8,'#fff'):'');}return `${R(-300,-180,600,360,30,'#cdd5dd','#8b97a3',6)}${c}`;}
const thermo=(col)=>`${R(-10,-60,20,92,10,'#fff',INK,4)}${Ci(0,38,20,col,INK,4)}${R(-4,-22,8,58,4,col)}`;
const iconAir=()=>`${P('M-40 -16 Q-20 -32 0 -16 T40 -16','none','#7ab8e6',7)}${P('M-40 4 Q-20 -12 0 4 T50 4','none','#7ab8e6',7)}${P('M-30 24 Q-10 8 10 24 T40 24','none','#7ab8e6',7)}`;
const iconSun=()=>`${[...Array(8)].map((_,i)=>`<line x1="0" y1="-38" x2="0" y2="-52" stroke="#ffd23f" stroke-width="7" stroke-linecap="round" transform="rotate(${i*45})"/>`).join('')}${Ci(0,0,28,'#ffd23f','#e0a800',4)}`;
const iconSoil=()=>`${P('M-52 30 Q-32 -22 0 -22 Q32 -22 52 30Z','#8b5a2b','#5e3b1c',4)}${Ci(-14,6,5,'#c9955a')}${Ci(16,10,5,'#c9955a')}${P('M0 -30 q0 -16 10 -22','none','#4cbb68',5)}`;
const carrot=()=>`${P('M-20 -28 Q0 -40 20 -28 L3 64 Q0 70 -3 64Z','#ff8a30','#d96a14',4)}${P('M-8 -32 Q-14 -56 -22 -52 M0 -34 Q0 -60 0 -62 M8 -32 Q14 -56 22 -52','none','#3fa65a',6)}`;
const dates=()=>`${E(-18,10,17,26,'#8b4a1f','#5e2f10',3)}${E(14,6,17,26,'#9b5a2a','#5e2f10',3)}${E(0,-4,17,26,'#8b4a1f','#5e2f10',3).replace('/>',' transform="rotate(12)"/>')}${P('M0 -34 q6 -14 14 -16','none','#3fa65a',5)}`;
const potted=(t,o={})=>`${E(0,92,60,9,'rgba(0,0,0,.2)')}${flower(t,{pale:o.pale,droop:o.pale,c:'#ff6b9a'})}${P('M-46 70 L46 70 L36 125 L-36 125Z','#c9753b','#8a4e22',4)}${R(-50,60,100,16,6,'#d98a4c','#8a4e22',4)}`;
const basket=()=>`${P('M-70 -10 L70 -10 L55 62 L-55 62Z','#c98a4b','#8b5a2b',5)}${[0,1,2].map(i=>P(`M${-62+i*8} ${6+i*18} H${62-i*8}`,'none','#8b5a2b',3)).join('')}${P('M-62 -10 Q0 -92 62 -10','none','#8b5a2b',8)}`;
const _bah=BG.bahrain;BG.bahrain2=t=>{const x=_bah(t);return x.slice(0,x.indexOf('<g transform="translate(150,520)">'));};
Object.assign(BG,{
 savanna:t=>{let s=sky('gS','#ffd09a','#fff0c8')+Ci(900,310,95,'#ffb347')+Ci(900,310,70,'#ffd27a');s+=P('M0 470 Q400 440 800 470 T1280 455 V720 H0Z','#e5c06a')+P('M0 570 Q400 540 900 575 T1280 555 V720 H0Z','#cfa954');
  s+=g(140,470,.35,acacia(t)).replace('<g','<g opacity=".55"')+g(1130,465,.3,acacia(t)).replace('<g','<g opacity=".55"');for(let i=0;i<14;i++)s+=P(`M${60+i*90} 640 q4 -30 12 -38`,'none','#b8903c',4);return s;},
 beach:(t,o={})=>{let s=sky('gBc','#9bdcff','#e6f7ff')+R(0,290,1280,160,0,'#38b6e8')+[0,1,2,3,4,5].map(i=>P(`M${i*230-30} ${340+(i%2)*40} q30 -16 60 0 t60 0`,'none','rgba(255,255,255,.6)',5)).join('')+P('M0 450 Q400 410 900 450 T1280 435 V720 H0Z','#f6dc9a')+P('M0 580 Q400 550 900 585 T1280 570 V720 H0Z','#ecca80')+Ci(1100,110,56,'#fff3b0');
  if(o.wind)for(let i=0;i<7;i++){const x=((t*500+i*260)%1500)-150,y=150+i*55;s+=P(`M${x} ${y} q40 -20 80 0 t80 0`,'none','rgba(255,255,255,.85)',6);}return s;},
 pondcut:t=>{let s=sky('gPc','#cdeeff','#f1fbff')+R(0,255,1280,60,0,'#7cc96b')+`<defs><linearGradient id="gW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6cc6f2"/><stop offset="1" stop-color="#2a8fd0"/></linearGradient></defs>`+R(0,310,1280,410,0,'url(#gW)')+P('M0 312 Q160 296 320 312 T640 312 T960 312 T1280 312','none','#fff',5)+P('M0 690 Q400 650 900 690 T1280 670 V720 H0Z','#e3cc92');
  for(let i=0;i<9;i++){const q=((t*.35+i/9)%1);s+=Ci(100+i*140+Math.sin(t+i)*10,700-q*380,5+i%3*3,'rgba(255,255,255,.55)');}return s;},
 underwater:t=>{let s=sky('gU','#8fe0f5','#1f7fc0');for(let i=0;i<5;i++)s+=P(`M${100+i*260} 0 L${200+i*260} 0 L${60+i*260} 720 L${i*260-20} 720Z`,'rgba(255,255,255,.08)');s+=P('M0 670 Q400 630 900 670 T1280 650 V720 H0Z','#f2d79b');for(let i=0;i<14;i++){const q=((t*.3+i/14)%1);s+=Ci(60+i*92+Math.sin(t*2+i)*12,700-q*700,5+i%3*3,'rgba(255,255,255,.5)');}return s;},
 cupboard:t=>sky('gCu','#5a4030','#3a281c')+R(0,520,1280,24,0,'#2a1c12')+R(0,0,1280,40,0,'#2a1c12'),
});


function eagle(t,o={}){const b=Math.sin(t*3)*3,f=o.fly?Math.sin(t*9)*16:0;
 return `<g transform="translate(0,${b})">${g(-10,-20,1,P('M0 0 Q-60 -70 -150 -40 Q-100 -10 -70 20 Q-30 20 10 30Z','#6b4423','#3e2713',4),f)}
 ${P('M-26 60 L-62 150 L-18 138 L8 158 L22 70Z','#7a4f2b','#3e2713',4)}${P('M-8 78 L-8 124 M20 78 L20 124','none','#ffc233',9)}${P('M-8 124 q-10 14 -20 10 M-8 124 q4 16 -6 20 M20 124 q-10 14 -20 10 M20 124 q4 16 -6 20','none','#ffc233',6)}
 ${E(0,0,56,82,'#8a5a30','#3e2713',4)}${E(10,22,34,54,'#b07a45')}${g(-10,-20,1,P('M0 0 Q70 -50 150 -10 Q100 10 70 30 Q30 30 -10 40Z','#7a4f2b','#3e2713',4),-f)}
 ${Ci(22,-94,36,'#fff','#bcbcbc',4)}${P('M48 -100 Q86 -96 78 -68 Q66 -80 52 -82Z','#ffc233','#c78f00',3)}${eye(34,-102,6)}${P('M20 -114 L46 -108','none','#6b4423',5)}</g>`;}
function bee(t){const w=Math.sin(t*45)*12;return `${E(-4,-26,14,22,'rgba(200,230,255,.75)','#9bc9e8',2).replace('/>',` transform="rotate(${-25+w} -4 -26)"/>`)}${E(14,-26,14,22,'rgba(200,230,255,.75)','#9bc9e8',2).replace('/>',` transform="rotate(${25-w} 14 -26)"/>`)}${E(0,0,36,26,'#ffd23f','#2b2540',3)}${E(-8,0,6,24,'#2b2540')}${E(8,0,6,24,'#2b2540')}${Ci(24,-4,3,'#2b2540')}${P('M26 -16 q8 -14 14 -12 M20 -18 q4 -14 12 -16','none','#2b2540',3)}${P('M-36 0 l-12 4','none','#2b2540',4)}${P('M18 6 Q26 12 32 6','none','#2b2540',2.5)}`;}
function oryx(t){const b=Math.sin(t*4)*2;return `<g transform="translate(0,${b})">${E(0,112,115,12,'rgba(0,0,0,.13)')}${[-78,-48,34,64].map((x,i)=>R(x,30,20,82,8,'#f5efe6','#cbbfae',3)+R(x,84,20,28,6,'#6b4a3a')).join('')}${E(0,0,102,52,'#f5efe6','#cbbfae',4)}${P('M-100 -10 Q-124 10 -114 52','none','#cbbfae',7)}
 ${P('M64 -22 Q96 -38 100 -90 L134 -86 Q134 -20 98 24Z','#f5efe6','#cbbfae',4)}${P('M112 -112 L50 -208','none','#4a3b2a',7)}${P('M122 -114 L66 -214','none','#4a3b2a',7)}${E(122,-96,36,22,'#f5efe6','#cbbfae',4)}${P('M104 -104 Q126 -90 150 -92','none','#6b4a3a',7)}${E(100,-110,6,13,'#f5efe6','#cbbfae',3)}${eye(130,-102,5)}${E(154,-92,7,5,'#2b2540')}</g>`;}
function penguin(t){const b=Math.sin(t*4)*3;return `<g transform="translate(0,${b})">${E(0,98,70,9,'rgba(0,0,0,.13)')}${E(-34,90,24,10,'#ffa52e','#d9801a',3)}${E(34,90,24,10,'#ffa52e','#d9801a',3)}${E(-64,10,16,52,'#2b2540').replace('/>',' transform="rotate(14 -64 10)"/>')}${E(64,10,16,52,'#2b2540').replace('/>',' transform="rotate(-14 64 10)"/>')}${E(0,0,62,88,'#2b2540','#1a1530',4)}${E(0,20,44,64,'#fff')}${Ci(-20,-40,13,'#fff')}${Ci(20,-40,13,'#fff')}${eye(-20,-40,6)}${eye(20,-40,6)}${P('M-12 -24 L12 -24 L0 -6Z','#ffa52e','#d9801a',3)}</g>`;}
const nestIcon=()=>`${E(0,14,52,22,'#a97c50','#6b4a2a',4)}${E(-16,-6,14,19,'#fff','#cbbfae',3)}${E(14,-4,14,19,'#fff','#cbbfae',3)}`;
const spawn=()=>[...Array(15)].map((_,i)=>{const x=(i%5)*24-48+(Math.floor(i/5)%2)*10,y=Math.floor(i/5)*22-22;return Ci(x,y,11,'rgba(190,235,205,.8)','#7bc9a0',2)+Ci(x,y,3.5,'#2b2540');}).join('');
const bin=()=>`${R(-40,-10,80,100,10,'#6b7a8c','#3f4a58',4)}${R(-52,-28,104,20,8,'#8b9bb0','#3f4a58',4)}${P('M0 14 L16 42 L-16 42Z','none','#4cbb68',6)}`;
const crossIcon=(ic)=>`${ic}${Ci(0,0,48,'none','#ef4b4b',8)}${P('M-34 34 L34 -34','none','#ef4b4b',8)}`;


// ---------- extra props ----------
function ollie(t,o={}){const b=Math.sin(t*3)*4;return owl(t,{cap:false,happy:o.happy})+`<g transform="translate(0,${b})">${R(-46,50,92,16,8,'#ef6a5b','#c4473a',3)}${P('M18 62 L30 92 L8 88Z','#ef6a5b','#c4473a',3)}${P('M-62 -52 Q-62 -114 0 -114 Q62 -114 62 -52 Q0 -72 -62 -52Z','#8b5a2b','#5e3b1c',4)}${R(-62,-68,124,10,5,'#5e3b1c')}${Ci(-22,-88,16,'rgba(160,225,255,.8)','#c9a24a',5)}${Ci(22,-88,16,'rgba(160,225,255,.8)','#c9a24a',5)}${Ci(-27,-93,4,'#fff')}${Ci(17,-93,4,'#fff')}</g>`;}
function balloon(t){const sw=Math.sin(t*1.5)*3;return `<g transform="rotate(${sw} 0 80)">${Ci(0,-110,100,'#ef6a5b','#c4473a',5)}${E(0,-110,45,100,'#ffd23f')}${E(0,-110,16,100,'#4aa3ff')}${P('M-72 -44 L-30 46 M72 -44 L30 46 M0 -10 L0 46','none','#8b5a2b',4)}${R(-36,46,72,46,8,'#c98a4b','#8b5a2b',4)}</g>`;}
function lizard(t){return `${E(0,42,70,8,'rgba(0,0,0,.13)')}${P('M-60 10 Q-120 -14 -152 30 Q-110 14 -70 26','#7bbf4a','#4f8f2a',5)}${E(0,0,64,28,'#8fd05a','#4f8f2a',4)}${[-36,28].map(x=>E(x,26,10,16,'#7bbf4a','#4f8f2a',3)).join('')}${E(66,-6,26,18,'#8fd05a','#4f8f2a',4)}${eye(74,-12,5)}${P('M82 -2 Q90 0 96 -4','none','#2b2540',2.5)}${E(-6,-8,36,7,'#6fae3a')}`;}
function scorpion(t){return `${P('M-50 0 Q-112 -10 -102 -70 Q-92 -112 -50 -100','none','#8a4a2a',14)}${Ci(-50,-100,9,'#c0392b')}${[-30,-8,14,36].map(x=>P(`M${x} 22 l-6 20 M${x} 22 l8 20`,'none','#6b3320',4)).join('')}${E(0,0,56,30,'#a85a35','#6b3320',4)}${E(60,-16,16,12,'#a85a35','#6b3320',3)}${P('M62 -26 L92 -50 M62 -8 L94 8','none','#a85a35',9)}${Ci(96,-54,12,'#a85a35','#6b3320',3)}${Ci(98,10,12,'#a85a35','#6b3320',3)}${eye(70,-18,3.5)}`;}
function turtle(t){return `${E(0,52,76,8,'rgba(0,0,0,.13)')}${E(-48,38,16,12,'#7bbf4a','#4f8f2a',3)}${E(48,38,16,12,'#7bbf4a','#4f8f2a',3)}${P('M-82 32 Q-82 -52 0 -52 Q82 -52 82 32Z','#6fae3a','#3f7a1f',5)}${[-40,0,40].map(x=>E(x,-12,17,14,'#8fd05a','#3f7a1f',3)).join('')}${E(90,10,22,16,'#7bbf4a','#4f8f2a',4)}${eye(98,4,4.5)}${P('M94 18 Q100 20 106 16','none','#2b2540',2.5)}${P('M-82 28 L-100 38 L-82 42Z','#7bbf4a','#4f8f2a',3)}`;}
function snail(t){return `${E(0,34,84,18,'#d6e87a','#8aa83a',4)}${E(80,12,16,24,'#d6e87a','#8aa83a',4)}${P('M86 -6 l8 -26 M74 -6 l-2 -28','none','#8aa83a',5)}${Ci(94,-34,5,'#2b2540')}${Ci(72,-36,5,'#2b2540')}${Ci(-6,-6,46,'#e0a050','#a56a24',5)}${P('M-6 -6 m-4 0 a6 6 0 1 1 6 6 a14 14 0 1 1 -14 -20 a26 26 0 1 1 22 40','none','#a56a24',4)}`;}
function butterfly(t){const f=.45+.55*Math.abs(Math.sin(t*6));return `<g transform="scale(${f},1)">${E(-34,-14,34,30,'#ff8a30','#c0561a',3)}${E(34,-14,34,30,'#ff8a30','#c0561a',3)}${E(-26,24,24,22,'#ffb347','#c0561a',3)}${E(26,24,24,22,'#ffb347','#c0561a',3)}${Ci(-34,-14,9,'#fff')}${Ci(34,-14,9,'#fff')}</g>${E(0,4,7,32,'#3b3355')}${P('M-2 -26 q-10 -16 -16 -14 M2 -26 q10 -16 16 -14','none','#3b3355',3)}`;}
function ladybug(t){return `${Ci(0,0,24,'#ef4b4b','#2b2540',3)}${P('M0 -24 V24','none','#2b2540',3)}${[[-10,-8],[10,-8],[-10,10],[10,10]].map(([x,y])=>Ci(x,y,4,'#2b2540')).join('')}${Ci(0,-26,10,'#2b2540')}${P('M-4 -34 l-6 -10 M4 -34 l6 -10','none','#2b2540',3)}`;}
function bulbul(t){const b=Math.sin(t*5)*2;return `<g transform="translate(0,${b})">${P('M-40 -4 Q-74 6 -64 28 L-30 14Z','#8a7050','#6b5238',3)}${E(0,0,44,34,'#a58a6a','#6b5238',3)}${E(10,10,28,20,'#f1e6d2')}${Ci(30,-22,22,'#2b2540')}${P('M24 -42 Q26 -64 40 -56','none','#2b2540',6)}${E(36,-18,9,7,'#fff')}${eye(32,-24,4)}${P('M50 -22 L68 -16 L50 -12Z','#f5a623','#c27d0e',2)}${E(-8,38,3,12,'#6b5238')}${E(10,38,3,12,'#6b5238')}${Ci(-12,22,6,'#e5504a')}</g>`;}
function cloud(t,o={}){const n=o.n??6;let d='';for(let i=0;i<n;i++){const q=((t*.9+i/n)%1);d+=drop(-60+i*(120/Math.max(1,n-1)),30+q*90,.8).replace('<g','<g opacity="'+(1-q)+'"');}return `${E(-40,0,50,34,'#e3ecf5','#b7c6d6',4)}${E(10,-14,56,42,'#f1f6fb','#b7c6d6',4)}${E(54,4,44,30,'#e3ecf5','#b7c6d6',4)}${d}`;}
const moon=()=>P('M0 -50 A50 50 0 1 0 0 50 A38 38 0 1 1 0 -50Z','#fff6c8','#e8d98a',3);
function fern2(t,o={}){const s=Math.sin(t*1.5)*2,c1=o.dull?'#b7b36a':'#3fa65a',c2=o.dull?'#8f8a48':'#2f8f45';let r='';[-65,-35,0,35,65].forEach((a,i)=>{let leaf='';for(let j=1;j<=8;j++){const y=-j*17,w=17-j;leaf+=g(0,y,1,E(-w,0,w,5,c1,c2,2),-35)+g(0,y,1,E(w,0,w,5,c1,c2,2),35);}r+=g(0,0,1,`${P('M0 0 L0 -150','none',c2,5)}${leaf}`,a+(o.dull?(i%2?9:-9):s*(i%2?1:-1)));});return r;}
Object.assign(BG,{desertNight:t=>{let s=sky('gDn','#1c2552','#5a4a7a')+g(1050,130,1.2,moon());for(let i=0;i<40;i++)s+=Ci((i*97)%1280,(i*53)%330,1.5+(i%3)*.8,`rgba(255,255,255,${.5+.5*Math.sin(t*3+i)})`);s+=P('M0 520 Q250 400 560 500 T1280 470 V720 H0Z','#8a7a8a')+P('M0 610 Q300 530 700 610 T1280 585 V720 H0Z','#6a5a6e')+cactus(190,470,1.1).replace(/#3da35d/g,'#2d7a46')+cactus(1110,500,.9);return s;}});

// ---------- registry ----------
const REG={
 polarBear:(t,o)=>polarBear(t,o),camel:(t,o)=>camel(t,o),frog:t=>frog(t),fish:(t,o)=>fish(t,o),rabbit:t=>rabbit(t),flamingo:t=>flamingo(t),dolphin:()=>dolphin(),eagle:(t,o)=>eagle(t,o),bee:t=>bee(t),oryx:t=>oryx(t),penguin:t=>penguin(t),hamster:t=>hamster(t),
 lizard,scorpion,turtle,snail,butterfly,ladybug,bulbul,ollie,balloon,owl:(t,o)=>owl(t,o),
 bush:()=>bush(),flower:(t,o)=>flower(t,o),cactusBig:(t,o)=>cactusBig(t,o),cactus:()=>cactus(0,0,1),fern:(t,o)=>fern2(t,o),waterLily:t=>waterLily(t),seaweed:(t,o)=>seaweed(t,o.h||150,o.c),acacia:(t,o)=>acacia(t,o),beachGrass:(t,o)=>beachGrass(t,o.ph||0,o.wind),tuft:t=>tuft(t),palm:t=>palm(t),tree:(t,o)=>tree(0,0,1,t,o.c1,o.c2),vGarden:t=>vGarden(t),house:()=>house(),nest:nestIcon,
 apple:apple,water:waterIcon,shelter:shelterIcon,air:iconAir,sun:iconSun,soil:iconSoil,thermo:(t,o)=>thermo(o.col||'#ef4b4b'),carrot,dates,bin,moon,cloud,spawn,
 sparkle:(t,o)=>sparkle(0,0,o.s||1,t,o.c),heart:(t,o)=>heart(0,0,1.4,o.c),drop:(t,o)=>drop(0,0,o.s||1.2,o.c),qmark:t=>T(0,Math.sin(t*4)*8,'?',120,'#ff7a45',{stroke:'#fff',sw:14}),
 ring:(t,o)=>`<circle r="${(o.r||60)+Math.sin(t*6)*4}" fill="none" stroke="${o.c||'#ef6a5b'}" stroke-width="7" ${o.dash?'stroke-dasharray="14 12"':''}/>`,
 cross:(t,o)=>`${Ci(0,0,o.r||48,'none','#ef4b4b',8)}${P(`M${-(o.r||48)*.7} ${(o.r||48)*.7} L${(o.r||48)*.7} ${-(o.r||48)*.7}`,'none','#ef4b4b',8)}`,
 check:()=>`${Ci(0,0,34,'#2fbf71','#fff',4)}${P('M-16 2 L-4 14 L18 -12','none','#fff',8)}`,
 text:(t,o)=>T(0,0,o.t,o.sz||80,o.c||INK,{stroke:'#fff',sw:o.sw||14}),
 callout:(t,o)=>{const dx=o.dx||0,dy=o.dy||0,sz=o.sz||26,w=o.w||Math.max(130,o.t.length*sz*.5+50);return `<line x1="0" y1="0" x2="${dx}" y2="${dy}" stroke="${INK}" stroke-width="4"/>${Ci(dx,dy,9,'#ef4b4b','#fff',3)}`+R(-w/2,-sz*.8,w,sz*1.6,sz*.8,o.c||'#2f9fd8','#fff',4)+T(0,sz*.36,o.t,sz,'#fff');},
 pill:(t,o)=>{const sz=o.sz||34,w=o.w||(o.t.length*sz*.52+60);return R(-w/2,-sz*.8,w,sz*1.6,sz*.8,o.c||'#a06bff','#fff',4)+T(0,sz*.38,o.t,sz,'#fff');},
 banner:(t,o)=>{const w=Math.max(300,o.t.length*44+60),h=o.sub?122:84;return R(0,0,w,h,40,o.c,'#fff',6)+T(w/2,o.sub?58:60,o.t,56,'#fff')+(o.sub?T(w/2,104,o.sub,32,'#fff',{w:500}):'');},
 icard:(t,o)=>`${R(-125,-165,250,320,40,'#fff',o.c,8)}${g(0,-30,1.7,REG[o.ic](t,o))}${T(0,118,o.l,o.l.length>7?36:46,o.c)}`,
 chip:(t,o)=>`${g(0,-18,.85,REG[o.ic](t,o))}${T(0,60,o.l,o.l.length>6?22:28,o.c)}`,
 cardEnv:(t,o)=>{const w=o.w||400,h=w*9/16;return card(-w/2,-h/2,w,o.env,t,{inner:drawItems(o.in||[],t,null),win:o.win,dim:o.dim})+(o.l?g(0,h/2+6,1,REG.pill(t,{t:o.l,c:o.lc||'#a06bff',sz:o.lsz||28,w:o.lw||240})):'');},
 crossed:(t,o)=>REG[o.ic](t,o)+REG.cross(t,{r:o.r||50}),
};
function drawItems(items,t,seg){let s='';for(const it of items){const at=it.at||0,t0=seg?pT(seg,at):0,t1=seg&&it.until!=null?pT(seg,it.until):1e9;if(t<t0||t>=t1)continue;const sc=it.nopop?1:pop(t,t0);let x=it.x,y=it.y,m=it.move;if(m){const q=clamp((t-t0-(m.delay||0))/(m.dur||2));x+=m.dx*q;y+=m.dy*q-(m.arc||0)*Math.sin(q*Math.PI);}const f=REG[it.f];if(!f)continue;const k=(it.s||1)*sc;s+=g(x,y,[k*(it.flip?-1:1),k],f(t,it.o||{}),it.rot||0);}return s;}

Object.assign(REG,{egg:()=>E(0,0,26,34,'#fff','#cbbfae',4)+Ci(-6,-8,3,'#e8dcc8')+Ci(8,6,3,'#e8dcc8'),feet:()=>E(-26,0,22,34,'#cfa97a','#a67c4d',4)+E(26,-18,22,34,'#cfa97a','#a67c4d',4),
 snowman:()=>Ci(0,50,52,'#fff','#c5d4e2',4)+Ci(0,-18,38,'#fff','#c5d4e2',4)+Ci(0,-70,28,'#fff','#c5d4e2',4)+P('M0 -70 L26 -64 L0 -60Z','#ff8a30')+Ci(-9,-78,3,'#2b2540')+Ci(9,-78,3,'#2b2540')+R(-22,-112,44,26,4,'#2b2540')+R(-32,-92,64,8,3,'#2b2540')+[-18,0,18].map(y=>Ci(0,y,4,'#2b2540')).join(''),
 litter:()=>[[-60,0],[-20,18],[30,-6],[70,14],[0,-24]].map(([x,y],i)=>Ci(x,y,14,['#9aa4b0','#c9b28a','#b8c4d0'][i%3],'#6b7a8c',3)).join('')});
// ---------- scenes ----------
function bgFor(d,k,t){let b=d.bg||'home',o=d.bgo||{};(d.bgs||[]).forEach(x=>{if(k>=x.at){b=x.bg;o=x.o||{};}});return BG[b](t,o);}
function storyScene(seg,t,d){const k=pat(seg,t);let s=bgFor(d,k,t)+drawItems(d.items||[],t,seg);if(d.corner!==false){const pk=k>=0?seg.parts[k].t:-9,hp=(t-pk)<0.9&&k>=0,rt=t-seg.t0,rc=(d.react||[]).find(q=>rt>=q.at&&rt<q.at+1.8);s+=g(1130,520,.75*pop(t,seg.t0+.2)*(hp?1.06:1),ollie(t,{happy:hp||!!rc}),rc?Math.sin(t*14)*7:0);if(rc)s+=g(1075,410,pop(t,seg.t0+rc.at),REG.pill(t,{t:rc.k||'!',c:'#ef4b4b',sz:30}));}const txt=k>=0?seg.parts[k].text:'';return s+(txt?caption(txt):'');}
function titleScene(t){const T0=CLIP.title;return BG.home(t)+g(640,125,1,T(0,0,T0.l1,100,T0.c,{stroke:'#fff',sw:16}))+g(640,235,1,T(0,0,T0.l2,100,T0.c,{stroke:'#fff',sw:16}))+T(640,305,T0.sub,44,INK,{w:500})+g(640,478,1.5,ollie(t,{}))+g(1060,330,.8*pop(t,.5),balloon(t))+g(230,500,.9*pop(t,.8),REG[T0.deco||'bush']?.(t,{}) ||'');}
function illu2(Q,ans,aT,t){if(WB[Q.kind])return WB[Q.kind](Q,ans,aT,t);let s='';const cx=790,V=Q.vis||{},inner=drawItems(V.items||[],t,null);
 const chk=ok(1180,170,pop(t,aT+.1));
 if(Q.kind==='open'){const cwq=ans?620-120*clamp((t-aT)/.5):620;s+=card(790-cwq/2,140,cwq,V.bg||'home',t,{inner});if(!ans)s+=g(1010,190,1,REG.qmark(t));else{const R_=Q.rev||{};const ch=R_.chips||[];ch.forEach((c,i)=>{const x=cx+(i-(ch.length-1)/2)*190,sc=pop(t,aT+.3+i*.6);if(sc>0)s+=g(x,478,sc,REG.chip(t,c));});const pl=R_.pills||[];pl.forEach((p,i)=>{const x=cx+(i-(pl.length-1)/2)*350;s+=g(x,480,pop(t,aT+.3+i*.5),REG.pill(t,{t:p,w:330,sz:p.length>18?23:30,c:R_.c||'#2a8fd0'}));});s+=chk;}}
 if(Q.kind==='tf'){s+=card(350,160,560,V.bg||'home',t,{inner});[['TRUE',250],['FALSE',380]].forEach(([l,y])=>{const win=ans&&(l==='TRUE')===(Q.correct==='T'),dim=ans&&!win;s+=`<g opacity="${dim?.3:1}">${R(930,y,260,100,40,win?'#2fbf71':'#4aa3ff','#fff',6)}${T(1060,y+68,l,52,'#fff')}</g>`;});if(ans)s+=ok(1180,200,pop(t,aT+.1));}
 if(Q.kind==='opts'){s+=drawItems(Q.top||[],t,null);const n=Q.opts.length;Q.opts.forEach((o,i)=>{const win=ans&&i===Q.correct,dim=ans&&i!==Q.correct;let x,y,w;if(n===3){x=350+i*300;y=320;w=280;}else{x=i?800:360;y=255;w=420;}const inn=drawItems(o.items||[],t,null);s+=card(x,y,w,o.bg||'home',t,{win,dim,inner:inn})+g(x+w/2,y+w*9/16+(n===3?14:22),1,REG.pill(t,{t:o.l,c:win?'#2fbf71':'#a06bff',sz:n===3?24:30,w:n===3?240:300}));});if(ans)s+=chk;}
 return s;}
function qShell(seg,t,n){const ph=n[0],id=n.slice(1),Q=CLIP.qs[id];const qseg=TL.find(x=>x.name==='q'+id),aseg=TL.find(x=>x.name==='a'+id),qtext=qseg.parts.map(p=>p.text).join(' ');const ans=ph==='a',lt=t-seg.t0;
 let s=BG.party(t,(id.replace(/\D/g,'')|0))+g(50+(Q.lw||(Q.bonus?300:330))/2,36+36,1,REG.pill(t,{t:Q.label,w:Q.lw||(Q.bonus?300:330),sz:44,c:Q.bonus?'#ff8a30':'#a06bff'}))+g(170,440,1.05,ollie(t,{happy:ans&&lt<3}))+R(340,110,900,440,40,'rgba(255,255,255,.92)',INK,5);
 CURA=aseg;s+=illu2(Q,ans,aseg.t0,t);
 if(ph==='p'){const rem=seg.dur-lt,f=clamp(rem/seg.dur),C=2*Math.PI*46;s+=`<g transform="translate(1160,190)">${Ci(0,0,56,'#fff',INK,5)}<circle r="46" fill="none" stroke="#ff8a30" stroke-width="12" stroke-linecap="round" stroke-dasharray="${C*f} ${C}" transform="rotate(-90)"/>${T(0,17,Math.ceil(rem),50,INK)}</g>`;}
 const capText=ans?'Answer: '+aseg.parts.map(p=>p.text).join(' '):(ph==='q'?qseg.parts.filter(p=>p.t<=t).map(p=>p.text).join(' '):qtext);
 return s+caption(capText,ans?'#2fbf71':INK,ans?'#1d8f52':INK);}
const ok=(x,y,sc)=>g(x,y,sc,REG.check());
function scene(seg,t){const n=seg.name;if(n==='title')return titleScene(t);if(n==='end'){const d=CLIP.segs[CLIP.endSeg];return storyScene({name:'x',t0:0,parts:[]},t,d).replace(/<g transform="translate\(1150,548\).*$/,'');}
 if(CLIP.segs[n])return storyScene(seg,t,CLIP.segs[n]);return qShell(seg,t,n);}
function render(t){cid=0;const seg=TL.find(s=>t>=s.t0&&t<s.t0+s.dur)||TL[TL.length-1];document.getElementById('c').innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720" font-family="Fredoka, sans-serif">${scene(seg,t)}</svg>`;}

let CURA=null;
const PAL=['#ef4b4b','#2a8fd0','#2e9a52','#a06bff','#ff8a30'];
const wbT=(i)=>{const p=CURA&&CURA.parts;return p&&p.length?p[Math.min(i,p.length-1)].t:0;};
const okM=(t,aT)=>ok(1180,170,pop(t,aT+.1));
const WB={};
function elem(e,cx,cy,w,t,col,win){ // pill or card centred
  if(e.items||e.bg){const h=w*9/16;return card(cx-w/2,cy-h/2,w,e.bg||'home',t,{inner:drawItems(e.items||[],t,null)});}
  return g(cx,cy,1,REG.pill(t,{t:e.l,w:e.w||w,sz:e.sz||30,c:col||'#a06bff'}));}
WB.spell=(Q,ans,aT,t)=>{const w=Q.word,n=w.length,bw=Math.min(90,860/n-10);
 let s=card(625,130,330,Q.bg||'home',t,{inner:drawItems(Q.items||[],t,null)});
 const y=370;for(let i=0;i<n;i++){const x=790+(i-(n-1)/2)*(bw+10)-bw/2,show=(Q.show||[]).includes(i),rt=wbT(i+1),rv=ans&&t>=rt;
  s+=R(x,y,bw,bw*1.25,14,rv?'#d8f5e3':'#fff',rv?'#2fbf71':INK,5);
  if(show||rv)s+=g(x+bw/2,y+bw*.95,rv?pop(t,rt,.3):1,T(0,0,w[i],bw*.8,rv?'#1d8f52':INK));}
 if(ans&&t>=wbT(n))s+=ok(1180,170,pop(t,wbT(n)));
 return s;};
WB.match=(Q,ans,aT,t)=>{let s='';const n=Q.left.length,rh=Math.min(125,385/n),y0=165,cw=Math.min(rh*1.45,190);
 const ry=i=>y0+rh*(i+.5);
 Q.left.forEach((e,i)=>{s+=elem(e,530,ry(i),Q.lw2||260,t,'#2a8fd0')+g(385,ry(i),1,Ci(0,0,22,'#fff',INK,4)+T(0,10,String(i+1),28,INK));});
 Q.right.forEach((e,i)=>{s+=elem(e,1020,ry(i),Q.rw||(e.items||e.bg?cw:400),t,'#ff8a30')+g(1195,ry(i),1,Ci(0,0,22,'#fff',INK,4)+T(0,10,'ABCDEF'[i],28,INK));});
 if(ans)Q.pairs.forEach((r,i)=>{const t0=wbT(i),p=clamp((t-t0)/.6);if(p<=0)return;const lw=(Q.left[i].items||Q.left[i].bg)?cw:(Q.lw2||260),rw=(Q.right[r].items||Q.right[r].bg)?cw:(Q.rw||400);
  const x1=530+lw/2+8,x2=1020-rw/2-8,y1=ry(i),y2=ry(r);s+=`<line x1="${x1}" y1="${y1}" x2="${x1+(x2-x1)*p}" y2="${y1+(y2-y1)*p}" stroke="${PAL[i%5]}" stroke-width="8" stroke-linecap="round"/>`;});
 if(ans&&t>=wbT(n-1)+.6)s+=ok(1205,128,pop(t,wbT(n-1)+.6));return s;};
WB.fill=(Q,ans,aT,t)=>{let s='';const sz=Q.sz||40,cwid=sz*.53,aw=Q.answer,bw=Math.max(170,aw.length*cwid+40),gp=26;
 Q.lines.forEach((ln,li)=>{let tw=0;ln.forEach(p=>{tw+=p===null?bw+gp:p.length*cwid;});let x=790-tw/2;const y=225+li*(sz+34);
  ln.forEach(p=>{if(p===null){s+=`<line x1="${x}" y1="${y+8}" x2="${x+bw}" y2="${y+8}" stroke="${ans?'#2fbf71':INK}" stroke-width="6" stroke-linecap="round"/>`;if(ans)s+=g(x+bw/2,y,pop(t,aT+.4,.4),T(0,0,aw,sz,'#1d8f52'));x+=bw+gp;}else{s+=T(x,y,p,sz,INK,{a:'start'});x+=p.length*cwid;}});});
 const ws=Q.words,cw=ws.map(w=>Math.max(150,w.length*22+60)),tot=cw.reduce((a,b)=>a+b,0)+(ws.length-1)*18;let x=790-tot/2;
 s+=T(790,395,'WORD BOX',26,'#a06bff');
 ws.forEach((w,i)=>{const win=ans&&w===aw,dim=ans&&w!==aw;s+=`<g opacity="${dim?.3:1}">${g(x+cw[i]/2,455,1,REG.pill(t,{t:w,w:cw[i],sz:32,c:win?'#2fbf71':'#a06bff'}))}</g>`;x+=cw[i]+18;});
 if(ans)s+=ok(1195,140,pop(t,aT+.4));return s;};
WB.label=(Q,ans,aT,t)=>{const cw=Q.cw||420,cx0=790-cw/2,cy0=Q.cy||135,sc=cw/1280;
 let s=card(cx0,cy0,cw,Q.bg||'home',t,{inner:drawItems(Q.items||[],t,null)});
 Q.pts.forEach((p,i)=>{const tx=cx0+p.px*sc,ty=cy0+p.py*sc,rt=wbT(i),rv=ans&&t>=rt;
  s+=`<line x1="${p.bx+(p.bx<790?90:-90)}" y1="${p.by}" x2="${tx}" y2="${ty}" stroke="${INK}" stroke-width="4"/>`+Ci(tx,ty,9,'#ef4b4b','#fff',3);
  s+=R(p.bx-90,p.by-30,180,60,16,rv?'#d8f5e3':'#fff',rv?'#2fbf71':INK,5);
  if(rv)s+=g(p.bx,p.by+11,pop(t,rt,.3),T(0,0,p.word,p.word.length>8?26:32,'#1d8f52'));});
 const ws=Q.pts.map(p=>p.word).sort(),cwid=ws.map(w=>Math.max(120,w.length*20+50)),tot=cwid.reduce((a,b)=>a+b,0)+(ws.length-1)*14;let x=790-tot/2;
 s+=T(790,455,'WORD BOX',22,'#a06bff');ws.forEach((w,i)=>{s+=g(x+cwid[i]/2,500,1,REG.pill(t,{t:w,w:cwid[i],sz:26,c:'#a06bff'}));x+=cwid[i]+14;});
 if(ans&&t>=wbT(Q.pts.length-1)+.5)s+=ok(1180,170,pop(t,wbT(Q.pts.length-1)+.5));return s;};
WB.circle=(Q,ans,aT,t)=>{let s=drawItems(Q.top||[],t,null);const n=Q.opts.length;
 Q.opts.forEach((o,i)=>{const win=ans&&i===Q.correct,dim=ans&&i!==Q.correct;let x,y,w;if(n===3){x=350+i*300;y=320;w=280;}else{x=i?800:360;y=255;w=420;}
  s+=card(x,y,w,o.bg||'home',t,{dim,inner:drawItems(o.items||[],t,null)})+g(x+w/2,y+w*9/16+(n===3?14:22),1,REG.pill(t,{t:o.l,c:'#a06bff',sz:n===3?24:30,w:n===3?240:300}));
  if(win){const h=w*9/16+60,cxr=x+w/2,cyr=y+(h-10)/2,rx=w/2+18,ry=h/2+6,p=clamp((t-aT-.3)/.7),per=2*Math.PI*Math.sqrt((rx*rx+ry*ry)/2)*1.05;
   s+=`<ellipse cx="${cxr}" cy="${cyr}" rx="${rx}" ry="${ry}" fill="none" stroke="#ef4b4b" stroke-width="9" stroke-linecap="round" stroke-dasharray="${per*p} ${per}" transform="rotate(-4 ${cxr} ${cyr})"/>`;}});
 if(ans)s+=ok(1180,170,pop(t,aT+.9));return s;};

/* ===== school-style question kinds (v2) ===== */
const hand=(cx,cy,rx,ry,t,t0,col='#ef4b4b')=>{const p=clamp((t-t0)/.7);if(p<=0)return '';const per=2*Math.PI*Math.sqrt((rx*rx+ry*ry)/2)*1.05;return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="${col}" stroke-width="9" stroke-linecap="round" stroke-dasharray="${per*p} ${per}" transform="rotate(-4 ${cx} ${cy})"/>`;};
const tw=(s,x,y,sz,col,o={})=>wrap(s,Math.max(8,Math.floor((o.w||600)/(sz*.52)))).map((l,i)=>T(x,y+i*(sz+8),l,sz,col,{a:o.a||'middle',w:o.fw||600})).join('');
WB.choice=(Q,ans,aT,t)=>{let s='';const n=Q.opts.length,hasP=!!Q.pic;
 if(hasP)s+=card(660,130,260,Q.pic.bg||'home',t,{inner:drawItems(Q.pic.items||[],t,null)});
 const y=hasP?330:240,w=n===3?250:340,h=130,gap=n===3?20:40,tot=n*w+(n-1)*gap;
 Q.opts.forEach((o,i)=>{const x=790-tot/2+i*(w+gap),win=ans&&i===Q.correct,dim=ans&&i!==Q.correct;
  s+=`<g opacity="${dim?.3:1}">${R(x,y,w,h,30,win?'#d8f5e3':'#fff',win?'#2fbf71':INK,6)}${T(x+w/2,y+h/2+15,o,o.length>10?36:46,win?'#1d8f52':INK)}</g>`;
  if(win)s+=hand(x+w/2,y+h/2,w/2+14,h/2+12,t,aT+.3);});
 if(ans)s+=ok(1180,170,pop(t,aT+.9));return s;};
WB.tflist=(Q,ans,aT,t)=>{let s='';const n=Q.items.length,rh=Math.min(105,360/n);
 Q.items.forEach((it,i)=>{const y=175+rh*i+rh/2-12,rt=wbT(i),rv=ans&&t>=rt;
  s+=`<text x="380" y="${y+12}" font-size="36" fill="${INK}" font-weight="600">${i+1}.</text>`+tw(it.s,430,y+10,34,INK,{a:'start',w:600});
  s+=R(1090,y-38,110,76,18,rv?'#d8f5e3':'#fff',rv?'#2fbf71':INK,5);
  if(rv)s+=g(1145,y+18,pop(t,rt,.3),T(0,0,it.v==='T'?'TRUE':'FALSE',it.v==='T'?34:30,'#1d8f52'));
  else s+=T(1145,y+14,'T / F',28,'#b8b0cc');});
 if(ans&&t>=wbT(n-1)+.5)s+=ok(1195,140,pop(t,wbT(n-1)+.5));return s;};
WB.boxes=(Q,ans,aT,t)=>{let s='';const n=Q.words.length,cols=n>6?4:3,rows=Math.ceil(n/cols),w=Math.min(230,820/cols-20),h=84,gx=22,gy=26;
 const tot=cols*w+(cols-1)*gx,y0=300-((rows*h+(rows-1)*gy)/2)+30;
 Q.words.forEach((wd,i)=>{const c=i%cols,r=Math.floor(i/cols),x=790-tot/2+c*(w+gx),y=y0+r*(h+gy),good=Q.good.includes(i),win=ans&&good,dim=ans&&!good;
  s+=`<g opacity="${dim?.28:1}">${R(x,y,w,h,24,win?'#d8f5e3':'#fff',win?'#2fbf71':INK,6)}${T(x+w/2,y+h/2+13,wd,wd.length>9?30:38,win?'#1d8f52':INK)}</g>`;});
 if(ans)s+=ok(1180,170,pop(t,aT+.4));return s;};
WB.table=(Q,ans,aT,t)=>{let s='';const nc=Q.head.length,r=Q.rows.length,hasP=!!(Q.pics&&Q.pics.length);
 let y0=130;if(hasP){const pw=170,gap=24,tot=Q.pics.length*pw+(Q.pics.length-1)*gap;Q.pics.forEach((p,i)=>{s+=card(790-tot/2+i*(pw+gap)+ (Q.picoff||0),y0,pw,p.bg||'home',t,{inner:drawItems(p.items||[],t,null)});});y0+=pw*9/16+14;}
 const X0=370,W=840,c0=Q.c0||230,cw=(W-c0)/(nc-1),hh=48,rh=Q.rh||Math.min(86,(500-y0-hh-(Q.wbox?80:0))/r),sz=Q.sz||24;
 s+=R(X0,y0,W,hh,12,'#a06bff',INK,4);
 Q.head.forEach((h_,i)=>{const cx=i===0?X0+c0/2:X0+c0+(i-1)*cw+cw/2;s+=T(cx,y0+hh/2+9,h_,sz,'#fff');});
 Q.rows.forEach((row,ri)=>{const y=y0+hh+ri*rh,rt=wbT(ri),rv=ans&&t>=rt;
  s+=R(X0,y,W,rh,0,'#fff',INK,3);
  row.forEach((c,ci)=>{const cx=ci===0?X0:X0+c0+(ci-1)*cw,w_=ci===0?c0:cw,hidden=(Q.hide||[]).includes(ci);
   const showIt=!hidden||rv;const isAns=hidden;
   if(ci>0||ci===0)s+=`<line x1="${cx}" y1="${y}" x2="${cx}" y2="${y+rh}" stroke="${INK}" stroke-width="3"/>`;
   if(showIt){const op=isAns?pop(t,rt,.3):1;s+=`<g opacity="${op}">${tw(c,cx+w_/2,y+rh/2-((wrap(c,Math.max(8,Math.floor((w_-14)/(sz*.52)))).length-1)*(sz+8))/2+sz*.35,sz,isAns?'#1d8f52':INK,{w:w_-14,fw:ci===0?700:600})}</g>`;}});});
 if(Q.wbox){const ws=Q.wbox,cwid=ws.map(w=>Math.max(120,w.length*19+44)),tot=cwid.reduce((a,b)=>a+b,0)+(ws.length-1)*14;let x=790-tot/2;const yy=y0+hh+r*rh+38;
  s+=T(X0+60,yy+8,'WORD BOX',20,'#a06bff',{a:'middle'});x=X0+100;ws.forEach((w,i)=>{s+=g(x+cwid[i]/2,yy,1,REG.pill(t,{t:w,w:cwid[i],sz:21,c:'#a06bff'}));x+=cwid[i]+12;});}
 if(ans&&t>=wbT(r-1)+.5)s+=ok(1205,128,pop(t,wbT(r-1)+.5));return s;};
WB.profile=(Q,ans,aT,t)=>{let s='';const n=Q.fields.length;
 if(Q.pic)s+=card(880,140,320,Q.pic.bg||'home',t,{inner:drawItems(Q.pic.items||[],t,null)});
 Q.fields.forEach((f,i)=>{const y=175+i*92,rt=wbT(i),rv=ans&&t>=rt;
  s+=T(370,y,f[0],30,INK,{a:'start',w:700})+`<line x1="370" y1="${y+46}" x2="${Q.pic?840:1200}" y2="${y+46}" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`;
  if(rv)s+=g(380,y+34,pop(t,rt,.3),T(0,0,f[1],34,'#1d8f52',{a:'start'}));});
 if(ans&&t>=wbT(n-1)+.5)s+=ok(1195,128,pop(t,wbT(n-1)+.5));return s;};
WB.drawlabel=(Q,ans,aT,t)=>{const cw=Q.cw||500;let s=card(790-cw/2,120,cw,Q.bg||'home',t,{inner:drawItems(Q.items||[],t,null)});
 const n=Q.boxes.length,bw=190,gap=22,tot=n*bw+(n-1)*gap,by=120+cw*9/16+26;
 Q.boxes.forEach((b,i)=>{const x=790-tot/2+i*(bw+gap),rt=wbT(i),rv=ans&&t>=rt;
  if(!rv)s+=`<rect x="${x}" y="${by}" width="${bw}" height="${bw*9/16+34}" rx="16" fill="#fff" stroke="${INK}" stroke-width="4" stroke-dasharray="12 8"/>`;
  else s+=g(0,0,1,card(x,by,bw,b.bg||'home',t,{inner:drawItems(b.items||[],t,null)}))+g(x+bw/2,by+bw*9/16+22,pop(t,rt,.3),T(0,0,b.l,26,'#1d8f52'));});
 s+=T(790,by-8,'',1,INK);
 if(ans&&t>=wbT(n-1)+.5)s+=ok(1205,128,pop(t,wbT(n-1)+.5));return s;};
WB.write=(Q,ans,aT,t)=>{let s='';const hasP=!!Q.pic,X=hasP?740:380,Wd=hasP?460:820;
 if(hasP)s+=card(370,130,340,Q.pic.bg||'home',t,{inner:drawItems(Q.pic.items||[],t,null)});
 if(Q.story)s+=tw(Q.story,X+Wd/2,hasP?175:185,hasP?30:38,INK,{w:Wd,fw:500});
 const ly=Q.story?340:300;
 if(!ans){for(let i=0;i<3;i++)s+=`<line x1="${X}" y1="${ly+i*70}" x2="${X+Wd}" y2="${ly+i*70}" stroke="#b8b0cc" stroke-width="4" stroke-linecap="round"/>`;}
 else{const L=wrap(Q.model,Math.floor(Wd/(32*.52))),h=L.length*44+36,sc=pop(t,wbT(0),.35);
  s+=g(X+Wd/2,ly+h/2-30,sc,R(-Wd/2,-h/2,Wd,h,24,'#d8f5e3','#2fbf71',5)+L.map((l,i)=>T(0,-h/2+44+i*44-4,l,32,'#1d8f52')).join(''));
  s+=ok(1195,140,pop(t,wbT(0)+.3));}
 return s;};
