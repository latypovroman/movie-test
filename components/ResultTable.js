export default class ResultTable {
  constructor(resultElement) {
    this._resultElement = resultElement;
    this._resultText = resultElement.querySelector('.result__text');
  }

  showResultTable(score, quizLength) {
    this._resultElement.classList.add('result_opened');
    this._getResultText(score, quizLength);
  }

  removeResultTable() {
    this._resultElement.classList.remove('result_opened');
  }

  _getResultText(score, quizLength) {
    this._resultText.textContent = `Викторина пройдена! Вы ответили верно на ${score} из ${quizLength} вопросов!`
  }
}
