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

let foods1 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods1[scannedItem];
  // Only change code above this line
}

console.log(checkInventory("apples"));

// =================================================================================
// Используйте ключевое слово delete, чтобы удалить ключи oranges, plums,
// и strawberriesиз foodsобъекта.

let foods2 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

// Only change code below this line
delete foods2.oranges;
delete foods2.plums;
delete foods2.strawberries;
// Only change code above this line

console.log(foods2);

// =================================================================================
// Проверить, есть ли у объекта свойство
// Одни используют hasOwnProperty() метод: users.hasOwnProperty('Alan'); // вернет true.
// а другие использует in ключевое слово: 'Alan' in users; // вернет true.

// Чтобы сравнить два массива надо: убедиться что они одного размера,
// затем убедиться что по всем индексам имеет одинаковые элементы.

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  // Ryan: {
  //   age: 19,
  //   online: true,
  // },
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  const namesForCompare = ["Alan", "Jeff", "Sarah", "Ryan"];
  let result = true;

  namesForCompare.forEach((el) => {
    if (!userObj.hasOwnProperty(el)) {
      result = false;
    }
  });
  return result;
  // Only change code above this line
}

console.log("===> isEveryoneHere =", isEveryoneHere(users));

// =================================================================================
// Iterate Through the Keys of an Object with a for...in Statement
// Мы определили функцию, countOnlineкоторая принимает один аргумент (объект пользователя).
// Используйте оператор for...in в этой функции, чтобы пройти по объекту пользователей,
// переданному в функцию, и вернуть количество пользователей, чье online свойство
// установлено на true.

const usersKeys = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
  Jeffy: {
    online: true,
  },
};

function countOnline(usersObj) {
  // Only change code below this line
  let num = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) num++;
  }
  return num;
  // Only change code above this line
}

console.log("===> количество пользователей =", countOnline(usersKeys));

// =================================================================================
// Generate an Array of All Object Keys with Object.keys()
// Finish writing the getArrayOfUsers function so that it returns an array containing
// all the properties in the object it receives as an argument.

let usersArray = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}

console.log(
  "===> Generate an Array of All Object Keys =",
  getArrayOfUsers(usersArray)
);

// =================================================================================
// Modify an Array Stored in an Object
// Take a look at the object we've provided in the code editor. The user object contains
// three keys. The data key contains five keys, one of which contains an array of friends.
// From this, you can see how flexible objects are as data structures. We've started
// writing a function addFriend. Finish writing it so that it takes a user object
// and adds the name of the friend argument to the array stored in user.data.friends
// and returns that array.

let userModifyArray = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}

console.log(
  "===> Modify an Array Stored in an Object =",
  addFriend(userModifyArray, "Pete")
);
