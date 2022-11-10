const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById ("question-container")

startButton.addEventListener("click", startGame)

function startQuiz () {
console.log('Started')
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
displayNextQuestion
}

function displayNextQuestion () {

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