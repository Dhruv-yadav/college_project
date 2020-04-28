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
    question: 'Nobel prize is awarded for which of the following disciplines:',
    answers: [
      { text: 'Literature, peace and economics', correct: false },
      { text: 'Medicine or Physiology', correct: false },
      { text: 'Chemistry and Physics', correct: false },
      { text: 'All the above', correct: true }
    ]
  },
  {
    question: 'Galileo was an astronomer who',
    answers: [
      { text: 'developed the telescope', correct: false },
      { text: 'discovered four satellites of Jupiter', correct: true },
      { text: 'discovered', correct: false},
      { text: 'All the above', correct: false }
    ]
  },
  {
    question: 'Who is the father of geometry?',
    answers: [
      { text: 'Aristotle', correct: false },
      { text: 'EUCLID', correct: true },
      { text: 'Pythogoras', correct: false },
      { text: 'Kepler', correct: false }
    ]
  },
  {
    question: 'Who is popularly called as the Iron Man of India?',
    answers: [
      { text: 'Subhash Chandra Bose', correct: false },
      { text: 'Sardar Vallabhbhai Patel', correct: true },
      { text: 'Jawaharlal Nehru', correct: false },
      { text: 'Govind Ballabh Pant', correct: false }
    ]
  }
]