"""Screenshot the built page in a given state, for looking at it.

    python tools/shot.py <name> "<js to run once fonts are ready>" [w] [h] [scale] [theme]

Writes dist/<name>.png. The js runs after document.fonts.ready so the music
font's metrics are already settled. theme is "auto", "light" (the default) or
"dark", and is picked through the page's own control, so the control and the
palette in the shot agree.
"""
import os
import subprocess
import sys

from paths import DIST, INDEX

BROWSERS = [p for p in [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
] if os.path.exists(p)]

name = sys.argv[1]
js = sys.argv[2] if len(sys.argv) > 2 else ""
width = sys.argv[3] if len(sys.argv) > 3 else "1180"
height = sys.argv[4] if len(sys.argv) > 4 else "1200"
scale = sys.argv[5] if len(sys.argv) > 5 else "1"
theme = sys.argv[6] if len(sys.argv) > 6 else "light"

DIST.mkdir(exist_ok=True)
js = "document.querySelector('.theme-opt[data-choice=\"" + theme + "\"]').click();" + js
page = INDEX.read_text(encoding="utf-8").replace(
    "</body>", "<script>document.fonts.ready.then(() => {" + js + "});</script></body>")
harness = DIST / f"{name}.html"
harness.write_text(page, encoding="utf-8")

out = DIST / f"{name}.png"
subprocess.run(
    # reduced motion, or a shot lands mid-transition: switching the theme
    # repaints every button and input over 120ms, and the page in the picture
    # is then halfway between the two palettes
    [BROWSERS[0], "--headless=new", "--disable-gpu", "--hide-scrollbars",
     "--force-prefers-reduced-motion",
     f"--window-size={width},{height}", f"--force-device-scale-factor={scale}",
     "--virtual-time-budget=6000", f"--screenshot={out}", harness.as_uri()],
    capture_output=True, timeout=180)
print(out)
