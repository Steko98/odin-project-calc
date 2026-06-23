let firstNum;
let secondNum;
let operator;
let placeholder;
let result;

const numbers = document.querySelectorAll("button.num");
const display = document.getElementById("display");
const ceBtn = document.getElementById("ce");

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
      placeholder = secondNum.toString();
      placeholder += `${num.value}`;
      secondNum = +placeholder;
      display.textContent = `${firstNum} ${operator} ${secondNum}`;
    }
    return;
  });
});

function clearAll() {
  firstNum = null;
  operator = null;
  secondNum = null;
}

ceBtn.addEventListener("click", () => {
  display.textContent = "";
  clearAll();
});

function add(a, b) {
  result = Number(a) + Number(b);
  display.textContent = result;
  return;
}
function subtract(a, b) {
  result = a - b;
  display.textContent = result;
  return;
}
function multiply(a, b) {
  result = a * b;
  display.textContent = result;
  return;
}
function divide(a, b) {
  result = a / b;
  display.textContent = result;
  return;
}

function equals(num1, operator, num2) {
  if (!firstNum || !secondNum) {
    return;
  }
  switch (operator) {
    case "+":
      add(num1, num2);
      // clearAll();
      break;
    case "-":
      subtract(num1, num2);
      // clearAll();
      break;
    case "*":
      multiply(num1, num2);
      // clearAll();
      break;
    case "/":
      divide(num1, num2);
      // clearAll();
      break;
    default:
      break;
  }
}

const equalBtn = document.getElementById("equal");
equalBtn.addEventListener("click", () => {
  equals(firstNum, operator, secondNum);
  clearAll();
});

const operatorBtns = document.querySelectorAll("button.oper");
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
      switch (oper.value) {
        case "+":
          display.textContent += `+`;
          clearAll();
          firstNum = Number(result);
          operator = "+";
          break;
        case "-":
          display.textContent += `-`;
          clearAll();
          firstNum = Number(result);
          operator = "-";
          break;
        case "*":
          display.textContent += `*`;
          clearAll();
          firstNum = Number(result);
          operator = "*";
          break;
        case "/":
          display.textContent += `/`;
          clearAll();
          firstNum = Number(result);
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
