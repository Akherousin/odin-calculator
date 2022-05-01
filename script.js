function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
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

let storedValue = "";

const buttons = document.querySelector(".buttons");
const displayText = document.querySelector(".display-text");
buttons.addEventListener("click", handleDigitClick);

function handleDigitClick(e) {
  const button = e.target;
  if (!button.classList.contains("btn-digit")) return;
  storedValue += button.value;

  displayText.innerText = storedValue;
}
