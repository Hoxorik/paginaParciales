document.addEventListener('DOMContentLoaded', () => {
    // Views
    const loginView = document.getElementById('login-view');
    const homeView = document.getElementById('home-view');
    const quizView = document.getElementById('quiz-view');
    const resultsView = document.getElementById('results-view');
    
    // Components
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const genzModeInput = document.getElementById('genz-mode');
    const userGreeting = document.getElementById('user-greeting');
    
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const loadingZone = document.getElementById('loading-zone');
    
    const examList = document.getElementById('exam-list');
    const questionsContainer = document.getElementById('questions-container');
    const quizTitle = document.getElementById('quiz-title');
    const quizForm = document.getElementById('quiz-form');
    
    const finalScoreEl = document.getElementById('final-score');
    const scoreMsgEl = document.getElementById('score-message');
    
    // Bot Components
    const botPanel = document.getElementById('bot-panel');
    const btnToggleBot = document.getElementById('btn-toggle-bot');
    const btnCloseBot = document.getElementById('close-bot');
    const botMessages = document.getElementById('bot-messages');
    const botForm = document.getElementById('bot-form');
    const botInput = document.getElementById('bot-input');
    
    let userName = "";
    let isGenZMode = false;
    let quizData = [];
    let currentExam = null;
    let isReviewed = false;

    // --- Login Logic ---
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        userName = usernameInput.value.trim();
        isGenZMode = genzModeInput ? genzModeInput.checked : false;

        if(userName) {
            loginView.classList.remove('active');
            loginView.classList.add('hidden');
            
            userGreeting.textContent = isGenZMode ? `¿Qué onda ${userName}?` : `Panel de ${userName}`;
            homeView.classList.remove('hidden');
            homeView.classList.add('active');

            if(isGenZMode) {
                document.querySelector('.bot-message').textContent = `¡Wennaaas ${userName}! Soy Vivi. Tirame a qué pregunta le pifiaste y te paso la posta. 💅✨`;
            } else {
                document.querySelector('.bot-message').textContent = `¡Hola, ${userName}! Soy Vivi. ¿Qué parte del parcial te está costando?`;
            }
        }
    });

    // --- Drag and Drop Logic ---
    dropZone.addEventListener('click', () => fileInput.click());
    
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });
    
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
    
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        if(e.dataTransfer.files.length) {
            handleFileUpload(e.dataTransfer.files[0]);
        }
    });
    
    fileInput.addEventListener('change', (e) => {
        if(e.target.files.length) {
            handleFileUpload(e.target.files[0]);
        }
    });

    function setStatus(loading, errorMsg = null) {
        if(loading) {
            dropZone.classList.add('hidden');
            loadingZone.classList.remove('hidden');
            loadingZone.innerHTML = isGenZMode ? '<p class="loading-text">Cargando tu parcial... ⏳</p>' : '<p class="loading-text">Procesando documento...</p>';
        } else {
            loadingZone.classList.add('hidden');
            dropZone.classList.remove('hidden');
            if(errorMsg) {
                alert(errorMsg); 
            }
        }
    }

    function handleFileUpload(file) {
        if(file.type !== "application/pdf") {
            alert(isGenZMode ? "Porfa pasame un archivo en formato PDF. 🙏" : "Error: Por favor sube un archivo PDF.");
            return;
        }
        
        setStatus(true);

        const formData = new FormData();
        formData.append('file', file);
        
        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                setStatus(false, (isGenZMode ? `Uy, tuvimos un problema: ` : `No se ha podido procesar: `) + data.error);
                return;
            }
            if(!data.exams && Array.isArray(data)) {
                 quizData = data;
            } else if (data.exams) {
                 quizData = data.exams;
            }
            
            setStatus(false);
            dropZone.classList.add('hidden'); 
            examList.classList.remove('hidden');
            initHome();
        })
        .catch(err => {
            setStatus(false, isGenZMode ? 'Hubo un error de conexión con el server. 💀' : `Error de conexión. Asegúrate de que el servidor está corriendo.`);
        });
    }

    // --- View Logic ---
    function initHome() {
        examList.innerHTML = '';
        quizData.forEach((exam, index) => {
            const card = document.createElement('div');
            card.className = 'exam-card';
            card.innerHTML = `<h3>${exam.title.replace("1º Parcial - Tema", isGenZMode ? "Parcialote:" : "Evaluación:")}</h3>`;
            card.addEventListener('click', () => loadExam(index));
            examList.appendChild(card);
        });
    }

    function switchView(viewToShow) {
        [loginView, homeView, quizView, resultsView].forEach(v => {
            v.classList.remove('active');
            v.classList.add('hidden');
        });
        viewToShow.classList.remove('hidden');
        void viewToShow.offsetWidth; 
        viewToShow.classList.add('active');
        window.scrollTo(0, 0);
    }

    function loadExam(index) {
        currentExam = quizData[index];
        quizTitle.textContent = currentExam.title;
        isReviewed = false;
        
        renderQuestions();
        
        document.getElementById('btn-submit').style.display = 'inline-block';
        switchView(quizView);
    }

    function renderQuestions() {
        questionsContainer.innerHTML = '';
        
        currentExam.questions.forEach((q, qIndex) => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.dataset.questionIndex = qIndex;
            
            let optionsHtml = '';
            q.options.forEach((opt, oIndex) => {
                const inputId = `q${qIndex}_o${oIndex}`;
                optionsHtml += `
                    <label class="option-label" for="${inputId}">
                        <input type="checkbox" class="option-input" id="${inputId}" name="q${qIndex}" value="${oIndex}">
                        <span class="option-text">${opt.text}</span>
                    </label>
                `;
            });

            card.innerHTML = `
                <div class="question-title"><strong>${q.id.replace("Ejercicio", "Pregunta")}</strong>${q.question}</div>
                <div class="options-group">
                    ${optionsHtml}
                </div>
                <div class="explanation-block">
                    <strong>${isGenZMode ? 'Fijate este dato clave 👀:' : 'Explicación:'}</strong>
                    <p>${q.explanation}</p>
                </div>
            `;
            
            questionsContainer.appendChild(card);
        });
    }

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        gradeExam();
    });

    function gradeExam() {
        let score = 0;
        
        currentExam.questions.forEach((q, qIndex) => {
            const card = document.querySelector(`.question-card[data-question-index="${qIndex}"]`);
            const inputs = card.querySelectorAll('.option-input');
            const labels = card.querySelectorAll('.option-label');
            const explanation = card.querySelector('.explanation-block');
            
            let isQuestionCorrect = true;
            let hasSelection = false;

            inputs.forEach((input, oIndex) => {
                input.disabled = true;
                const isSelected = input.checked;
                const isTargetCorrect = q.options[oIndex].is_correct;
                
                if (isSelected) hasSelection = true;

                if (isTargetCorrect) {
                    labels[oIndex].classList.add('correct');
                } else if (isSelected && !isTargetCorrect) {
                    labels[oIndex].classList.add('incorrect');
                    isQuestionCorrect = false;
                }
                
                if (!isSelected && isTargetCorrect) {
                     isQuestionCorrect = false;
                }
            });

            if (!hasSelection) isQuestionCorrect = false;

            if (isQuestionCorrect) {
                card.classList.add('status-correct');
                score++;
            } else {
                card.classList.add('status-incorrect');
            }
            
            explanation.style.display = 'block';
        });

        finalScoreEl.textContent = score;
        
        if (score === 10) {
            scoreMsgEl.textContent = isGenZMode ? "¡Excelente, la rompiste toda con un 10! 🔥" : "Excelente. Tienes dominio total del tema.";
        } else if (score >= 7) {
            scoreMsgEl.textContent = isGenZMode ? "¡Muy bien! Re probás con esta nota. ✨" : "Buen desempeño. Estás preparado para el examen.";
        } else if (score >= 4) {
            scoreMsgEl.textContent = isGenZMode ? "Aprobaste ahí nomás... metele un repaso a lo que falló. 📚" : "Aprobado parcial. Se sugiere repasar los errores comunes.";
        } else {
            scoreMsgEl.textContent = isGenZMode ? "Ups... falta un empujón más. ¡No te rindas que la próxima sale seguro! 💪" : "Requiere más estudio. Revisa los apuntes en detalle.";
        }

        document.getElementById('btn-submit').style.display = 'none';
        isReviewed = true;
        
        switchView(resultsView);
    }

    // Navigation buttons
    document.getElementById('btn-back-home').addEventListener('click', (e) => {
        e.preventDefault();
        const msg = isGenZMode ? "¿Seguro que querés salir? Se va a borrar tu progreso en el simulacro." : "¿Seguro que deseas salir? El progreso no se guardará.";
        if(!isReviewed && !confirm(msg)) return;
        switchView(homeView);
    });

    document.getElementById('btn-review').addEventListener('click', () => {
        switchView(quizView);
    });

    document.getElementById('btn-home-from-results').addEventListener('click', () => {
        switchView(homeView);
    });


    // --- BotConsultor Logic ---
    if (btnToggleBot) {
        btnToggleBot.addEventListener('click', () => {
            botPanel.classList.remove('hidden');
        });
    }

    if (btnCloseBot) {
        btnCloseBot.addEventListener('click', () => {
            botPanel.classList.add('hidden');
        });
    }

    if (botForm) {
        botForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = botInput.value.trim();
            if (!query) return;

            // Display user message
            appendMessage(query, 'user-message');
            botInput.value = '';
            botMessages.scrollTop = botMessages.scrollHeight;

            // Simple simulated bot response delay
            setTimeout(() => {
                let response = generateBotResponse(query);
                appendMessage(response, 'bot-message');
                botMessages.scrollTop = botMessages.scrollHeight;
            }, 600);
        });
    }

    function appendMessage(text, className) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${className}`;
        msgDiv.textContent = text;
        botMessages.appendChild(msgDiv);
    }

    const genzAdLibs = [
        "Fijate bien esto:",
        "Data clave para el parcial:",
        "Acá te paso la posta:",
        "Ojo con este detalle:",
        "Es por acá mira:"
    ];

    function generateBotResponse(query) {
        const lowerQuery = query.toLowerCase();
        
        // Match specific question queries e.g. "pregunta 2"
        const numMatch = lowerQuery.match(/(pregunta|ejercicio)\s*(\d+)/);
        if (numMatch && currentExam && currentExam.questions) {
            const qIndex = parseInt(numMatch[2]) - 1;
            if (qIndex >= 0 && qIndex < currentExam.questions.length) {
                const q = currentExam.questions[qIndex];
                
                if(isGenZMode) {
                    const randomAdLib = genzAdLibs[Math.floor(Math.random() * genzAdLibs.length)];
                    return `${randomAdLib} En la Pregunta ${qIndex + 1}, es así: ${q.explanation} ¡Cualquier otra duda me avisás!`;
                } else {
                    return `Sobre la Pregunta ${qIndex + 1}: ${q.explanation}`;
                }
                
            } else {
                return isGenZMode 
                ? `Ups reina, este examen nomás tiene ${currentExam.questions.length} preguntas.` 
                : `No logro encontrar esa pregunta. Este parcial solo tiene ${currentExam.questions.length} preguntas.`;
            }
        }
        
        if (lowerQuery.includes('hola') || lowerQuery.includes('buenas')) {
            return isGenZMode
            ? `¡Acá estoy! Tirá la pregunta que no te sale y te la explico más fácil.`
            : `¡Hola, ${userName || 'estudiante'}! Dime, ¿en qué punto del parcial de hoy te has atascado?`;
        }
        if (lowerQuery.includes('mal') || lowerQuery.includes('equivoque') || lowerQuery.includes('error')) {
             return isGenZMode 
             ? `Tranqui, de los errores se aprende. Poné "pregunta X" y te explico el por qué paso a paso.`
             : `Recuerda que puedes ver recuadros debajo de cada inciso corregido. Si escribes "pregunta X", puedo darte la explicación directa por aquí.`;
        }
        
        return isGenZMode
        ? `Mmm no te estaría entendiendo. Escribí algo como "explicame la pregunta 1" para que pueda ayudarte.`
        : `Para asistirte mejor sobre este documento, menciónalo específicamente (ej. "Explícame la pregunta 1").`;
    }

});
