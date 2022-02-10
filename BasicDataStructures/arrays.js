// =================================================================================
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/use-an-array-to-store-a-collection-of-data
// Используйте массив для хранения набора данных
// Complete the statement by assigning an array of at least 5 elements in length to the yourArray variable.
// Your array should contain at least one string, one number, and one boolean.

let yourArray = ["string", 5, true, { name: "Alexa", age: 2 }, [1, 2]]; // Change this line

// =================================================================================
// Access an Array's Contents Using Bracket Notation
// let ourArray = ["a", "b", "c"];
// let ourVariable = ourArray[0]; // a

// We can assign value to array: ourArray[1] = "not b anymore";

// In order to complete this challenge,set the 2nd position (index 1) of myArray
// to anything you want, besides the letter b.

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "e";
// Only change code above this line
console.log(myArray);

// =================================================================================
// Add Items to an Array with push() and unshift()

// We have defined a function, mixedNumbers, which we are passing an array as an argument.
// Modify the function by using push() and unshift() to add 'I', 2, 'three'
// to the beginning of the array and 7, 'VIII', 9 to the end
// so that the returned array contains representations of the numbers 1-9 in order.

function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);

  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));

// =================================================================================
// Remove Items from an Array with pop() and shift()
// We have defined a function, popShift, which takes an array as an argument and
// returns a new array. Modify the function, using pop() and shift(),
// to remove the first and last elements of the argument array,
// and assign the removed elements to their corresponding variables,
// so that the returned array contains their values.

function popShift(arrPopShift) {
  let popped = arrPopShift.pop(); // Change this line
  let shifted = arrPopShift.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));

// =================================================================================
// Remove Items Using splice()

// Мы инициализировали массив arr. Используйте splice() для удаления элементов из arr,
// чтобы он содержал только элементы, сумма которых равна значению 10.

const arrSplice = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arrSplice.splice(1, 4);
// Only change code above this line
console.log(arrSplice);

// =================================================================================
// Добавить элементы с помощью splice()
// splice() может принимать до трех параметров.
// третий параметр, состоящий из одного или нескольких элементов, для добавления в массив

// Мы определили функцию htmlColorNames, которая принимает массив цветов HTML
// в качестве аргумента. Измените функцию, используя splice() для удаления первых двух
// элементов массива и добавления 'DarkSalmon'и 'BlanchedAlmond'
// в их соответствующие места.

function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // Only change code above this line
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

// =================================================================================
// Копировать элементы массива с помощью slice()
// slice(index_start, index2_end)

// Мы определили функцию forecast, которая принимает массив в качестве аргумента.
// Измените функцию, используя slice() для извлечения информации из массива аргументов
// и возврата нового массива, содержащего строковые элементы warmи sunny.

function forecast(arr) {
  // Only change code below this line
  arr = arr.slice(2, 4);
  return arr;
}

// Only change code above this line
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

// =================================================================================
// Скопируйте массив с помощью оператора Spread

// Мы определили функцию, copyMachine которая принимает аргументы arr(массив) и num(число).
// Предполагается, что функция возвращает новый массив, состоящий из
// num копий файлов arr. Мы сделали большую часть работы за вас,
// но она пока не работает должным образом. Измените функцию, используя синтаксис
// расширения, чтобы она работала правильно (подсказка: здесь может пригодиться
// другой метод, который мы уже рассмотрели!).

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

// =================================================================================
// Объединение массивов с помощью оператора Spread
// Мы определили функцию spreadOut, которая возвращает переменную sentence.
// Измените функцию с помощью оператора распространения так, чтобы она возвращала
// массив ['learning', 'to', 'code', 'is', 'fun'].

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
  return sentence;
}

console.log(spreadOut());

// =================================================================================
// Проверить наличие элемента с помощью indexOf()
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-for-the-presence-of-an-element-with-indexof
// indexOf() может быть невероятно полезным для быстрой проверки наличия элемента в массиве.
// Мы определили функцию quickCheck, которая принимает массив и элемент в качестве аргументов.
// Измените функцию с помощью indexOf() так, чтобы она возвращала true значение,
// если переданный элемент существует в массиве, и falseесли его нет.

function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) != -1) {
    return true;
  }
  return false;

  // Only change code above this line
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

// =================================================================================
// Итерация по всем элементам массива с использованием циклов for

// Мы определили функцию filteredArray, которая принимает arr вложенный массив и elem
// в качестве аргументов и возвращает новый массив. elem представляет элемент,
// который может присутствовать или отсутствовать в одном или нескольких массивах,
// вложенных в arr. Измените функцию, используя for цикл, чтобы она возвращала
// отфильтрованную версию переданного массива таким образом, чтобы любой массив,
// вложенный в arr содержащий elem, был удален.

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  // let elemDel =[]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

// =================================================================================
// Создание сложных многомерных массивов (nested Arrays)
// Мы определили переменную, myNestedArrayприравняв ее к массиву. Измените myNestedArray,
// используя любую комбинацию строк, чисел и логических значений для элементов данных,
// чтобы он имел ровно пять уровней глубины (помните, что самый внешний массив — это
// уровень 1). Где-то на третьем уровне включите строку deep,
// на четвертом уровне включите строку deeper
// и на пятом уровне включите строку deepest.

let myNestedArray = [
  // Only change code below this line
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]],
  // Only change code above this line
];
