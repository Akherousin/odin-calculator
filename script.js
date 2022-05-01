function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return +a - +b;
}

function multiply(a, b) {
  return +a * +b;
}

function divide(a, b) {
  return +a / +b;
}

function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

//4 step

let displayedValue = "";
let firstValue = "";
let operatorValue = "";
let secondValue = "";

const buttons = document.querySelector(".buttons");
const displayText = document.querySelector(".display-text");
buttons.addEventListener("click", handleDigitClick);

function handleDigitClick(e) {
  const button = e.target;
  if (!button.classList.contains("btn-digit")) return;

  if (operatorValue === "") {
    displayedValue += button.value;
    firstValue = displayedValue;
  } else {
    displayedValue += button.value;
    secondValue = displayedValue;
  }

  displayText.innerText = displayedValue;
}

buttons.addEventListener("click", handleOperatorClick);

function handleOperatorClick(e) {
  const button = e.target;
  if (!button.classList.contains("btn-operator")) return;

  if (operatorValue === "") {
    operatorValue = button.value;
    displayedValue = "";
  } else {
    displayedValue = operate(operatorValue, firstValue, secondValue);
    displayText.innerText = displayedValue;
    operatorValue = button.value;
    firstValue = displayedValue;
    secondValue = "";
    displayedValue = "";
  }
}

buttons.addEventListener("click", handleEqualsClick);

function handleEqualsClick(e) {
  const button = e.target;
  if (!button.classList.contains("btn-equals")) return;

  if (firstValue === "" || secondValue === "") return;

  displayedValue = operate(operatorValue, firstValue, secondValue);
  displayText.innerText = displayedValue;
}

buttons.addEventListener("click", handlePointClick);

function handlePointClick(e) {
  const button = e.target;
  if (!button.classList.contains("btn-point")) return;

  if (displayedValue.includes(".")) return;

  if (displayedValue === "") {
    displayedValue = "0" + button.value;
    displayText.innerText = displayedValue;
  } else {
    displayedValue += button.value;
    displayText.innerText = displayedValue;
  }
}
