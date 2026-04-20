import fitz
import json

doc = fitz.open(r"C:\Users\sofia\Downloads\cv_compressed.pdf")

data = []
for page in doc:
    for block in page.get_text("dict")["blocks"]:
        if "lines" in block:
            for line in block["lines"]:
                for span in line["spans"]:
                    if span["text"].strip():
                        color = span["color"]
                        if color == 0xff0000 or color == 0xff or color == 16711680: # Red
                            data.append({
                                "text": span["text"],
                                "color": hex(color)
                            })

with open("test_red.json", "w", encoding="utf-8") as f:
    json.dump(data[:50], f, indent=2)
