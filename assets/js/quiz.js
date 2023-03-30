const question = document.getElementById("questions");
const progress = document.getElementById("progress");
const scoreCount = document.getElementById("score");
let score;
let questionCounter = 0;
let availableQuestions = [];
let ongoingQuestion = {};


// Quiz questions
let questionsArray = [
    {
        question: "What is the capital city of Spain?",
        option1: "Madrid",
        option2: "Barcelona",
        option3: "Seville",
        answer: "Madrid"

    },
    {
        question: "What is the capital city of France?",
        option1: "Paris",
        option2: "Marseille",
        option3: "Lyon",
        answer: "Paris"
    },
    {
        question: "What is the capital city of Italy?",
        option1: "Rome",
        option2: "Milan",
        option3: "Florence",
        answer: "Rome"
    },
    {
        question: "What is the capital city of Brazil?",
        option1: "Rio de Janeiro",
        option2: "Brasília",
        option3: "São Paulo",
        answer: "Brasília"
    },
    {
        question: "What is the capital city of Australia?",
        option1: "Sydney",
        option2: "Melbourne",
        option3: "Canberra",
        answer: "Canberra"
    },
    {
        question: "What is the capital city of Russia?",
        option1: "Novosibirsk",
        option2: "St. Petersburg",
        option3: "Moscow",
        answer: "Moscow"
    },
    {
        question: "What is the capital city of Croatia?",
        option1: "Osijek",
        option2: "Zagreb",
        option3: "Split",
        answer: "Zagreb"
    },
    {
        question: "What is the capital city of Egypt?",
        option1: "Luxor",
        option2: "Alexandria",
        option3: "Cairo",
        answer: "Cairo"
    },
    {
        question: "What is the capital city of Canada?",
        option1: "Toronto",
        option2: "Vancouver",
        option3: "Ottawa",
        answer: "Ottawa"
    },
    {
        question: "What is the capital city of Japan?",
        option1: "Kyoto",
        option2: "Tokyo",
        option3: "Osaka",
        answer: "Tokyo"
    },
    {
        question: "What is the capital city of Turkey?",
        option1: "Istanbul",
        option2: "Ankara",
        option3: "Izmir",
        answer: "Ankara"
    },
    {
        question: "What is the capital city of India?",
        option1: "Mumbai",
        option2: "New Delhi",
        option3: "Kolkata",
        answer: "New Delhi"
    },
    {
        question: "What is the capital city of Argentina?",
        option1: "Buenos Aires",
        option2: "Cordoba",
        option3: "Rosario",
        answer: "Buenos Aires"
    },
    {
        question: "What is the capital city of South Korea?",
        option1: "Seoul",
        option2: "Busan",
        option3: "Daegu",
        answer: "Seoul"
    },
    {
        question: "What is the capital city of Mexico?",
        option1: "Mexico City",
        option2: "Cancun",
        option3: "Guadalajara",
        answer: "Mexico City"
    },
    {
        question: "What is the capital city of Serbia?",
        option1: "Belgrade",
        option2: "Novi Sad",
        option3: "Leskovac",
        answer: "Belgrade"
    }
];

const scorePoints = 10;
const maxQuestions = 10;

/** Resets the quiz state and start a new game. */
const startGame = () => {
    
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questionsArray];
    getNewQuestion()
}

const getNewQuestion = () => {

    // Checks if there are no more available questions or if the maximum number of questions has been reached.
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {

        //  Feature: This will save users score when the quiz ends 
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("#")
    }
    
    // Choose a random question from the list of available questions and display it.
    const randomQuestion = Math.floor(Math.random() * availableQuestions.length);
    ongoingQuestion = availableQuestions[randomQuestion];
    question.innerText = ongoingQuestion.question;
    
}

startGame()