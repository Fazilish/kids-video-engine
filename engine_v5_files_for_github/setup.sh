#!/bin/bash
# Run once per new session, inside the engine folder.
pip install --break-system-packages kokoro-onnx soundfile numpy pillow playwright 2>&1 | tail -1
curl -L -o kokoro.onnx https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.onnx
curl -L -o voices.bin  https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin
# Chromium: if /opt/pw-browsers/chromium exists, do nothing. Otherwise: playwright install chromium
which ffmpeg || echo "ffmpeg missing - install it"
