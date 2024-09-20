import { questionsData } from "./questionsData.js"

const questionParent = document.querySelector(".questionParent");
const questionElement = document.querySelector(".question");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const questionTimer = document.querySelector(".questionTimer");
const buttonParent = document.querySelector(".buttonParent");
const resultParent = document.querySelector(".resultParent");

let count = 0;
let remainingSecond = 5;
let correctAnswer = 0;
let correctAnswerCount = 0;
let optionSelected = false;
let result = [];
let intervalId;
let questionsList = [];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomNumber(0, i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const showResult = () => {
    clearInterval(intervalId);
    resultParent.innerText = `You Scored ${correctAnswerCount} out of ${questionsData.length}`;
    questionParent.style.display = "none";
    resultParent.style.display = "block";

}

const handleNumberingQuestion = () => {
    let numberingspans = document.querySelectorAll("span");
    // console.log(numberingspans)
    numberingspans.forEach((span, index) => {
        console.log(span, index, count)
        if (index < count) {
            span.style.backgroundColor = "blue"
            span.style.color = "white"
        } else if (index === count) {
            span.style.backgroundColor = "green"
            span.style.color = "white"
        } else {
            span.style.backgroundColor = "yellow"
            span.style.color = "red"
        }
    });

}

const populateQuestionToDom = (question) => {
    if (count === 5 || questionsList.length === 0) {
        showResult();
        return;
    }

    handleNumberingQuestion()

    questionElement.innerText = `Question ${count + 1} :- ${question?.question}`;
    option1.innerText = question.options[0];
    option1.style.backgroundColor = "whitesmoke";
    option2.innerText = question.options[1];
    option2.style.backgroundColor = "whitesmoke";
    option3.innerText = question.options[2];
    option3.style.backgroundColor = "whitesmoke";
    option4.innerText = question.options[3];
    option4.style.backgroundColor = "whitesmoke";
    correctAnswer = question?.answer;
    count++;
    optionSelected = false;
}

const setQuestionFromQuestions = () => {
    intervalId = setInterval(() => {
        if (remainingSecond === 1) {
            if (questionsList.length === 0) {
                showResult();
                return;
            }
            populateQuestionToDom(questionsList[count]);
            remainingSecond = 5;
        } else {
            remainingSecond--;
        }
        questionTimer.innerText = remainingSecond;
    }, 1000);
}

const startTest = () => {
    questionsList = shuffleArray([...questionsData]);
    questionsList.map((el)=>{
        el.options = shuffleArray([...el.options]);
        return el
    })
    count = 0;
    correctAnswerCount = 0;
    result = [];
    optionSelected = false;
    remainingSecond = 5;
    populateQuestionToDom(questionsList[count]);
    setQuestionFromQuestions();
}

buttonParent.addEventListener("click", (button) => {
    if (button.target.tagName === "BUTTON") {
        if (!optionSelected) {
            optionSelected = true;
            let selectedAnswer = button.target.innerText;
            if (correctAnswer === selectedAnswer) {
                button.target.style.backgroundColor = "lightgreen";
                result.push(true);
                correctAnswerCount++;
            } else {
                button.target.style.backgroundColor = "lightgreen";
                result.push(false);
            }
        }
    }
});

startTest();
