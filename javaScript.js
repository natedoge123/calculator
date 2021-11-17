const display = document.querySelector('#display');
const miniDisplay = document.querySelector('#miniDisplay');
const digits = document.querySelector('#numButton');
const operButton = document.querySelector('#operButton');

let number1 = 0;
let number2 = 0;
let answer = 0;
let operation = '';
let operationDisplay = '';
let placeHolder = 0

function addNum (num1, num2) {
  let add = parseInt(num1) + parseInt(num2);
  add = Math.round(add);
  return add;
}

function subtractNum (num1, num2) {
  let subtract = num1 - num2;
  subtract = Math.round(subtract);
  return subtract;
}

function multiNum (num1, num2) {
  let multi = num1 * num2;
  multi = Math.round(multi);
  return multi;
}

function divideNum (num1, num2) {
  let divide = num1 / num2;
  divide = Math.round(divide);
  return divide;
}

function operate (oper, num1, num2) {

  console.log(oper)
  switch(oper){
    case '+': return addNum(num1, num2); break; 
    case '-': return subtractNum(num1, num2); break; 
    case '*': return multiNum(num1, num2); break; 
    case '/': return divideNum(num1, num2); break; 
  }
}

function clearDisplay () {
  display.textContent = '';
  miniDisplay.textContent = '';
}

function clearEverything() {
  number1 = 0;
  number2 = 0;
  answer = 0;
  operation = '';
  clearDisplay();
}

numButton.addEventListener('click', function(event) {
  if (operation == '' && answer == 0 ) {
    display.textContent += event.target.value;
    number1 = display.textContent;

  } else if (operation != '' && answer == 0) {
    display.textContent += event.target.value
    number2 = display.textContent;

  } else if (operation != '' && answer != 0) {
      if ( display.textContent == answer) {
        display.textContent = '';
        number1 = answer;
        answer = 0;
      }
    display.textContent += event.target.value;
    number2 = display.textContent;
    
  }
  
})

operButton.addEventListener('click', function(event) {
  if (event.target.value != '=' && operation == '') {
    miniDisplay.textContent += number1
    operation = event.target.value;
    miniDisplay.textContent += operation;
    display.textContent = '';

  } else if (event.target.value == '=' && operation != '') {
    if (operation == '/' && number2 == 0) {
      display.textContent = 'you cant do that'
    } else {
    answer = operate(operation, number1, number2);
    display.textContent = answer;
    miniDisplay.textContent += number2;
    }

  } else if (event.target.value != '=' && operation != '') {
    if (operation == '/' && number2 ==0) {
      display.textContent = 'you cant do that';
    } else {
    answer = operate(operation, number1, number2);
    operation = event.target.value;
    display.textContent = answer;
    miniDisplay.textContent += number2
    }
  }
})

