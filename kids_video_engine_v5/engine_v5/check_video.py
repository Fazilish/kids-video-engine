#!/usr/bin/env python3
"""Self-check: sample 10 evenly spaced frames from an mp4 into one contact sheet.
Usage: python3 check_video.py video.mp4 [out.png]
Look at the sheet and confirm in EVERY frame: colourful illustrated background (no white/plain),
pictures present, full-body mascot visible, max ~8 words of on-screen text, nothing covered.
If any frame fails, fix and re-render before sending."""
import subprocess, sys, json, os
v = sys.argv[1]; out = sys.argv[2] if len(sys.argv) > 2 else "check_sheet.png"
d = float(json.loads(subprocess.check_output(["ffprobe","-v","error","-show_entries","format=duration","-of","json",v]))["format"]["duration"])
os.makedirs("_chk", exist_ok=True)
for i in range(10):
    t = d * (i + 0.5) / 10
    subprocess.run(["ffmpeg","-y","-v","error","-ss",f"{t:.2f}","-i",v,"-frames:v","1","-vf","scale=480:-1",f"_chk/f{i}.png"], check=True)
subprocess.run(["ffmpeg","-y","-v","error","-i","_chk/f%d.png","-filter_complex","tile=5x2","-frames:v","1",out], check=True) if False else None
subprocess.run(["ffmpeg","-y","-v","error","-start_number","0","-i","_chk/f%d.png","-vf","tile=5x2","-frames:v","1",out], check=True)
print("wrote", out, "- inspect it against the QUALITY BAR in README.md")

# audio/video length check (catches truncated audio or sync drift)
def dur(stream):
    return float(subprocess.check_output(["ffprobe","-v","error","-select_streams",stream,"-show_entries","stream=duration","-of","csv=p=0",v]).decode().strip().split()[0])
try:
    dv, da = dur("v:0"), dur("a:0")
    print(f"video {dv:.1f}s audio {da:.1f}s diff {abs(dv-da):.1f}s", "OK" if abs(dv-da) < 1.0 else "MISMATCH - fix before sending")
except Exception as e:
    print("duration check skipped:", e)
