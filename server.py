import fitz
import json
import re
import sys
import webbrowser
from threading import Timer
from flask import Flask, request, jsonify, send_from_directory
import os

if getattr(sys, 'frozen', False):
    base_dir = sys._MEIPASS
else:
    base_dir = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, static_folder=base_dir, static_url_path='')

def is_yellow(fill):
    if not fill: return False
    r, g, b = fill[0], fill[1], fill[2]
    return r > 0.9 and g > 0.9 and b < 0.1

def process_pdf(pdf_bytes):
    doc = fitz.open(stream=pdf_bytes, filetype="pdf")
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
                            overlap = max(0, min(ry1, ly1) - max(ry0, ly0))
                            if overlap > (ly1 - ly0) * 0.4:
                                rx0, rx1 = yr[0], yr[2]
                                lx0, lx1 = line_bbox[0], line_bbox[2]
                                h_overlap = max(0, min(rx1, lx1) - max(rx0, lx0))
                                if h_overlap > 10:
                                    is_yellow_line = True
                                    break
                        lines_data.append({
                            "text": line_text,
                            "is_red": is_red,
                            "is_yellow": is_yellow_line
                        })

        state = "INIT"
        for line in lines_data:
            text = line["text"]
            
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
                opt_text = re.sub(r"^[1-5]\.\s*", "", text).strip()
                current_exercise["options"].append({
                    "text": opt_text,
                    "is_correct": line["is_yellow"]
                })
                continue
                
            if state == "QUESTION":
                if "GRILLA DE RESOLUCIÓN" in text or "respuestas" in text or "posibles" in text or "Ej " in text or "APELLIDO" in text:
                    continue
                if text in ["A: SI", "B: 3", "2 1", "P: 1 5"]:
                    continue
                if len(text) < 3 and not text.isalpha():
                    continue
                current_exercise["question"] += text + " "
                
            elif state == "OPTIONS":
                if len(current_exercise["options"]) > 0:
                    current_exercise["options"][-1]["text"] += " " + text
                    if line["is_yellow"]:
                         current_exercise["options"][-1]["is_correct"] = True
                         
            elif state == "EXPLANATION":
                 current_exercise["explanation"] += text + " "

    for exam in exams:
        for q in exam["questions"]:
            q["question"] = q["question"].strip()
            for opt in q["options"]:
                opt["text"] = opt["text"].strip()
            q["explanation"] = q["explanation"].strip()

    return exams

@app.route('/')
def home():
    return send_from_directory(base_dir, 'index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file included"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    if file:
        pdf_bytes = file.read()
        try:
            exams = process_pdf(pdf_bytes)
            return jsonify(exams)
        except Exception as e:
            return jsonify({"error": str(e)}), 500

def open_browser():
    webbrowser.open_new("http://127.0.0.1:8080")

if __name__ == '__main__':
    Timer(1.5, open_browser).start()
    app.run(port=8080, debug=False)
