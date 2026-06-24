//Variables and DOM elements:

let firstNum;
let secondNum;
let operator;
let placeholder;
let result;

const numbers = document.querySelectorAll("button.num");
const display = document.getElementById("display");
const ceBtn = document.getElementById("ce");
const equalBtn = document.getElementById("equal");
const operatorBtns = document.querySelectorAll("button.oper");

//number buttons functionality:
//1. checks if the first number (firstNum) is within the limits, if it isn't - the buttons do nothing
//2. if firstNum doesn't exist; is sets it to the number button value; updates the display to show the firstNum
//3. if firstNum does exists, but the operator isn't set, it adds the number button value as the next digit of the firstNum; updates the display to show the firstNum
//4. if the both firstNum and the operator are set, but the secondNum doesn't exist, sets to first digit of the secondNum to the number button value; updates the display to show the firstNum, operator and the second num
//5. if secondNum already exists, number button sets the nest digit of the secondNum (if the secondNum is within limits); updates the display to show the firstNum, operator and the secondNum

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    if (firstNum >= Number.MAX_SAFE_INTEGER) {
      return;
    }
    if (!firstNum) {
      firstNum = num.value;
      display.textContent = firstNum;
    } else if (firstNum && !operator) {
      placeholder = firstNum.toString();
      placeholder += `${num.value}`;
      firstNum = +placeholder;
      display.textContent = firstNum;
    } else if (operator && !secondNum) {
      secondNum = num.value;
      display.textContent = `${firstNum} ${operator} ${secondNum}`;
    } else {
      if (secondNum >= Number.MAX_SAFE_INTEGER) {
        return;
      }
      placeholder = secondNum.toString();
      placeholder += `${num.value}`;
      secondNum = +placeholder;
      display.textContent = `${firstNum} ${operator} ${secondNum}`;
    }
    return;
  });
});

//CE button functionality:
//1. function clearAll() resets every variable to null
//2. clearAll() is set as an event for the CE button; also resets the display

function clearAll() {
  firstNum = null;
  operator = null;
  secondNum = null;
  placeholder = null;
  result = null;
}

ceBtn.addEventListener("click", () => {
  display.textContent = "";
  clearAll();
});

//Math functions:
//1.Simple add, subtract, multiply and divide functions
//2. each returns a result variable containing the result of the operation
//3. rounds the result to 4 decimals

function add(a, b) {
  result = Number(a) + Number(b);
  return;
}
function subtract(a, b) {
  result = a - b;
  return;
}
function multiply(a, b) {
  result = (a * b).toFixed(4);
  return;
}
function divide(a, b) {
  result = (a / b).toFixed(4);
  return;
}

//Equality function:
//1. takes the firstNum, operator, secondNum
//2. if any of two numbers doesn't exist, it does nothing
//3. if both numbers are present, it activates the math function based on the operator with a switch statement

function equals(num1, operator, num2) {
  if (!firstNum || !secondNum) {
    return;
  }
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
    default:
      break;
  }
}

//Equals button
//1. calls the equality function
//2. sets the result value to the display
//3. gives firstNum the result value to allow further operations
//4. clears all variables but the firstNum


equalBtn.addEventListener("click", () => {
  equals(firstNum, operator, secondNum);
  display.textContent = result;
  firstNum = Number(result);
  secondNum = null;
  operator = null;
  result = null;
  placeholder = null;
});

//Operator buttons (+,-,*,/)
//1. adds functionality to each operator button
//2. checks if the firstNum exists, if not, the operator buttons do nothing (exception for the - operator needs to be added to allow input of negative numbers)
//3. if the secondNum doesn't exists, set the operator button value to operator variable; add the operator to the display; allows overwriting the operator variable
//4. if the secondNum exists, the operator buttons call the equals() function (which based on the operator calls a math function)
//5. gives firstNum the result value to allow further operations, clears all other variables and and sets the operator variable to the operator button value
//6. shows the result on display and adds the operator to it

operatorBtns.forEach((oper) => {
  oper.addEventListener("click", () => {
    if (!firstNum) {
      return;
    } else if (!secondNum) {
      operator = oper.value;
      display.textContent = `${firstNum} ${oper.value}`;
      return;
    } else {
      equals(firstNum, operator, secondNum);
      display.textContent = result;
      firstNum = Number(result);
      secondNum = null;
      result = null;
      placeholder = null;
      switch (oper.value) {
        case "+":
          display.textContent += `+`;
          operator = "+";
          break;
        case "-":
          display.textContent += `-`;
          operator = "-";
          break;
        case "*":
          display.textContent += `*`;
          operator = "*";
          break;
        case "/":
          display.textContent += `/`;
          operator = "/";
          break;
        default:
          break;
      }
    }
  });
});

//C briše second num, operator pa first num, ili ako po jedan char.

//točka ., ako već ima broj stavlja decimalu, može samo jednu po varijabli (first ili secondNum)
// ako firstNum ne postoji, ne rade nista, osim minusa koja ce firstNum pretvorit u negativan
