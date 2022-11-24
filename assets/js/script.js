/**
 * Delcaring required Elements
 */
 const startButton = document.getElementById('start-btn')
 const nextButton = document.getElementById('next-btn')
 const questionContainerElement = document.getElementById('question-container')
 const questionElement = document.getElementById('question')
 const answerButtonsElement = document.getElementById('answer-buttons')

 let shuffledQuestions, currentQuestionIndex
 
 /**
  * Event listner that Starts game 
  */
 startButton.addEventListener('click', startGame)
 nextButton.addEventListener('click', () => {
   currentQuestionIndex++
   setNextQuestion()
 })
 
 /**
  * Displays Quiz, Loads question in reandowm order
  */
 function startGame() {
   startButton.classList.add('hide')
   shuffledQuestions = questions.sort(() => Math.random() - .5)
   currentQuestionIndex = 0
   questionContainerElement.classList.remove('hide')
   setNextQuestion()
 }
 
 /**
  * Sets next question
  */
 function setNextQuestion() {
  resetState()
   showQuestion(shuffledQuestions[currentQuestionIndex])
 }
 
 function showQuestion(question) {
   questionElement.innerText = question.question
   question.answers.forEach(answer => {
     const button = document.createElement('button')
     button.innerText = answer.text
     button.classList.add('btn')
     if (answer.correct) {
       button.dataset.correct = answer.correct
     }
     button.addEventListener('click', selectAnswer)
     answerButtonsElement.appendChild(button)
   })
 }
 /**
  * Resets question after submitting next and display's new one
  */
 function resetState() {
   nextButton.classList.add('hide')
   while (answerButtonsElement.firstChild) {
     answerButtonsElement.removeChild(answerButtonsElement.firstChild)
   }
 }
 /**
  * Allows user restart quiz after workin through all questions
  */
 function selectAnswer(e) {
   const selectedButton = e.target
   const correct = selectedButton.dataset.correct
   Array.from(answerButtonsElement.children).forEach(button => {
   })
   if (shuffledQuestions.length > currentQuestionIndex + 1) {
     nextButton.classList.remove('hide')
   } else {
     startButton.innerText = 'Restart'
     startButton.classList.remove('hide')
   }
 }

 function incrementCorrectAnswer () {
  let addScoreCount = parseInt(document.getElementById("right_answers").innerText);
  document.getElementById("right_answers").innerText = addScoreCount + 1;
}

function incrementWrongAnswer () {
  let wrongAnswerCount = parseInt(document.getElementById("wrong_answers").innerText);
  document.getElementById("wrong_answers").innerText = wrongAnswerCount + 1;

}
