const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

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

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    {
      question: 'What was the year the first episode of The Simpsons aired?',
      answers: [
        { text: '1989', correct: true },
        { text: '1987', correct: false },
        { text: '1990', correct: false } ,
        { text: '1986', correct: false },
      ]
    },
    {
      question: 'Whats the name of the Simpsons pet dog',
      answers: [
        { text: 'Ruby', correct: false },
        { text: 'Ralph', correct: false },
        { text: 'Santas Little Helper', correct: true } ,
        { text: 'Snowy', correct: false },
    ]
    },
    
    {
        question: 'Which cartoon was the inspiration for The Itchy & Scratchy Show',
        answers: [
          { text: 'Scooby Doo', correct: false },
          { text: 'Bugs Bunny', correct: false },
          { text: 'Tom & Jerry', correct: true } ,
          { text: 'Danger Mouse', correct: false },
      ]
      },
    {
        question: 'What is Marges natural hair colour?',
        answers: [
          { text: 'Grey', correct: false },
          { text: 'Blue', correct: true },
          { text: 'Brown', correct: false } ,
          { text: 'Blonde', correct: false },
      ]
      },
    {
        question: 'What is Homers full time job?',
        answers: [
          { text: 'Duffman', correct: false },
          { text: 'Chief of Police', correct: false },
          { text: 'Nuclear Safety Inpector', correct: true } ,
          { text: 'Bus Driver', correct: false },
      ]
      },
    {
        question: 'What is Marges maiden name?',
        answers: [
          { text: 'Garnier', correct: false },
          { text: 'Fitzgerald', correct: false },
          { text: 'Never Revealed', correct: false } ,
          { text: 'Bouvier', correct: true },
      ]
      },  
    {
        question: 'How many kids do Apu and Manjula have',
        answers: [
          { text: '9', correct: false },
          { text: '8', correct: true },
          { text: '7', correct: false } ,
          { text: '6', correct: false },
      ]
      },
    {
        question: 'What are Marges twin sisters called?',
        answers: [
          { text: 'Maggie & Sheila', correct: false },
          { text: 'Tia & Tamera', correct: false },
          { text: 'Patty & Selma', correct: true } ,
          { text: 'Kristina & Karissa', correct: false },
      ]
      },  
    {
        question: 'Who performed the role of Sideshow Bob in "The Simpsons" and was a former "Cheers" star?',
        answers: [
          { text: 'Ted Danson', correct: false },
          { text: 'Kelsey Grammar', correct: true },
          { text: 'Woody Harreison', correct: false } ,
          { text: 'George Wendt', correct: false },
      ]
      },   
    {
        question: 'Homer was part of a barbershop quartet. what was it called?',
        answers: [
          { text: 'The Be Sharps', correct: true },
          { text: 'The Ce sharps', correct: false },
          { text: 'The De sharps', correct: false } ,
          { text: 'The Ee sharps', correct: false },
      ]
      },      
]
    