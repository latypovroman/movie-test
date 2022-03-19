export default class Popup {
  constructor(popupElement) {
    this._popup = popupElement;
    this._image = this._popup.querySelector('.popup__image');
  }

  open(link) {
    this._popup.classList.add('popup_opened');
    this._getImage(link);
    this._setCloseListener();
  }

  _close() {
    this._popup.classList.remove('popup_opened');
  }

  _setCloseListener() {
    document.addEventListener('mousedown', (e) => {
      if (!e.target.classList.contains('quiz__image')) {
        this._close();
      }
    })
  }

  _getImage(link) {
    this._image.src = link;
  }
}
