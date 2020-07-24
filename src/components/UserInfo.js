export default class UserInfo {
  constructor(nameSelector, infoSelector) {
    this.$elName = document.querySelector(nameSelector);
    this.$elInfo = document.querySelector(infoSelector);
  }

  getUserInfo() {
    const title = document.querySelector('.profile__title').textContent;
    const description = document.querySelector('.profile__description').textContent;
    return { title, description }
  }

  setUserInfo(name, info) {
    document.querySelector('.profile__title').textContent = name;
    document.querySelector('.profile__description').textContent = info;
  }
}
