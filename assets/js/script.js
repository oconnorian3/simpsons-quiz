/**
 * Delcaring required Elements
 */
 const startButton = document.getElementById('start-btn');
 const questionContainerElement = document.getElementById('question-container');
 const questionElement = document.getElementById('question');
 const answerButtonsElement = document.getElementById('answer-buttons');

 let shuffledQuestions, currentQuestionIndex;
 let score = 0;
 
 /**
  * Event listner that Starts game 
  */
 startButton.addEventListener('click', startGame);

 function startGame() {
   startButton.classList.add('hide')
   shuffledQuestions = question1.sort(() => Math.random() - .5)
   currentQuestionIndex = 0
   questionContainerElement.classList.remove('hide')
   setNextQuestion()
 }
 
 /**
  * Sets next question
  */
 function setNextQuestion() {
   showQuestion(shuffledQuestions[currentQuestionIndex])
 }

function showQuestion(question) {
  questionElement.innerText = question.question
  let buttons = answerButtonsElement.getElementsByTagName('button');
    buttons[0].innerHTML = question.answer1;
    buttons[1].innerHTML = question.answer2;
    buttons[2].innerHTML = question.answer3;
    buttons[3].innerHTML = question.answer4;
    buttons[0].setAttribute("data-answer", question.answer1);
    buttons[1].setAttribute("data-answer", question.answer2);
    buttons[2].setAttribute("data-answer", question.answer3);
    buttons[3].setAttribute("data-answer", question.answer4);
}

function checkAnswer(event) {
  answer = event.dataset.answer;
  if (answer == shuffledQuestions[currentQuestionIndex].correct) {
    score++;
    document.getElementById("right_answers").innerText = score;
  }
  currentQuestionIndex++;
  setNextQuestion();
}

 function incrementCorrectAnswer () {
  let addScoreCount = parseInt(document.getElementById("right_answers").innerText);
  document.getElementById("right_answers").innerText = addScoreCount + 1;
}

