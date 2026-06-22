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
      console.log(firstNum);
    } else if (firstNum && !operator) {
      placeholder = firstNum.toString();
      placeholder += `${num.value}`;
      firstNum = +placeholder;
      display.textContent = firstNum;
      console.log(firstNum);
    } else if (operator && !secondNum) {
      secondNum = num.value;
      display.textContent = `${firstNum} + ${operator} + ${secondNum}`;
    } else {
      placeholder = secondNum.toString();
      placeholder += `${num.value}`;
      secondNum = +placeholder;
      display.textContent = `${firstNum} + ${operator} + ${secondNum}`;
    }
    return;
  });
});

function clearAll() {
  firstNum = null;
  operator = null;
  secondNum = null;
  display.textContent = "";
}

ceBtn.addEventListener("click", () => {
  clearAll();
});

// tipka broj - if (!firstNum) {
//     first nume je button value
// }, ako first num ima onda druga znamenka broja
// , ako ima i firstNum i operator onda ide u second num.

// funkcija evaluate - uzima first num secondNum i operator i vraca vrijednost

// CE briše sve
//C briše second num, operator pa first num, ili ako po jedan char.

//točka ., ako već ima broj stavlja decimalu, može samo jednu po varijabli (first ili secondNum)

// operatori - ako već postoji operator i dva broja, onda riješava operaciju i dodaje operator na rezultat, ako ne postoji onda samo postavalja operator
// ako firstNum ne postoji, ne rade niđta, osim minusa koja ce firstNum pretvorit u negativan

// = riješava operaciju
