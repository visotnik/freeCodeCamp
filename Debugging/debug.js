// =================================================================================
// Используйте консоль JavaScript для проверки значения переменной
// Метод console.log()

let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a);

let sumAB = a + b;
console.log(sumAB);

// =================================================================================
// Use console.log / warn / error / clear for debugging
let output =
  "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

// =================================================================================
// Use typeof() to check the data structure
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);

// =================================================================================
// Исправьте две орфографические ошибки в коде,
// чтобы netWorkingCapitalвычисления работали.

// let receivables = 10;
// let payables = 8;
// let netWorkingCapital = recievables - payable;
// console.log(`Net working capital is: ${netWorkingCapital}`);

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

// =================================================================================
// Исправить незакрытые круглые скобки, квадратные скобки, фигурные скобки и кавычки

// let myArray = [1, 2, 3;
//     let arraySum = myArray.reduce((previous, current =>  previous + current);
//     console.log(`Sum of array values is: ${arraySum}`);

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

// =================================================================================
// Улавливайте смешанное использование одинарных и двойных кавычек
// Исправьте строку, чтобы она либо использовала другие кавычки для hrefзначения,
// либо экранировала существующие. Держите двойные кавычки вокруг всей строки.
// let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
// console.log(innerHtml);
let innerHtml = '<p>Click here to <a href="#Home">return home</a></p>';
console.log(innerHtml);

// =================================================================================
// Отловить использование оператора присваивания вместо оператора равенства
//
// Исправьте условие, чтобы программа выполняла правильную ветвь,
// а соответствующее значение было присвоено result.

// let x = 7;
// let y = 9;
// let result = "to come";
// if(x = y) {
//   result = "Equal!";
// } else {
//   result = "Not equal!";
// }
// console.log(result);

let x = 7;
let y = 9;
let result = "to come";

if (x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

// =================================================================================
// Поймать пропущенные открытые и закрывающие скобки после вызова функции
// Исправьте код, чтобы для переменной resultбыло установлено значение,
// возвращаемое при вызове функции getNine.

// function getNine() {
//     let x = 6;
//     let y = 3;
//     return x + y;
//   }

//   let result = getNine;
//   console.log(result);

function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);

// =================================================================================
// Перехват аргументов, переданных в неправильном порядке при вызове функции
// Функция raiseToPowerвозводит основание в степень. К сожалению,он не вызывается
// должным образом - исправьте код, чтобы значение powerбыло ожидаемым 8.
// function raiseToPower(b, e) {
//     return Math.pow(b, e);
//   }

//   let base = 2;
//   let exp = 3;
//   let power = raiseToPower(exp, base);
//   console.log(power);

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
