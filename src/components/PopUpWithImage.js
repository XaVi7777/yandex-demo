import Popup from './PopUp';

export default class PopUpWithImage extends Popup {
  constructor(selector){
    super(selector);
  }

  open(url, description) {
    super.open();
    document.querySelector('.popup__image').setAttribute('src', url);
    document.querySelector('.popup__image').setAttribute('alt', `Изображение ${description}`);
    document.querySelector('.popup__caption').innerText = description;
  }
}
