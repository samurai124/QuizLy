const javaQuestions = [
    {
        question: "What is Java?",
        answer: "Java is a programming language",
        wrong_answer: ["Java is a database", "Java is an operating system", "Java is a web browser"]
    },
    {
        question: "Who developed Java?",
        answer: "Sun Microsystems",
        wrong_answer: ["Microsoft", "Google", "Apple"]
    },
    {
        question: "What does JVM stand for?",
        answer: "Java Virtual Machine",
        wrong_answer: ["Java Visual Model", "Java Value Manager", "Joint Virtual Memory"]
    },
    {
        question: "What type of language is Java?",
        answer: "Object-oriented",
        wrong_answer: ["Procedural", "Functional only", "Markup"]
    },
    {
        question: "Which keyword is used to inherit a class in Java?",
        answer: "extends",
        wrong_answer: ["implements", "inherits", "super"]
    },
    {
        question: "Which method is the entry point of a Java program?",
        answer: "main",
        wrong_answer: ["start", "run", "execute"]
    },
    {
        question: "Which of the following is not a Java primitive type?",
        answer: "String",
        wrong_answer: ["int", "boolean", "char"]
    },
    {
        question: "Which keyword creates objects in Java?",
        answer: "new",
        wrong_answer: ["create", "init", "make"]
    },
    {
        question: "Which package contains the Scanner class?",
        answer: "java.util",
        wrong_answer: ["java.io", "java.lang", "java.scan"]
    },
    {
        question: "Java code is compiled into:",
        answer: "Bytecode",
        wrong_answer: ["Machine code", "Assembly", "Text format"]
    },
];

const javascriptQuestions = [
    {
        question: "What is JavaScript mainly used for?",
        answer: "Adding interactivity to web pages",
        wrong_answer: ["Styling web pages", "Managing databases", "Creating operating systems"]
    },
    {
        question: "Which company created JavaScript?",
        answer: "Netscape",
        wrong_answer: ["Google", "Microsoft", "Apple"]
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answer: "//",
        wrong_answer: ["<!-- -->", "#", "/* */ only"]
    },
    {
        question: "Which keyword declares a variable?",
        answer: "let",
        wrong_answer: ["var only", "make", "define"]
    },
    {
        question: "JavaScript runs on:",
        answer: "The browser",
        wrong_answer: ["The server only", "The database", "The compiler"]
    },
    {
        question: "What data type is an array?",
        answer: "Object",
        wrong_answer: ["List", "Primitive", "String"]
    },
    {
        question: "What is used to convert JSON to an object?",
        answer: "JSON.parse()",
        wrong_answer: ["JSON.toObject()", "parse.JSON()", "JSON.convert()"]
    },
    {
        question: "Which symbol is used for strict equality?",
        answer: "===",
        wrong_answer: ["==", "=", "!==" ]
    },
    {
        question: "Which function displays a message box?",
        answer: "alert()",
        wrong_answer: ["msg()", "popup()", "display()"]
    },
    {
        question: "JavaScript is:",
        answer: "Single-threaded",
        wrong_answer: ["Multi-threaded", "No-threaded", "Server-threaded"]
    },
];

const sqlQuestions = [
    {
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        wrong_answer: ["Simple Query Language", "System Query Logic", "Standard Question Line"]
    },
    {
        question: "Which SQL command is used to retrieve data?",
        answer: "SELECT",
        wrong_answer: ["GET", "FETCH", "RETRIEVE"]
    },
    {
        question: "Which clause filters rows?",
        answer: "WHERE",
        wrong_answer: ["ORDER BY", "GROUP BY", "LIMIT"]
    },
    {
        question: "Which SQL keyword sorts the result?",
        answer: "ORDER BY",
        wrong_answer: ["SORT", "ARRANGE", "GROUP"]
    },
    {
        question: "Which command inserts new data?",
        answer: "INSERT",
        wrong_answer: ["ADD", "PUT", "CREATE"]
    },
    {
        question: "Which command removes a table?",
        answer: "DROP",
        wrong_answer: ["DELETE", "ERASE", "REMOVE"]
    },
    {
        question: "What is used to group rows?",
        answer: "GROUP BY",
        wrong_answer: ["ORDER BY", "MERGE", "CONNECT"]
    },
    {
        question: "What does PRIMARY KEY do?",
        answer: "Uniquely identifies each row",
        wrong_answer: ["Stores big text", "Sorts rows", "Links tables only"]
    },
    {
        question: "Which SQL command updates existing data?",
        answer: "UPDATE",
        wrong_answer: ["CHANGE", "MODIFY", "SET VALUE"]
    },
    {
        question: "What does JOIN do?",
        answer: "Combines rows from two tables",
        wrong_answer: ["Deletes related rows", "Creates a new table", "Encrypts data"]
    },
];

let nextbtn = document.querySelector('.btn-next');
let correctAnswerScore = 0;
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
let qustionsArray;
if(category == "java"){
    qustionsArray = javaQuestions;  
}else if(category == "javascript"){
    qustionsArray = javascriptQuestions; 
}else{
    qustionsArray = sqlQuestions;
}

// function check answer
function checkAnswer(element) {
    const selected = element.textContent.trim();
    const correct = element.dataset.correct;
    document.querySelectorAll(".answer-option").forEach(opt => {
        opt.onclick = null;
    });
    if (selected === correct) {
        element.style.border = "2px solid #2ce144ff";
        correctAnswerScore += 1;
    } else {
        element.style.border = "2px solid #e92323ff";
        const answers = document.querySelectorAll(".answer-option");
        answers.forEach(opt => {
            if (opt.textContent.trim() === correct) {
                opt.style.border = "2px solid #2ce144ff";
            }
        });
    }
    nextbtn.disabled = false;
}
 
function insert_question(index, question){
    let question_card = document.querySelector('.question-card');
    question_card.innerHTML = "";
    question_card.insertAdjacentHTML('afterbegin',`<h2 class="question-title">Question ${index}</h2><p class="question-text">${question.question}</p>`);
}

function insertAnswers(data) {
    const answersContainer = document.querySelector('.answers-container');
    answersContainer.innerHTML = "";
    let allAnswers = [data.answer, ...data.wrong_answer];
    allAnswers = allAnswers.sort(() => Math.random() - 0.5);
    allAnswers.forEach(ans => {
        answersContainer.insertAdjacentHTML("beforeend", `
            <div class="answer-option"
                data-correct="${data.answer}"
                onclick="checkAnswer(this)">
                ${ans}
            </div>
        `);
    });
}

let currentQuestion = 0;
const totalQuestions = 10;


function updateQuestionCounter() {
    document.querySelector('.question-counter').textContent = `${currentQuestion + 1} / ${totalQuestions}`;
}


function updateProgress() {
    const percentage = ((currentQuestion + 1) / totalQuestions) * 100;
    document.querySelector('.progress-fill').style.width = percentage + '%';
}

function nextQuestion() {
    nextbtn.disabled = true; 
    if (currentQuestion + 1 < totalQuestions) {
        currentQuestion++;
        updateQuestionCounter();
        updateProgress();
        insert_question(currentQuestion + 1, qustionsArray[currentQuestion]);
        insertAnswers(qustionsArray[currentQuestion]);
    } else {
        window.location.href = `/Pages/ResultPage.html?score=${correctAnswerScore}`;
    }
}

// Go back function
function goBack() {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateQuestionCounter();
        updateProgress();
        insert_question(currentQuestion + 1, qustionsArray[currentQuestion]);
        insertAnswers(qustionsArray[currentQuestion]);
    }
}

// Skip question function
function skipQuestion() {
    nextQuestion();
}

nextbtn.disabled = true; 
nextbtn.addEventListener("click", nextQuestion);

updateQuestionCounter();
updateProgress();
insert_question(currentQuestion + 1, qustionsArray[currentQuestion]);
insertAnswers(qustionsArray[currentQuestion]);

