"use-strict";

const display = document.getElementById("display");

const comma = document.getElementById("num--comma");

const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

const numbers = [
  document.getElementById("num--0"),
  document.getElementById("num--1"),
  document.getElementById("num--2"),
  document.getElementById("num--3"),
  document.getElementById("num--4"),
  document.getElementById("num--5"),
  document.getElementById("num--6"),
  document.getElementById("num--7"),
  document.getElementById("num--8"),
  document.getElementById("num--9"),
  comma,
];

const operators = {
  add: document.getElementById("op--add"),
  subtract: document.getElementById("op--subtract"),
  multiply: document.getElementById("op--multiply"),
  divide: document.getElementById("op--divide"),
};

// Declaracion de variables
let num1 = "";
let num2 = "";
let operatorIncl = "";
let hasOperator = false;
let result = 0;

// Funcion para poner todo a su valor por defecto
function setToDefault() {
  num1 = "";
  num2 = "";
  operatorIncl = "";
  hasOperator = false;
  result = 0;
}

// Evento para mostrar los numeros en el display
for (const number of numbers) {
  number.addEventListener("click", function () {
    if (display.textContent === String(result)) {
      display.textContent = "";
      setToDefault();
    }

    display.textContent === "0" ? (display.textContent = "") : null;

    hasOperator === false
      ? (num1 += number.dataset.value)
      : (num2 += number.dataset.value);

    display.textContent += number.dataset.value;
  });
}

// Evento para mostrar los operadores en el display
for (const operator in operators) {
  operators[operator].addEventListener("click", function () {
    if (display.textContent === String(result)) {
      display.textContent = `${result} ${operators[operator].dataset.value} `;
      num1 = result;
      num2 = "";
      hasOperator = true;
      operatorIncl = operator;
      return;
    }

    operatorIncl = operator;

    if (hasOperator !== true) {
      hasOperator = true;

      switch (operator) {
        case "add":
          display.textContent += " + ";
          break;
        case "subtract":
          display.textContent += " - ";
          break;
        case "multiply":
          display.textContent += " * ";
          break;
        case "divide":
          display.textContent += " / ";
          break;
      }
    } else {
      switch (operatorIncl) {
        case "add":
          display.textContent = `${num1} + `;
          num2 = "";
          break;
        case "subtract":
          display.textContent = `${num1} - `;
          num2 = "";
          break;
        case "multiply":
          display.textContent = `${num1} * `;
          num2 = "";
          break;
        case "divide":
          display.textContent = `${num1} / `;
          num2 = "";
          break;
      }
    }
  });
}

// Resetear la calculadora
clear.addEventListener("click", function () {
  display.textContent = "0";
  setToDefault();
});

// Evento para mostrar el resultado
equal.addEventListener("click", function () {
  switch (operatorIncl) {
    case "add":
      result = Number(num1) + Number(num2);
      display.textContent = result.toFixed(6);
      break;
    case "subtract":
      result = Number(num1) - Number(num2);
      display.textContent = result.toFixed(6);
      break;
    case "multiply":
      result = Number(num1) * Number(num2);
      display.textContent = result.toFixed(6);
      break;
    case "divide":
      result = Number(num1) / Number(num2);
      display.textContent = result.toFixed(6);
      break;
  }
});
