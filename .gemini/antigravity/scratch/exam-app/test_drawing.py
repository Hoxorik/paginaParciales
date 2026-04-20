import fitz
import json

doc = fitz.open(r"C:\Users\sofia\Downloads\cv_compressed.pdf")
page = doc[0]

colors = []
for p in page.get_drawings():
    if p["fill"]:
        colors.append({
            "rect": list(p["rect"]),
            "fill": p["fill"]
        })

with open("test_drawings.json", "w", encoding="utf-8") as f:
    json.dump(colors, f, indent=2)
