var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var startQuizButton = document.getElementById('startQuizButton');
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

// start quiz & timer
startQuizButton.addEventListener('click', startTimedQuiz);
startQuizButton.addEventListener('click', beginTimer);

// timer
function beginTimer(){
  let timeLeft = 120
  var countdownTimer = document.getElementById('timeLeft');
  setInterval(function() {
    if(timeLeft <= 0) {
      clearInterval(timeLeft = 0)
    }
    countdownTimer.innerHTML = timeLeft
    timeLeft -=1
  }, 1000)
};

// start quiz on click
function startTimedQuiz() {
  var instructions = document.getElementById('quizPrompt');
  instructions.remove();

  // for loop to move to next question
  // for(i=0; i < quizQuestions.length; i++) {

  // create element for question 1 and append questions to said element
  var quizQuestion = document.createElement('div');
  quizQuestion.className = "questionCSS";
  quizQuestion.textContent = quizQuestions[0].question
  var houseQuestions = document.getElementById('houseQuestions');
  houseQuestions.appendChild(quizQuestion);

  // create a unordered list to house answers
  var mainQuestion = document.createElement('ul');
  mainQuestion.className = 'ulCSS'

  // create element for first answer option and append answer to said element
  var answerOne = document.createElement('li');
  var answerOneButton = document.createElement('button');
  answerOneButton.className = 'buttonCSS'
  answerOneButton.textContent = quizQuestions[0].choiceA;
  answerOne.appendChild(answerOneButton);
  var questionAnswerOne = document.getElementById('houseQuestions');
  mainQuestion.appendChild(answerOne)
  questionAnswerOne.appendChild(mainQuestion);

  // create element for the second answer option and append answer to said element
  var answerTwo = document.createElement('li');
  var answerTwoButton = document.createElement('button');
  answerTwoButton.className = 'buttonCSS'
  answerTwoButton.textContent = quizQuestions[0].choiceB
  answerTwo.appendChild(answerTwoButton);
  var questionAnswerTwo = document.getElementById('houseQuestions');
  mainQuestion.appendChild(answerTwo);
  questionAnswerTwo.appendChild(mainQuestion);

  // create element for the third answer option and append answer to said element
  var answerThree = document.createElement('li');
  var answerThreeButton = document.createElement('button');
  answerThreeButton.className = 'buttonCSS'
  answerThreeButton.textContent = quizQuestions[0].choiceC
  answerThree.appendChild(answerThreeButton);
  var questionAnswerThree = document.getElementById('houseQuestions');
  mainQuestion.appendChild(answerThree);
  questionAnswerThree.appendChild(mainQuestion);

  // create element for the fourth answer option and append answer to said element
  var answerFour = document.createElement('li');
  var answerFourButton = document.createElement('button');
  answerFourButton.className = 'buttonCSS'
  answerFourButton.textContent = quizQuestions[0].choiceD
  answerFour.appendChild(answerFourButton);
  var questionAnswerFour = document.getElementById('houseQuestions');
  mainQuestion.appendChild(answerFour);
  questionAnswerFour.appendChild(mainQuestion);
  
  // var clickAnswer = document.querySelector('.buttonCSS')
  // clickAnswer.addEventListener('click', function() {
  //   quizQuestions[i++];
  //   })
  // }
};

