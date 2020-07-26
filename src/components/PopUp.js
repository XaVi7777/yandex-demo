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
      /*Надо исправить:
      На данный момент модальное окно закрывается только при нажатии на крестик или Esc. 
      Согласно требованиям нужно еще реализовать закрытиие окна при клике по оверлею. */
      if (evt.target.classList.contains('popup__close')) {
        this.close();
      }
    });

      /*Надо исправить:
        Слушатель событий, закрывающий модальное окно по нажатию на `Esc` добавляется при 
        открытии модального окна и удаляется при его закрытии.
        Если слушатель вешается на `document`, то он должен вешаться только при открытии модального окна.*/
    document.addEventListener('keyup', (evt) => {
      if (this._$el.classList.contains('popup_is-opened')) {
        this._handleEscClose(evt)
      }
    })
  }
}
