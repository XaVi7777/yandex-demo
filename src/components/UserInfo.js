export default class UserInfo {
  constructor(nameSelector, infoSelector) {
    this.$elName = document.querySelector(nameSelector);
    this.$elInfo = document.querySelector(infoSelector);
  }

  /*Нужно исправить: селекторы ".profile__title" и ".profile__description" используются в файлах UserInfo.js и index.js. 
    С целью "чистоты кода" данные селекторы можно вынести в файл constants.js, и затем использовать их в разных частях проекта.
    
    Также здесь производится поиск одного и того же DOM-элемента дважды (document.querySelector('.profile__title')), однако данные 
    элементы уже записаны в свойства в конструторе (this.$elName, this.$elInfo). Именно их дальше и нужно использовать в методах класса.*/
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
