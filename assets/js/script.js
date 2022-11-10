const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById ('question')
const answerButtonsElement = document.getElementById ('answers-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)

function startQuiz () {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
displayNextQuestion
}

function displayNextQuestion () {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question) {
   questionElement.innerText = question.question
}

function selectAnswer () {
  
}

const questions = [
    {
        question: 'What was the year the first episode of The Simpsons aired?',
        answers: [
            { text: '1989', correct : true },
            { text: '1987', correct : false },
            { text: '1988', correct : false },
            { text: '1990', correct : false }
        ]
    }
]