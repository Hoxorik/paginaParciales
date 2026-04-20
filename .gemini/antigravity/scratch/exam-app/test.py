import fitz
import json

doc = fitz.open(r"C:\Users\sofia\Downloads\cv_compressed.pdf")
page = doc[0]

data = []
for block in page.get_text("dict")["blocks"]:
    if "lines" in block:
        for line in block["lines"]:
            for span in line["spans"]:
                if span["text"].strip():
                    # check color
                    color = span["color"]
                    data.append({
                        "text": span["text"],
                        "color": hex(color)
                    })

with open("test_out.json", "w", encoding="utf-8") as f:
    json.dump(data[:50], f, indent=2)

# Check highlights (annotations)
annots = []
for annot in page.annots():
    annots.append({
        "type": annot.type[0], # 8 is Highlight
        "rect": list(annot.rect)
    })

with open("test_annots.json", "w", encoding="utf-8") as f:
    json.dump(annots, f, indent=2)
