import './index.css';
import Section from '../components/Section';
import Card from '../components/Card';
import UserInfo from '../components/UserInfo';
import PopUpWithImage from '../components/PopUpWithImage';
import PopUpWithForm from '../components/PopUpWithForm';
import FormValidator from '../components/FormValidator';
import {
  items,
  placesWrap,
  editFormModalWindow,
  cardFormModalWindow,
  openEditFormButton,
  openCardFormButton,
  titleInputValue,
  descriptionInputValue,
  cardSelector,
  defaultFormConfig,
} from '../utils/constants';

const editFormValidator = new FormValidator(defaultFormConfig, editFormModalWindow);
const cardFormValidator = new FormValidator(defaultFormConfig, cardFormModalWindow);
editFormValidator.enableValidation();
cardFormValidator.enableValidation();

const userInfo = new UserInfo('.profile__title', '.profile__description');
const popUpWithImage = new PopUpWithImage('.popup_type_image');

const renderCard = (data, wrap) => {
  const card = new Card(data, cardSelector, () => popUpWithImage.open(data.link, data.name));
  wrap.prepend(card.getView());
};

const cardFormSubmitHandler = (evt) => {
  evt.preventDefault();
  const inputsValue = popUpWithForm.getInputValues();

  renderCard({
    name: inputsValue.name,
    link: inputsValue.link
  }, placesWrap);

  popUpWithForm.close();
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(evt.target.name.value, evt.target.description.value);
  popUpWithEditForm.close();
};

const popUpWithForm = new PopUpWithForm('.popup_type_new-card', cardFormSubmitHandler);
const popUpWithEditForm = new PopUpWithForm('.popup_type_edit', formSubmitHandler);

openCardFormButton.addEventListener('click', () => {
  popUpWithForm.open()
});

openEditFormButton.addEventListener('click', () => {
  titleInputValue.value = userInfo.getUserInfo().title;
  descriptionInputValue.value = userInfo.getUserInfo().description;
  popUpWithEditForm.open();
});

popUpWithImage.setEventListeners();
popUpWithForm.setEventListeners();
popUpWithEditForm.setEventListeners();

const cardsList = new Section({
  items,
  renderer: cardItem => renderCard(cardItem, placesWrap),
},
  cardSelector,
);


cardsList.renderItems();



