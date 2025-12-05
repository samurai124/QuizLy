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

const params = new URLSearchParams(window.location.search);
const category = params.get("category");
