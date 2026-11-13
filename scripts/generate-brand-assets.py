#!/usr/bin/env python3
"""Generate the RenovReach brand assets.

The mark is a vector trace of the supplied logo: a dark-green leaf stroke and a
light-green ribbon stroke that together form the check/V. Edit the two paths
below and re-run to regenerate the SVG, PNG favicons and the Open Graph card:

    python3 scripts/generate-brand-assets.py
"""

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public"
BRAND = OUT / "brand"

# Geometry lives in a 744 x 1000 box that matches the mark's proportions.
LEAF = [
    ("M", (4, 118)),
    ("C", (150, 122), (305, 170), (370, 262)),
    ("C", (405, 330), (388, 500), (330, 640)),
    ("C", (300, 720), (258, 788), (223, 817)),
    ("Z",),
]
RIBBON = [
    ("M", (557, 4)),
    ("L", (163, 1000)),
    ("L", (439, 1000)),
    ("L", (744, 122)),
    ("C", (762, 55), (690, -2), (557, 4)),
    ("Z",),
]

LEAF_START, LEAF_END, LEAF_FROM, LEAF_TO = (60, 120), (330, 820), (0x2C, 0xA9, 0x4F), (0x0A, 0x6B, 0x31)
RIBBON_START, RIBBON_END, RIBBON_FROM, RIBBON_TO = (700, 40), (300, 980), (0x8E, 0xE6, 0xAB), (0x2F, 0xB6, 0x5F)

W, H = 744, 1000
SS = 4  # supersampling for smooth edges


def path_d(commands) -> str:
    def fmt(point):
        x, y = point
        return f"{x:g} {y:g}"

    parts = []
    for cmd in commands:
        if cmd[0] in ("M", "L"):
            parts.append(f"{cmd[0]}{fmt(cmd[1])}")
        elif cmd[0] == "C":
            parts.append("C" + " ".join(fmt(p) for p in cmd[1:]))
        else:
            parts.append(cmd[0])
    return "".join(parts)


def flatten(commands, steps=140):
    points = []
    current = None
    for cmd in commands:
        if cmd[0] == "M":
            current = cmd[1]
            points.append(current)
        elif cmd[0] == "L":
            current = cmd[1]
            points.append(current)
        elif cmd[0] == "C":
            p0 = np.array(current, dtype=float)
            p1, p2, p3 = (np.array(p, dtype=float) for p in cmd[1:])
            t = np.linspace(0, 1, steps)[1:, None]
            curve = (
                ((1 - t) ** 3) * p0
                + 3 * ((1 - t) ** 2) * t * p1
                + 3 * (1 - t) * (t**2) * p2
                + (t**3) * p3
            )
            points.extend(map(tuple, curve))
            current = cmd[3]
    return points


def gradient(size, start, end, color_from, color_to, scale=1):
    w, h = size
    xs = np.arange(w)[None, :]
    ys = np.arange(h)[:, None]
    x0, y0 = start[0] * scale, start[1] * scale
    dx = (end[0] - start[0]) * scale
    dy = (end[1] - start[1]) * scale
    t = ((xs - x0) * dx + (ys - y0) * dy) / (dx * dx + dy * dy)
    t = np.clip(t, 0, 1)[..., None]
    rgb = np.array(color_from) * (1 - t) + np.array(color_to) * t
    rgba = np.concatenate([rgb, np.full_like(t, 255)], axis=2).astype(np.uint8)
    return Image.fromarray(rgba, "RGBA")


def shape_mask(commands):
    mask = Image.new("L", (W * SS, H * SS), 0)
    polygon = [(x * SS, y * SS) for x, y in flatten(commands)]
    ImageDraw.Draw(mask).polygon(polygon, fill=255)
    return mask


def build_mark():
    canvas = Image.new("RGBA", (W * SS, H * SS), (0, 0, 0, 0))
    layers = [
        (LEAF, LEAF_START, LEAF_END, LEAF_FROM, LEAF_TO),
        (RIBBON, RIBBON_START, RIBBON_END, RIBBON_FROM, RIBBON_TO),
    ]
    for commands, start, end, color_from, color_to in layers:
        mask = shape_mask(commands)
        fill = gradient((W * SS, H * SS), start, end, color_from, color_to, scale=SS)
        canvas.paste(fill, (0, 0), mask)
    return canvas.resize((W, H), Image.LANCZOS)


def save_svg():
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" aria-label="RenovReach">
  <defs>
    <linearGradient id="leaf" gradientUnits="userSpaceOnUse" x1="{LEAF_START[0]}" y1="{LEAF_START[1]}" x2="{LEAF_END[0]}" y2="{LEAF_END[1]}">
      <stop offset="0" stop-color="#2ca94f"/>
      <stop offset="1" stop-color="#0a6b31"/>
    </linearGradient>
    <linearGradient id="ribbon" gradientUnits="userSpaceOnUse" x1="{RIBBON_START[0]}" y1="{RIBBON_START[1]}" x2="{RIBBON_END[0]}" y2="{RIBBON_END[1]}">
      <stop offset="0" stop-color="#8ee6ab"/>
      <stop offset="1" stop-color="#2fb65f"/>
    </linearGradient>
  </defs>
  <path fill="url(#leaf)" d="{path_d(LEAF)}"/>
  <path fill="url(#ribbon)" d="{path_d(RIBBON)}"/>
</svg>
"""
    (BRAND / "logo-mark.svg").write_text(svg, encoding="utf-8")


def square_icon(mark, size, ratio=0.9, background=None):
    pad = int(size * (1 - ratio) / 2)
    inner_h = size - pad * 2
    inner_w = max(1, round(mark.width * inner_h / mark.height))
    icon = Image.new("RGBA", (size, size), background or (0, 0, 0, 0))
    resized = mark.resize((inner_w, inner_h), Image.LANCZOS)
    icon.alpha_composite(resized, ((size - inner_w) // 2, pad))
    return icon


def build_favicons(mark):
    fav32 = square_icon(mark, 32, ratio=0.92)
    fav16 = square_icon(mark, 16, ratio=0.92)
    fav32.save(OUT / "favicon-32x32.png", optimize=True)
    fav16.save(OUT / "favicon-16x16.png", optimize=True)

    apple = square_icon(mark, 180, ratio=0.66, background=(255, 255, 255, 255))
    apple.convert("RGB").save(OUT / "apple-touch-icon.png", optimize=True)


def build_og(mark):
    og = Image.new("RGB", (1200, 630), (255, 255, 255))
    height = 400
    width = round(mark.width * height / mark.height)
    logo = mark.resize((width, height), Image.LANCZOS)
    og.paste(logo, ((1200 - width) // 2, (630 - height) // 2), logo)
    og.save(OUT / "og-image.png", optimize=True)


def main():
    BRAND.mkdir(parents=True, exist_ok=True)
    mark = build_mark()
    save_svg()
    mark.resize((372, 500), Image.LANCZOS).save(BRAND / "logo-mark.png", optimize=True)
    build_favicons(mark)
    build_og(mark)
    print("Wrote logo-mark.svg, favicon-32x32.png, favicon-16x16.png, apple-touch-icon.png, og-image.png")


if __name__ == "__main__":
    main()
