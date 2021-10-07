const quizData = [
    {
        question: "президент КР? #1",
        a: "Atambaev",
        b: "Sooronbay",
        c: "Sadyr",
        d: "Putin",
        correct: "c",
    },

    {
        question: "президент КР? #2",
        a: "Atambaev",
        b: "Sooronbay",
        c: "Obama",
        d: "Sadyr",
        correct: "d",
    },

    {
        question: "президент КР? #3",
        a: "Sadyr",
        b: "Sooronbay",
        c: "Obama",
        d: "Putin",
        correct: "a",
    },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const btn = document.getElementById('sumbit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    d_text.innerText = currentQuizData.d
    c_text.innerText = currentQuizData.c
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false
    })
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

btn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Колличество верных ответов равен ${score}/${quizData.length} вопросов</h2> 
                <button onclick="location.reload()">Пройти повторно</button> 
            `
        }
    }
})