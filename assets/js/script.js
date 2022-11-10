const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById ("question-container")
const questionContainerElement = document.getElementById

startButton.addEventListener("click", startGame)

function startQuiz () {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
displayNextQuestion
}

function displayNextQuestion () {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function selectAnswer () {

}

const questions = [
    [
        question : 'What was the year the first episode of The Simpsons aired?'
        answers: [
            {test: 1989, correct : true}
            {test: 1987, correct : false}
            {test: 1988, correct : false}
            {test: 1990, correct : false}
        ]
]