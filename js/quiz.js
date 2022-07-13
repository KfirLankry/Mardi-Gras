const questions = [
  {
    q: "What is the day before Mardi Gras called?",
    a: ["Lundi Gras", "Mardi Day", "Mandi Day", "Fun Day"],
  },
  {
    q: "What day comes after Mardi Gras?",
    a: ["Sunday", "Thursday", "Wednesday", "Friday"],
  },
  {
    q: "Where was the first known carnival celebration?",
    a: [
      "New Orleans, Usa",
      "Telaviv, Israel",
      "Rio De Janeiro, Brazil",
      "Nice, France",
    ],
  },
  {
    q: "When was the earliest known carnival celebration?",
    a: ["1212", "1343", "1294", "1290"],
  },
  {
    q: "What is the signature Mardi Gras dessert?",
    a: ["King cake", "Queen cake", "Baby cake", "Mask cake"],
  },
  {
    q: "What is traditionally hidden inside a king cake?",
    a: ["A plastic glass", "A plastic baby", "Face mask", "Plastic crown"],
  },
  {
    q: "Before the COVID-19 pandemic, when was the most recent cancellation of New Orleans’ Mardi Gras parades?",
    a: ["1932", "1940", "1945", "1952"],
  },
  {
    q: "What is the most popular food for Shrove Tuesday?",
    a: ["Hamburger", "French fries", "Pancakes", "Pizza"],
  },
  {
    q: "What are the groups that organize New Orleans Mardi Gras parades called?",
    a: ["Krewes", "Hempsons", "Monteuxs", "Domont"],
  },
  {
    q: "What was the first all-female New Orleans Mardi Gras krewe?",
    a: [
      "Krewe Olivia",
      "Krewe Sophia",
      "The Krewe of Venus",
      "The Krewe of Neptune",
    ],
  },
];
const correctAnswers = [
  "Lundi Gras",
  "Wednesday",
  "Nice, France",
  "1294",
  "King cake",
  "A plastic baby",
  "1945",
  "Pancakes",
  "Krewes",
  "The Krewe of Venus",
];

var question = document.querySelector(".question");
var buttonsBox = document.querySelector("#btns");
var scoreBox = document.getElementById("score-box");
var score = document.getElementById("score");
var start = document.getElementById("start-div");
var game = document.querySelector(".quiz-box");
var bigTitle = document.getElementById("mardi-big-title");
var scoreTxt = document.getElementById("score-txt");
var playerName = document.getElementById("_name");
var playerNameTitle = document.getElementById("name-title");
var restartGame = document.getElementById("restart-box");
var nameAndScore = document.getElementById("_name-score");
var questionCount = document.getElementById("question-count");
var quizHr = document.querySelector(".quizhr");
var indicator;
var scoreIndicator;

function startQuiz() {
  start.style.display = "none";
  game.style.display = "block";
  bigTitle.style.display = "none";
  scoreBox.style.display = "block";
  playerNameTitle.innerHTML += playerName.value;
  indicator = 0;
  scoreIndicator = 0;
  switchQuestion();
}

function switchQuestion() {
  if (indicator == 10) {
    results();
  } else {
    scoreTxt.innerHTML = "";
    buttonsBox.innerHTML = "";
    score.innerHTML = scoreIndicator;
    for (i = 0; i < questions[indicator].a.length; i++) {
      questionCount.innerHTML = `Question # ${indicator + 1} / 10`;
      buttonsBox.innerHTML += `<button id="btn" class="button" onclick="check(event)">${questions[indicator].a[i]}</button>`;
    }
    question.innerHTML = `<p class="question">${questions[indicator].q}</p>`;
  }
}

function check(event) {
  if (correctAnswers.includes(event.target.innerHTML)) {
    scoreTxt.style.fontSize = "1.5rem";
    scoreTxt.innerHTML = `<i class="fa-solid fa-check text-success"></i> Good Job!`;
    scoreTxt.style.color = "green";
    scoreIndicator += 10;
    setTimeout(switchQuestion, 900);
    indicator++;
  } else if (event.target.innerHTML != correctAnswers) {
    scoreTxt.style.fontSize = "1.5rem";
    scoreTxt.innerHTML = `<i class="fa-solid fa-xmark text-danger"></i> Wrong! The correct answer is: <b> ${correctAnswers[indicator]} </b>`;
    scoreTxt.style.color = "red";
    setTimeout(switchQuestion, 1200);
    indicator++;
  }
}

function results() {
  if (scoreIndicator == 100) {
    scoreTxt.innerHTML = `<div class="alert alert-success" role="alert"><i class="fa-solid fa-star"></i> <b>Congratulations</b> ${playerName.value}! Your score is: <b>${scoreIndicator}</b> Mardi Points <i class="fa-solid fa-star"></i></div>`;
    question.innerHTML = `<h1 class="_gameoverTxt mb-4" style="font-size: 2.5rem;"><i class="fa-solid fa-hands-clapping"></i> Wow, You answered 10 out of 10! <i class="fa-solid fa-hands-clapping"></i></h1>`;
  } else if (scoreIndicator >= 60) {
    scoreTxt.innerHTML = `<div class="alert alert-success" role="alert"><i class="fa-solid fa-star"></i> Well done ${playerName.value}, Your score is: <b>${scoreIndicator}</b> Mardi Points <i class="fa-solid fa-star"></i></div>`;
    question.innerHTML = `<h1 class="_gameoverTxt mb-4" style="font-size: 2.5rem;">Hooray! Quiz Completed.</h1>`;
  } else {
    scoreTxt.innerHTML = `<div class="alert alert-danger" role="alert"><i class="fa-solid fa-star"></i> ${playerName.value}, Your score is: <b>${scoreIndicator}</b> Mardi Points. Try better next time! <i class="fa-solid fa-star"></i></div>`;
    question.innerHTML = `<h1 class="_gameoverTxt mb-4" style="font-size: 2.5rem;">Hooray! Quiz Completed.</h1>`;
  }

  questionCount.style.display = "none";
  question.style.color = "black";
  restartGame.innerHTML = `<button id="restart" class="mb-3" onclick="window.location.href='quiz.html'"><i class="fa-solid fa-arrows-rotate text-white"></i> Restart Quiz</button> <button id="restart" class="mb-3" onclick="window.location.href='index.html'"><i class="fa-regular fa-circle-xmark text-white"></i> Close</button>`;
  buttonsBox.style.display = "none";
  scoreTxt.style.color = "green";
  scoreBox.style.display = "none";
  quizHr.style.display = "none";
}
