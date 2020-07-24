import { ESC_KEYCODE } from '../utils/constants';


export default class PopUp {
  constructor(selector) {
    this._$el = document.querySelector(selector);
  }

  open() {
    this._$el.classList.add('popup_is-opened');
  }

  close() {
    this._$el.classList.remove('popup_is-opened');
  }

  _handleEscClose(evt) {
    if (evt.which === ESC_KEYCODE) {
      this.close();
    }
  }

  setEventListeners() {

    this._$el.addEventListener('click', (evt) => {

      if (evt.target.classList.contains('popup__close')) {
        this.close();
      }
    });

    document.addEventListener('keyup', (evt) => {
      if (this._$el.classList.contains('popup_is-opened')) {
        this._handleEscClose(evt)
      }
    })
  }
}
