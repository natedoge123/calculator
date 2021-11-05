const display = document.querySelector('#display');
const miniDisplay = document.querySelector('miniDisplay');
const digits = document.querySelector('#numButton');
const operButton = document.querySelector('#operButton');

let number1 = null;
let number2 = null;
let answer = null;
let operation = null;

function addNum (num1, num2) {
  let add = num1 + num2;
  return add;
}

function subtractNum (num1, num2) {
  let subtract = num1 - num2;
  return subtract;
}

function multiNum (num1, num2) {
  let multi = num1 * num2;
  return multi;
}

function divideNum (num1, num2) {
  let divide = num1 / num2;
  return divide;
}

function operate (oper, num1, num2) {
  switch(op){
   case 'add': return addNum(num1, num2); break; 
   case 'subtract': return subtractNum(num1, num2); break; 
   case 'mulitply': return multiNum(num1, num2); break; 
   case 'divide': return divideNum(num1, num2); break; 
  }
}

function clearDisplay () {
  display.textContent = '';
  miniDisplay.textContent = '';
}

function clearEverything() {
  number1 = null;
  number2 = null;
  answer = null;
  operation = null;
  clearDisplay();
}

numButton.addEventListener('click', function(event) {
  display.textContent += event.target.value;
  number1 = display.textContent
})

operButton.addEventListener('click', function(event) {
  if (event.target.value != '=') {
    operButton.textContent = event.target.value;
    number1 = number2;
    minidisplay.textContent = number2 + operButton;
    display.textContent = '';
  }
})


