import Quiz from './components/Quiz.js';
import ResultTable from './components/ResultTable.js'
import questionsArr from './utils/questionsArr.js'

let quizCounter = 0;
let score = 0;
const quizElement = document.querySelector('.quiz');
const submitButton = quizElement.querySelector('.quiz__submit');
const resultElement = document.querySelector('.result');
const restartButton = resultElement.querySelector('.result__restart');

const quiz = new Quiz(quizElement);
const resultTable = new ResultTable(resultElement);

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

quiz.getQuestion(questionsArr[quizCounter]);
