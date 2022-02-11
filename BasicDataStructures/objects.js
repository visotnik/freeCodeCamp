// =================================================================================
// Добавьте пары ключ-значение в объекты JavaScript

// Создан foodsобъект с тремя записями. Используя выбранный вами синтаксис,
// добавьте к нему еще три записи: bananasсо значением 13, grapesсо значением 35 и
// strawberriesсо значением 27.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Only change code above this line

console.log(foods);

// =================================================================================
// объект userActivity, который включает в себя другой объект, вложенный в него.
// Установите значение onlineключа на 45.

let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);

// =================================================================================
// функцию checkInventory, которая получает отсканированный элемент в качестве аргумента.
// Возвращает текущее значение scannedItemключа в foodsобъекте. Вы можете предположить,
// что в качестве аргумента для checkInventory.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem];
  // Only change code above this line
}

console.log(checkInventory("apples"));

// =================================================================================
// Используйте ключевое слово delete, чтобы удалить ключи oranges, plums,
// и strawberriesиз foodsобъекта.

let foods1 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

// Only change code below this line
delete foods1.oranges;
delete foods1.plums;
delete foods1.strawberries;
// Only change code above this line

console.log(foods1);
