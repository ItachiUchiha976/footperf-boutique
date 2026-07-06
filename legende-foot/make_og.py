# -*- coding: utf-8 -*-
"""Génère og-image.png (1200x630) pour le test 'Quelle Légende du Foot es-tu ?'."""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1200, 630
img = Image.new("RGB", (W, H), "#0a2a18")
d = ImageDraw.Draw(img)

# dégradé pelouse vertical
top = (16, 71, 42)      # #10472a
bot = (8, 35, 15)       # #08230f
for y in range(H):
    t = y / H
    r = int(top[0] + (bot[0]-top[0])*t)
    g = int(top[1] + (bot[1]-top[1])*t)
    b = int(top[2] + (bot[2]-top[2])*t)
    d.line([(0, y), (W, y)], fill=(r, g, b))

# cercle central
d.ellipse([W/2-190, H/2-190, W/2+190, H/2+190], outline=(255, 255, 255, 30), width=4)
# ligne médiane
d.line([(W/2, 30), (W/2, H-30)], fill=(255, 255, 255), width=2)

# cadre or
d.rectangle([26, 26, W-26, H-26], outline=(245, 197, 66), width=6)


def font(sz, bold=True):
    candidates = [
        "C:/Windows/Fonts/Oswald-Bold.ttf" if bold else "C:/Windows/Fonts/Oswald-Regular.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
    ]
    for c in candidates:
        if os.path.exists(c):
            try:
                return ImageFont.truetype(c, sz)
            except Exception:
                pass
    return ImageFont.load_default()


def center(text, y, f, fill):
    bb = d.textbbox((0, 0), text, font=f)
    w = bb[2] - bb[0]
    d.text(((W - w) / 2, y), text, font=f, fill=fill)


center("FOOTSTATS  ·  LE TEST DES LEGENDES", 70, font(34, False), (245, 197, 66))
center("Quelle légende du foot", 150, font(82), (243, 247, 244))
center("es-tu ?", 250, font(82), (245, 197, 66))
center("Pelé · Zidane · Maradona · Messi · Cruyff · Ronaldinho…", 400, font(34, False), (188, 210, 196))
center("16 légendes possibles  ·  Résultat à partager", 470, font(36), (39, 196, 106))
center("Test gratuit  ·  2 minutes", 545, font(30, False), (188, 210, 196))

img.save("og-image.png", "PNG")
print("og-image.png written:", os.path.getsize("og-image.png"), "bytes")
