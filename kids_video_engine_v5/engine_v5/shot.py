import sys, json, asyncio, os
from playwright.async_api import async_playwright
ts=[float(x) for x in sys.argv[1:]]
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/opt/pw-browsers/chromium')
        pg=await b.new_page(viewport={'width':1280,'height':720})
        msgs=[]; pg.on('console',lambda m:msgs.append(m.text)); pg.on('pageerror',lambda e:msgs.append('ERR '+str(e)))
        await pg.goto('file://'+os.getcwd()+'/index.html'); await pg.wait_for_timeout(500)
        for t in ts:
            await pg.evaluate(f'render({t})'); await pg.screenshot(path=f'shot_{t}.png')
        print(msgs[:5]); await b.close()
asyncio.run(main())
