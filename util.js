const generateText = (name, age) => {
  // Returns output text
  return `${name} (${age} years old)`;
};

const createElement = (type, text, className) => {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

const validateInput = (text, notEmpty, isNumber) => {
  // Validate user input with two pre-defined rules
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};

const checkAndGenerate = (name, age) => {
  const isNameValid = validateInput(name, true, false);
  const isAgeValid = validateInput(age, false, true);

  if (!isNameValid || !isAgeValid) {
    return false;
  }
  return generateText(name, age);
};

module.exports = {
  generateText,
  createElement,
  validateInput,
  checkAndGenerate,
};
