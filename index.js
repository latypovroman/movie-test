const questionsArr = [
  {
    question: "Что за пирожочек на фото? (кликабельно)",
    image: "./images/depp.jpg",
    options: {
      a: "Орландо Блум",
      b: "Джони Депп",
      c: "Джон Малкович",
      d: "Стив Карелл",
      correct: "b"
    },
  },
  {
    question: "В каком из этих фильмов НЕ играл Брэд Питт",
    image: "./images/pitt.jpg",
    options: {
      a: "12 лет рабства",
      b: "Бойцовский клуб",
      c: "Семь",
      d: "Престиж",
      correct: "d"
    },
  }
];

let quizCounter = 0;
let score = 0;
const quizElement = document.querySelector('.quiz');
const questionElement = quizElement.querySelector('.quiz__question');
const imageElement = quizElement.querySelector('.quiz__image');
const inputs = quizElement.querySelectorAll('.quiz__option');
const labelA = quizElement.querySelector('.quiz__option-text_a');
const labelB = quizElement.querySelector('.quiz__option-text_b');
const labelC = quizElement.querySelector('.quiz__option-text_c');
const labelD = quizElement.querySelector('.quiz__option-text_d');
const submitButton = quizElement.querySelector('.quiz__submit');

class Quiz {
  constructor() {

  }

  getQuestion({question, image, options}) {
    questionElement.textContent = question;
    imageElement.src = image;
    labelA.textContent = options.a;
    labelB.textContent = options.b;
    labelC.textContent = options.c;
    labelD.textContent = options.d;
  }

  refreshRadio() {
    inputs.forEach((input) => {
      input.checked = false
    })
  }

  checkAnswer(options) {
    inputs.forEach((input) => {
      if (input.checked) {
        input.id === options.correct ? score++ : console.log(score);
      }
    })
  }
}

const quiz = new Quiz();
quiz.getQuestion(questionsArr[quizCounter]);

submitButton.addEventListener('click', () => {
  quiz.checkAnswer(questionsArr[quizCounter].options);
  quizCounter++;
  if (quizCounter < questionsArr.length) {
    quiz.getQuestion(questionsArr[quizCounter]);
    quiz.refreshRadio();
  }  else {
    console.log('a vse lol')
  }
})
