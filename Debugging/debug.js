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

let result_getNine = getNine();
console.log(result_getNine);

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

// =================================================================================
// Отлавливайте по одной ошибки при использовании индексации
// Off by one errors (sometimes called OBOE)
// Индексация в JavaScript начинается с нуля, поэтому,
// последний индекс всегда на единицу меньше длины элемента.

// Исправьте две ошибки индексации в следующей функции,
// чтобы все числа от 1 до 5 выводились на консоль.
// function countToFive() {
//     let firstFive = "12345";
//     let len = firstFive.length;
//     // Only change code below this line
//     for (let i = 1; i <= len; i++) {
//     // Only change code above this line
//       console.log(firstFive[i]);
//     }
//   }
//   countToFive();

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
    // or i <= i - 1
    // Only change code above this line
    console.log(`countToFive ${i} =`, firstFive[i]);
  }
}
console.log("--------------");
countToFive();

// =================================================================================
// Будьте осторожны при повторной инициализации переменных внутри цикла

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  // неправильная позиция для инициализации внутреннего массива
  // массив не обнуляется при итерации внутреннего массива
  // let row = []; // необходимо перенести в цикл ниже
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    let row = []; // правильное место для инициализации нулегого массива
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

// =================================================================================
// Функция myFunc()содержит бесконечный цикл, потому что терминальное условие i != 4
// никогда не будет false (и прерывать цикл) — i будет увеличиваться на 2 при каждом проходе
// и перескакивать сразу через 4, поскольку i нечетно для начала.
// Исправьте оператор сравнения в терминальном условии, чтобы цикл выполнялся только для i
// значений меньше или равных 4.
// function myFunc() {
//   for (let i = 1; i != 4; i += 2) {
//     console.log("Still going!");
//   }
// }

function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
