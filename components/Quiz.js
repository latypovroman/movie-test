export default class Quiz {
  constructor(quizElement) {
    this._questionElement = quizElement.querySelector('.quiz__question');
    this._imageElement = quizElement.querySelector('.quiz__image');
    this._inputs = quizElement.querySelectorAll('.quiz__option');
    this._labelA = quizElement.querySelector('.quiz__option-text_a');
    this._labelB = quizElement.querySelector('.quiz__option-text_b');
    this._labelC = quizElement.querySelector('.quiz__option-text_c');
    this._labelD = quizElement.querySelector('.quiz__option-text_d');
  }

  getQuestion({question, image, options}) {
    this._questionElement.textContent = question;
    this._imageElement.src = image;
    this._labelA.textContent = options.a;
    this._labelB.textContent = options.b;
    this._labelC.textContent = options.c;
    this._labelD.textContent = options.d;
    this._refreshRadio();
  }

  _refreshRadio() {
    this._inputs.forEach((input) => {
      input.checked = false
    })
  }

  checkAnswer({changeScore}) {
    this._inputs.forEach((input) => {
      if (input.checked) {
        changeScore(input.id);
      }
    })
  }
}
