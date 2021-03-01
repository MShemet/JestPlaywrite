const { generateText, createElement, validateInput } = require('./util');

const initApp = () => {
  const newUserButton = document.querySelector('#btnAddUser');

  newUserButton.addEventListener('click', addUser);
};

const addUser = () => {
  const newUserNameInput = document.querySelector('input#name');
  const newUserAgeInput = document.querySelector('input#age');

  const userName = newUserNameInput.value;
  const userAge = newUserAgeInput.value;

  const isNameValid = validateInput(userName, true, false);
  const isAgeValid = validateInput(userAge, true, false);

  if (!isNameValid || !isAgeValid) {
    return;
  }

  const userList = document.querySelector('.user-list');
  const outputText = generateText(userName, userAge);
  const element = createElement('li', outputText, 'user-item');

  userList.appendChild(element);
};

initApp();
