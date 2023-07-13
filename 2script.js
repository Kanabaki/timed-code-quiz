let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Array of Q&A-----------------------------------------------------------
const quizArray = [
    {
        id: "0",
question: "Why use Javascript?",
options: [ "To structure a Webpage","To add styling to a webpage","To create dynamic Webpage content", "To optimize tasks by using collections of prewritten code"],
correct: "To create dynamic Webpage content",
},

{
        id: "1",
question: "Arrays in JavaScript can be used to store ____.",
options: [  "Numbers and strings", "Other arrays", "Booleans", "All of the above", ],
correct: "All of the above",
},    

{
     id: "2",
question: "Commenting in Javascript is done with which of the following?",
options: [ "//comment//","/*comment*/","<--comment-->","||comment||"],
correct: "//comment//",
 },  

 {
    id: "3",
question: "Commonly used data types DO NOT include",
options: ["Strings", "Alerts", "Booleans", "Numbers",],
correct: "Alerts",
},   

  {
        id: "4",
question: "What method is used to listen for events happening to an element?",
options: ["addEventListener","querySelector","getElementById", "find"],
correct: "addEventListener",
    }, 

    {
id: "5",
question: "The condition in an if/else statement is enclosed within ____.",
options: ["Curly Brackets","Parentheses","Asterisks","Equal Signs"],
correct: "Parentheses",
    },

   {
        id: "6",
question: "String values must be enclosed within ____ when being assigned to variables.",
options: [
    "Square Brackets", "Curly Brackets", "Quotes", "Parentheses"],
correct: "Quotes",
    }, 
];

