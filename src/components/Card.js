export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._text = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    /* Можно лучше: можно не создавать эту переменную в памяти, а возвращать значение сразу в return. */
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like-button')
      .addEventListener('click', () => this._handleLikeIcon());

    this._element.querySelector('.card__delete-button')
      .addEventListener('click', () => this._handleDeleteCard());

    this._element.querySelector('.card__image')
      .addEventListener('click', () => this._handleCardClick());
  }

  _handleLikeIcon() {
    this._element.querySelector('.card__like-button').
      classList.toggle('card__like-button_is-active');
  }

  _handleDeleteCard() {
    this._element.remove();

    this._element = null;
  }

  getView() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__image').style.backgroundImage = `url(${this._link})`;
    this._element.querySelector('.card__title').textContent = this._text;

    return this._element;
  }
}


