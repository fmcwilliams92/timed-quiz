var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var startQuizButton = document.getElementById('startQuizButton');
var loopQuestions = 0;
var score = 0;


//Array holding all the questions and answers bank
var quizQuestions = [{
  question: "Commonly used data types DO NOT include:",
  choiceA: "strings",
  choiceB: "booleans",
  choiceC: "alerts",
  choiceD: "numbers",
  correctAnswer: "alerts"
},
{
  question: "The condition in an if / else statement is enclosed with ____________.",
  choiceA: "quotes",
  choiceB: "curly brackets",
  choiceC: "parenthesis",
  choiceD: "square brackets",
  correctAnswer: "parenthesis"
},
{
  question: "String values must be enclosed within _______ when being assigned to variables",
  choiceA: "commas",
  choiceB: "curly brackets",
  choiceC: "quotes",
  choiceD: "parenthesis",
  correctAnswer: "quotes"
},
{
  question: "Arrays in JavaScript can be used to store ___________.",
  choiceA: "numbers and strings",
  choiceB: "other arrays",
  choiceC: "booleans",
  choiceD: "all of the above",
  correctAnswer: "all of the above"
},
{
  question: "A very useful toll used during development and debugging for printing content to the debugger is:",
  choiceA: "JavaScript",
  choiceB: "Bterminal/bash",
  choiceC: "for loops",
  choiceD: "console.log",
  correctAnswer: "console log"
},
];

// add event listeners
startQuizButton.addEventListener('click', startTimedQuiz);
startQuizButton.addEventListener('click', beginTimer);

// timer
function beginTimer(){
  let timeLeft = 120
  var countdownTimer = document.getElementById('timeLeft');
  setInterval(function() {
    if(timeLeft <= 0) {
      clearInterval(timeLeft = 0)
      alert('You have ran out of time!')
      return beginTimer();
    }
    countdownTimer.innerHTML = timeLeft
    timeLeft -=1
  }, 1000)
// need to find a way to deduct 10 seconds from the timer if the answer is incorrect
};

// start quiz on click
function startTimedQuiz() {
  var instructions = document.getElementById('quizPrompt');
  instructions.remove();
  displayQuestions();
};

  // displaying quiz question
function displayQuestions() {
  // create element for question 1 and append questions to said element
  var quizQuestion = document.createElement('div');
  quizQuestion.className = "questionCSS";
  quizQuestion.textContent = quizQuestions[loopQuestions].question
  var houseQuestions = document.getElementById('houseQuestions');
  houseQuestions.innerHTML = '';
  houseQuestions.appendChild(quizQuestion);

  // create a unordered list to house answers
  var mainQuestion = document.createElement('ul');
  mainQuestion.className = 'ulCSS'

  // create element for first answer option and append answer to said element
  var answerOne = document.createElement('li');
  var answerOneButton = document.createElement('button');
  answerOneButton.addEventListener('click', loopOnClick);
  answerOneButton.className = 'buttonCSS'
  answerOneButton.textContent = quizQuestions[loopQuestions].choiceA;
  answerOne.appendChild(answerOneButton);
  var questionAnswerOne = document.getElementById('houseQuestions');
  mainQuestion.appendChild(answerOne)
  questionAnswerOne.appendChild(mainQuestion);

  // create element for the second answer option and append answer to said element
  var answerTwo = document.createElement('li');
  var answerTwoButton = document.createElement('button');
  answerTwoButton.addEventListener('click', loopOnClick);
  answerTwoButton.className = 'buttonCSS'
  answerTwoButton.textContent = quizQuestions[loopQuestions].choiceB
  answerTwo.appendChild(answerTwoButton);
  var questionAnswerTwo = document.getElementById('houseQuestions');
  mainQuestion.appendChild(answerTwo);
  questionAnswerTwo.appendChild(mainQuestion);

  // create element for the third answer option and append answer to said element
  var answerThree = document.createElement('li');
  var answerThreeButton = document.createElement('button');
  answerThreeButton.addEventListener('click', loopOnClick);
  answerThreeButton.className = 'buttonCSS'
  answerThreeButton.textContent = quizQuestions[loopQuestions].choiceC
  answerThree.appendChild(answerThreeButton);
  var questionAnswerThree = document.getElementById('houseQuestions');
  mainQuestion.appendChild(answerThree);
  questionAnswerThree.appendChild(mainQuestion);

  // create element for the fourth answer option and append answer to said element
  var answerFour = document.createElement('li');
  var answerFourButton = document.createElement('button');
  answerFourButton.addEventListener('click', loopOnClick);
  answerFourButton.className = 'buttonCSS'
  answerFourButton.textContent = quizQuestions[loopQuestions].choiceD
  answerFour.appendChild(answerFourButton);
  var questionAnswerFour = document.getElementById('houseQuestions');
  mainQuestion.appendChild(answerFour);
  questionAnswerFour.appendChild(mainQuestion);
};

// looping quiz questions
function loopOnClick() {
  if(loopQuestions <= quizQuestions.length) {
    loopQuestions++
    displayQuestions();
  }
};

// check answer for correct/incorrect

// end quiz
