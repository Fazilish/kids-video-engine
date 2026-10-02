import sys, asyncio, os, json
from playwright.async_api import async_playwright
FPS=15; TOTAL=float(open('clip.js').read().split('TOTAL=')[1].rstrip(';'))
N=int(TOTAL*FPS); wid,nw=int(sys.argv[1]),int(sys.argv[2])
os.makedirs('frames',exist_ok=True)
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/opt/pw-browsers/chromium')
        pg=await b.new_page(viewport={'width':1280,'height':720})
        await pg.goto('file://'+os.getcwd()+'/index.html'); await pg.wait_for_timeout(600)
        for i in range(wid,N,nw):
            await pg.evaluate(f'render({i/FPS})')
            await pg.screenshot(path=f'frames/f{i:05d}.jpg',type='jpeg',quality=88)
        await b.close()
asyncio.run(main())
