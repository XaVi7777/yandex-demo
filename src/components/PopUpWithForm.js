import PopUp from './PopUp';

export default class PopUpWithForm extends PopUp {
  constructor(selector, formSubmit) {
    super(selector);
    this._$el = document.querySelector(selector);
    this._formSubmit = formSubmit;
  }

  getInputValues() {

      this._inputList = this._$el.querySelectorAll('.popup__input');

      this._formValues = {};

      this._inputList.forEach(input => {
        this._formValues[input.name] = input.value;
      });

      return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._$el.querySelector('.popup__form').addEventListener('submit', this._formSubmit);
  }

  close() {
    super.close();
    this._$el.querySelector('.popup__form').reset();
  }
}
