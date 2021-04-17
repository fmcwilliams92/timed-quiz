var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var startQuizButton = document.getElementById('startQuizButton');

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
]
// start quiz
startQuizButton.addEventListener('click', startTimedQuiz);

// hide options from main page
var answerButton = document.getElementById('questionAnswers');
answerButton.remove();

// start quiz on click
function startTimedQuiz() {
  var instructions = document.getElementById('quizPrompt');
  instructions.remove();

  // create element for question 1 and append questions to said element
  var questionOne = document.createElement('div');
  questionOne.textContent = quizQuestions[0].question
  var houseQuestions = document.getElementById('houseQuestions');
  houseQuestions.appendChild(questionOne);

  // create a unordered list to house answers
  var ulQuestionOne = document.createElement('ul');

  // create element for first answer option and append answer to said element
  var answerOne = document.createElement('li');
  answerOne.textContent = quizQuestions[0].choiceA
  var questionAnswerOne = document.getElementById('houseQuestions');
  questionAnswerOne.appendChild(answerOne);

  // create element for the second answer option and append answer to said element
  var answerTwo = document.createElement('li');
  answerTwo.textContent = quizQuestions[0].choiceB
  var questionAnswerTwo = document.getElementById('houseQuestions');
  questionAnswerTwo.appendChild(answerTwo);

  // create element for the third answer option and append answer to said element
  var answerThree = document.createElement('li');
  answerThree.textContent = quizQuestions[0].choiceC
  var questionAnswerThree = document.getElementById('houseQuestions');
  questionAnswerThree.appendChild(answerThree);

  // create element for the fourth answer option and append answer to said element
  var answerFour = document.createElement('li');
  answerFour.textContent = quizQuestions[0].choiceD
  var questionAnswerFour = document.getElementById('houseQuestions');
  questionAnswerFour.appendChild(answerFour);
};

function buildQuiz() {

};

function showResults() {

};



// display quiz right away
buildQuiz();

// on submit, show the result
// submitButton.addEventListener('click', showResults);