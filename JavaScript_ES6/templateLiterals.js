// =================================================================================
// Используйте литеральный синтаксис шаблона с обратными кавычками
// для создания массива строк элемента списка

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Only change code below this line
  let failureItems = [];
  failureItems = arr.map((el) => {
    return `<li class="text-warning">${el}</li>`;
  });
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

console.log("===> Create an array of list with literal syntax =", failuresList);

// =================================================================================
// ES6 добавляет хорошую поддержку для простого определения литералов объектов.
// ES5:
// const getMousePosition = (x, y) => ({
//   x: x,
//   y: y
// });
//
// ES6:
// const getMousePosition = (x, y) => ({ x, y });

// Task
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return { name, age, gender }; // {name: name, age: age, gender: gender}
  // Only change code above this line
};
