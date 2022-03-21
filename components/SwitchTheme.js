export default class SwitchTheme {
  constructor(templateId) {
    this._templateId = templateId;
    this._template = this._getTemplate();
    this._input = this._template.querySelector('.theme-switch__input');
  }

  _getTemplate() {
    return document.querySelector(this._templateId).content.querySelector('.theme-switch').cloneNode(true);
  }

  _toggleTheme(page, quiz) {
    page.classList.toggle('page_dark');
    quiz.classList.toggle('quiz_dark');
  }

  generate(page, quiz) {page
    this._input.addEventListener('change', ()=>{
      this._toggleTheme(page, quiz);
    })
    return this._template;
  }
}
