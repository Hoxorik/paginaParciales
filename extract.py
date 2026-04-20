import fitz
import json
import re

def is_yellow(fill):
    if not fill: return False
    r, g, b = fill[0], fill[1], fill[2]
    return r > 0.9 and g > 0.9 and b < 0.1

doc = fitz.open(r"C:\Users\sofia\Downloads\cv_compressed.pdf")

exams = []
current_exam = None
current_exercise = None

for page_idx in range(len(doc)):
    page = doc[page_idx]
    
    yellow_rects = []
    for p in page.get_drawings():
        if p.get("fill") and is_yellow(p["fill"]):
            yellow_rects.append(p["rect"])
            
    if page_idx % 3 == 0:
        current_exam = {
            "id": f"tema_{page_idx//3 + 1}",
            "title": f"1º Parcial - Tema {page_idx//3 + 1}",
            "questions": []
        }
        exams.append(current_exam)
        current_exercise = None

    text_data = page.get_text("dict")["blocks"]
    
    lines_data = []
    # Extract line by line
    for block in text_data:
        if "lines" in block:
            for line in block["lines"]:
                line_text = ""
                line_bbox = [9999, 9999, -9999, -9999]
                is_red = False
                for span in line["spans"]:
                    if span["text"].strip():
                        text = span["text"]
                        line_text += text
                        # Ensure proper spacing? (not perfect but OK)
                        if not text.endswith(" "):
                            line_text += " "
                        
                        line_bbox[0] = min(line_bbox[0], span["bbox"][0])
                        line_bbox[1] = min(line_bbox[1], span["bbox"][1])
                        line_bbox[2] = max(line_bbox[2], span["bbox"][2])
                        line_bbox[3] = max(line_bbox[3], span["bbox"][3])
                        
                        color = span["color"]
                        if color == 0xff0000 or color == 0xff or color == 16711680:
                            is_red = True
                
                line_text = line_text.strip()
                if line_text:
                    is_yellow_line = False
                    for yr in yellow_rects:
                        ry0, ry1 = yr[1], yr[3]
                        ly0, ly1 = line_bbox[1], line_bbox[3]
                        # vert overlap
                        overlap = max(0, min(ry1, ly1) - max(ry0, ly0))
                        if overlap > (ly1 - ly0) * 0.4:
                            # Verify horizontal overlap too
                            rx0, rx1 = yr[0], yr[2]
                            lx0, lx1 = line_bbox[0], line_bbox[2]
                            h_overlap = max(0, min(rx1, lx1) - max(rx0, lx0))
                            if h_overlap > 10:  # At least some horizontal overlap
                                is_yellow_line = True
                                break
                    
                    lines_data.append({
                        "text": line_text,
                        "is_red": is_red,
                        "is_yellow": is_yellow_line
                    })

    # Process extracted lines into questions
    # State machine: waiting for EXERCISE -> reading QUESTION -> reading OPTIONS -> reading EXPLANATION
    
    state = "INIT"
    for line in lines_data:
        text = line["text"]
        
        # Start new exercise
        if re.match(r"^Ejercicio\s+\d+$", text):
            current_exercise = {
                "id": text,
                "question": "",
                "options": [],
                "explanation": ""
            }
            current_exam["questions"].append(current_exercise)
            state = "QUESTION"
            continue
            
        if not current_exercise:
            continue
            
        if line["is_red"]:
            state = "EXPLANATION"
            current_exercise["explanation"] += text + " "
            continue
            
        if re.match(r"^[1-5]\.", text):
            state = "OPTIONS"
            # Extract option text without the "1. "
            opt_text = re.sub(r"^[1-5]\.\s*", "", text).strip()
            current_exercise["options"].append({
                "text": opt_text,
                "is_correct": line["is_yellow"]
            })
            continue
            
        # Continuation based on state
        if state == "QUESTION":
            # Ignore headers/grilla parsing garbage
            if "GRILLA DE RESOLUCIÓN" in text or "respuestas" in text or "posibles" in text or "Ej " in text or "APELLIDO" in text:
                continue
            if text in ["A: SI", "B: 3", "2 1", "P: 1 5"]: # Grilla artifacts
                continue
            if len(text) < 3 and not text.isalpha():
                continue
            current_exercise["question"] += text + " "
            
        elif state == "OPTIONS":
            # An option might span multiple lines
            if len(current_exercise["options"]) > 0:
                current_exercise["options"][-1]["text"] += " " + text
                # Re-evaluate correct highlighting just in case second line has the highlight
                if line["is_yellow"]:
                     current_exercise["options"][-1]["is_correct"] = True
                     
        elif state == "EXPLANATION":
             current_exercise["explanation"] += text + " "

# Final cleanup
for exam in exams:
    for q in exam["questions"]:
        q["question"] = q["question"].strip()
        for opt in q["options"]:
            opt["text"] = opt["text"].strip()
        q["explanation"] = q["explanation"].strip()

# Save to JS format
with open("data.js", "w", encoding="utf-8") as f:
    f.write("const quizData = ")
    json.dump(exams, f, indent=2, ensure_ascii=False)
    f.write(";\n")
