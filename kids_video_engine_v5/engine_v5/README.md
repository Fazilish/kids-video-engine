# Kids video engine v5 (scene.js + build.py + render.py)

## Make one clip
1. New folder per clip (e.g. V1/). Symlink/copy into it: scene.js index.html fonts kokoro.onnx voices.bin build.py render.py shot.py sheet.py. Keep h.py and wq.py one level up (clip.py does sys.path.insert(0,'..')).
2. Write clip.py (see examples/). It builds CLIP = title, segs (story scenes), qs (questions), order.
3. `PAUSE=5 python3 build.py --dry`  -> fake timings, no TTS (fast). Use it for visual checks.
4. `python3 sheet.py out.png q3 a3 q9 a9 ...` -> contact sheet (q<N> = question screen, a<N> = answer screen, segment names for story scenes). LOOK AT IT.
5. `PAUSE=5 python3 build.py` -> Kokoro TTS (cached by text hash), writes final.wav + clip.js. About 10 min per 450 s video.
6. Render: `mkdir frames; python3 render.py 0 2 & python3 render.py 1 2 &` (15 fps, 1280x720, 2 workers; ~5 min per 7 min of video).
7. Encode: `ffmpeg -framerate 15 -i frames/f%05d.jpg -i final.wav -c:v libx264 -pix_fmt yuv420p -crf 26 -c:a aac -b:a 112k -shortest out.mp4` (keep under ~25 MB).

## Question kinds (wq.py helpers -> scene.js WB.* renderers)
| Helper | Kind | Use |
|---|---|---|
| SP(word, items) | spell | picture + letter boxes, letters revealed one by one |
| CH(q, opts, correct, why, pic) | choice | circle one of 2-3 TEXT options (use silly distractors) |
| CI(q, opts, correct, why) | circle | circle one of 2-3 PICTURE cards (label "PICTURE 1/2") |
| FB(lines, words, answer, spoken) | fill | sentence with blank + word box / bracket words |
| TF(...) / TFL(items, whys) | tf / tflist | one statement / a list of 3 with T/F boxes |
| MA(q,left,right,pairs,spoken) | match | words to words, words to pictures, pictures to words |
| BXQ(q, words, good, why) | boxes | choose the right ones among distractors |
| TBQ(tag,q,head,rows,hide,why,pics,wbox) | table | empty table the child copies; hidden columns appear in the answer; wbox = word box row. Used for: write-the-word-for-meaning, compare two habitats, needs/where-found table |
| PFQ(q, fields, why, pic) | profile | 4 labelled lines (environment, weather, animal, plant) |
| DLQ(q,bg,items,boxes,why) | drawlabel | scene + 4 empty boxes; answer shows 4 labelled examples |
| WSQ(tag,q,model,spoken,pic,story) | write | full-sentence answers; model sentence shown in a green box. Used for picture reasoning and challenge questions |
| WR(...) | open | short answer with chips/pills |
Build the list L of questions, then `CLIP=build(L,title,INTRO(...),OUTRO2(...),'')`.

## Narration tricks
- "..." splits a line into timed parts (pauses + reveal timing). Table/profile/drawlabel/tflist rows appear on part 0,1,2... of the answer text, so write ONE part per row.
- {see|C} speaks "see" but shows "C" (spelling answers).
- The word "blank" in the question text is spoken as is; the caption shows it too.

## Layout rules learned the hard way
- Caption strip = bottom ~120 px. Question text <= 3 lines (~140 chars), answer text <= 3 lines. Longer text covers the panel; shorten the narration.
- Table cell text <= ~30 chars. Max 4 rows. Max ~6 chips in a word box.
- Always check q<N> AND a<N> contact sheets for every new kind before narration.
- Keep a whiteboard video to ~22 questions / ~7.5 min.

## Mascot
The owl is the function `ollie(t,o)` in scene.js (used by qShell, titleScene, QI/OUTRO in h.py, wq.py). To change the mascot, redraw it as SVG (same signature; o.happy = smiling) and update the label texts.

## Known limits
- No Arabic voice (Kokoro). No mid-video music. Animations are simple (bobbing, pop-in, line drawing).

## QUALITY BAR (v5, non-negotiable)
Output must be a bright cartoon, never a slideshow:
- Every scene: full-colour illustrated background. Never white/plain, never text on a white card.
- Topics shown as pictures; max ~8 words of on-screen text per scene; every question has a picture.
- Things move: pop-ins, bobbing, sparkles/confetti, countdown ring, green tick on answers.
- Captions = the exact sentence being spoken.
- Mascot: full-body, blinks, moves wings/limbs, bobs, jumps on correct answers, in every scene. Never a face icon.
- Voice: neural (Kokoro af_heart, 0.82). Never robotic. If unavailable, say so before building.
- Before sending each video run `python3 check_video.py video.mp4` and look at the sheet. Fix and re-render on any fail.

## v5 changes
- PAUSE default is 5 s.
- `CLIP['say']={'Yousif':'Yoo-sif'}` respells words for the voice only (captions unchanged).
- Corner mascot in story scenes is bigger and jumps on each new sentence.
- check_video.py also checks audio length against video length.
- examples/ show FORMAT only. Never reuse their topic or questions.
