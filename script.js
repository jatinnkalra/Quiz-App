const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Text Markup Leveler"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which tag is used to link a CSS file in HTML?",
        options: ["<style>", "<script>", "<link>", "<css>"],
        answer: "<link>"
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: ["color", "backgroundColor", "bgcolor", "background-color"],
        answer: "background-color"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<script>", "<js>", "<javascript>", "<code>"],
        answer: "<script>"
    },
    {
        question: "What is the correct syntax for referring to an external JavaScript file?",
        options: ["<script href='app.js'>", "<script name='app.js'>", "<script src='app.js'>", "<javascript src='app.js'>"],
        answer: "<script src='app.js'>"
    },
    {
        question: "Which of the following is a JavaScript data type?",
        options: ["float", "double", "number", "decimal"],
        answer: "number"
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: "font-size"
    },
    {
        question: "How do you write 'Hello World' in an alert box in JavaScript?",
        options: ["msg('Hello World')", "alertBox('Hello World')", "alert('Hello World')", "msgBox('Hello World')"],
        answer: "alert('Hello World')"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["<!-- -->", "//", "**", "/* */"],
        answer: "//"
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "css", "class", "styles"],
        answer: "style"
    },
    {
        question: "How do you select an element with id='main' in CSS?",
        options: [".main", "#main", "*main", "main"],
        answer: "#main"
    },
    {
        question: "How do you declare a JavaScript variable?",
        options: ["v carName;", "var carName;", "variable carName;", "carName var;"],
        answer: "var carName;"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onmouseclick", "onchange", "onmouseover", "onclick"],
        answer: "onclick"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function:myFunction()", "function = myFunction()", "function myFunction()", "def myFunction()"],
        answer: "function myFunction()"
    }
];


console.log(quizQuestions);

let totalQues = quizQuestions.length
let questionCount = 0;
let correct = 0;
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let option4 = document.querySelector(".option4");

option1.addEventListener("click", () => {
    if (option1.textContent == quizQuestions[questionCount].answer) {
        option1.style.backgroundColor = "green";
        nextBtn.disabled = false;
        correct += 1;
    }
    else {
        option1.style.backgroundColor = "red";
        nextBtn.disabled = false;
    }
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;
})

option2.addEventListener("click", () => {
    if (option2.textContent == quizQuestions[questionCount].answer) {
        option2.style.backgroundColor = "green";
        nextBtn.disabled = false;
        correct += 1;
    }
    else {
        option2.style.backgroundColor = "red";
        nextBtn.disabled = false;
    }
    option1.disabled = true;
    option3.disabled = true;
    option4.disabled = true;
})

option3.addEventListener("click", () => {
    if (option3.textContent == quizQuestions[questionCount].answer) {
        option3.style.backgroundColor = "green";
        correct += 1;
        nextBtn.disabled = false;
    }
    else {
        option3.style.backgroundColor = "red";
        nextBtn.disabled = false;
    }
    option2.disabled = true;
    option1.disabled = true;
    option4.disabled = true;

})

option4.addEventListener("click", () => {
    if (option4.textContent == quizQuestions[questionCount].answer) {
        option4.style.backgroundColor = "green";
        correct += 1;
        nextBtn.disabled = false;
    }
    else {
        option4.style.backgroundColor = "red";
        nextBtn.disabled = false;
    }
    option2.disabled = true;
    option3.disabled = true;
    option1.disabled = true;
})



let nextBtn = document.querySelector(".next");
nextBtn.disabled = true;
console.log(nextBtn.textContent)
let question = document.querySelector(".ques");
nextBtn.addEventListener("click", () => {
    if (nextBtn.textContent == "Start Again") {
        questionCount = 0;
        correct = 0;
        question.textContent = "Q " + quizQuestions[questionCount].question;
        option1 = document.querySelector(".option1");
        option2 = document.querySelector(".option2");
        option3 = document.querySelector(".option3");
        option4 = document.querySelector(".option4");
        option1.textContent = quizQuestions[questionCount].options[0]
        option2.textContent = quizQuestions[questionCount].options[1]
        option3.textContent = quizQuestions[questionCount].options[2]
        option4.textContent = quizQuestions[questionCount].options[3]
        question.hidden = false;
        option2.hidden = false;
        option3.hidden = false;
        option4.hidden = false;
        option1.hidden = false;
        nextBtn.textContent = "Next";
        option4.style.backgroundColor = "white";
        option3.style.backgroundColor = "white";
        option2.style.backgroundColor = "white";
        option1.style.backgroundColor = "white";
        option2.disabled = false;
        option3.disabled = false;
        option1.disabled = false;
        option4.disabled = false;
        nextBtn.disabled = true;
    } else {
        if (questionCount == totalQues - 1) {
            question.hidden = true;
            console.log(correct);
            option1.textContent = "Your score is " + correct + " out of 15";
            option2.hidden = true;
            option3.hidden = true;
            option4.hidden = true;
            nextBtn.textContent = "Start Again";

        }
        else {
            option2.disabled = false;
            option3.disabled = false;
            option1.disabled = false;
            option4.disabled = false;
            option4.style.backgroundColor = "white";
            option3.style.backgroundColor = "white";
            option2.style.backgroundColor = "white";
            option1.style.backgroundColor = "white";
            questionCount += 1;
            question.textContent = "Q " + quizQuestions[questionCount].question;
            option1.textContent = quizQuestions[questionCount].options[0]
            option2.textContent = quizQuestions[questionCount].options[1]
            option3.textContent = quizQuestions[questionCount].options[2]
            option4.textContent = quizQuestions[questionCount].options[3]
            nextBtn.disabled = true;
        }
    }

})


