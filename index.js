import Quiz from './components/Quiz.js';
import ResultTable from './components/ResultTable.js'
import Popup from './components/Popup.js'
import questionsArr from './utils/questionsArr.js'
import SwitchTheme from './components/SwitchTheme.js'


let quizCounter = 0;
let score = 0;
const page = document.querySelector('.page');
const quizElement = document.querySelector('.quiz');
const submitButton = quizElement.querySelector('.quiz__submit');
const imageElement = quizElement.querySelector('.quiz__image');
const resultElement = document.querySelector('.result');
const restartButton = resultElement.querySelector('.result__restart');
const popupElement = document.querySelector('.popup');
const switchTemplate = document.querySelector('#switch-template');
const switchInput = document.querySelector('.theme-switch__input');

const quiz = new Quiz(quizElement, imageElement);
const resultTable = new ResultTable(resultElement);
const popup = new Popup(popupElement);
const switchTheme = new SwitchTheme('#switch-template');

submitButton.addEventListener('click', () => {
  quiz.checkAnswer({changeScore: (id) => {

    id === questionsArr[quizCounter].options.correct ? score++ : console.log(score);
  }
});
  quizCounter++;
  if (quizCounter < questionsArr.length) {
    quiz.getQuestion(questionsArr[quizCounter]);
  }  else {
    resultTable.showResultTable(score, questionsArr.length);
  }
})

restartButton.addEventListener('click', () => {
  score = 0;
  quizCounter = 0;
  resultTable.removeResultTable();
  quiz.getQuestion(questionsArr[quizCounter]);
})

imageElement.addEventListener('click', () => {
  popup.open(questionsArr[quizCounter].image)
})

quiz.getQuestion(questionsArr[quizCounter]);
page.append(switchTheme.generate(page, quizElement));

// switchInput.addEventListener('change', ()=>{
//   switchTheme.toggleTheme(page);
// })

