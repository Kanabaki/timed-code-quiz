let timeLeft = document.querySelector(".time-left");
let questionsContainer = document.getElementById("questions-container");
// let nextBtn = document.getElementById("next-button");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionText = document.getElementById("question-text");
let questionOptions = document.getElementById("question-options")
let questionCount;
let scoreCount = 0;
let count = 60;
let countdown;
let choices = document.querySelectorAll(".li")

let QnA = [
    {
        question: "Commenting in Javascript is done with which of the following?",
        options: [ "//comment//","/#comment#/","=comment=","||comment||"],
        correct: "//comment//"
    },
    {
        question: "Commonly used data types DO NOT include",
        options: ["Strings", "Alerts", "Booleans", "Numbers",],
        correct: "Alerts",
    }
]

//   {
//         id: "4",
// question: "What method is used to listen for events happening to an element?",
// options: ["addEventListener","querySelector","getElementById", "find"],
// correct: "addEventListener",
//     }, 

//     {
// id: "5",
// question: "The condition in an if/else statement is enclosed within ____.",
// options: ["Curly Brackets","Parentheses","Asterisks","Equal Signs"],
// correct: "Parentheses",
//     },

   
//         id: "6",
// question: "String values must be enclosed within ____ when being assigned to variables.",
// options: [
//     "Square Brackets", "Curly Brackets", "Quotes", "Parentheses"],
// correct: "Quotes",

//when you click start, a question appears
startButton.addEventListener("click", startGame)

//functions
function startGame() {
    startButton.classList.add("hide");
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    timeLeft.textContent = count + 's';
    questionCount = 0;
    // nextBtn.classList.remove("hide");

    timerStarts()
    nextQuestion()
};

function timerStarts() {
    let interval = setInterval(function() {
        count--;
        timeLeft.textContent = count +'s';

        if(count <= 0 || questionCount >= QnA.length) {
            clearInterval(interval)
        }
    }, 1000)
}

function nextQuestion () {
    let currentQuestion = QnA[questionCount];
    questionText.textContent = currentQuestion.question;
    
    questionOptions.innerHTML="";
    //['item', 'another', 'thing', 'stuff']
    for(i=0; i< currentQuestion.options.length; i++) {
        let newButton = document.createElement("button");
        let newBr = document.createElement("br");

        newButton.textContent = currentQuestion.options[i];
        newButton.addEventListener("click", checkAnswer);

        questionOptions.append(newButton)
        questionOptions.append(newBr)
    }
};

function checkAnswer (e) {
    let chosenValue = e.target.textContent;
    if(chosenValue === QnA[questionCount].correct) {
        console.log('correct')
    }else {
        console.log('incorrect')
        count -= 5
    }

    questionCount++;
    if(questionCount < QnA.length) {
        nextQuestion()
    }
}
/*


};
//trying to select a li
let question1 = document.getElementById(".0");

if (question1 li=="correct"){
console.log(question1 + " is correct")
}else{
    console.log(question1 + " is incorrect")
};*/

//run a for loop to check through the choices and see which string matches the answer