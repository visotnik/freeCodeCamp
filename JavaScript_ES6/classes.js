// =================================================================================
// Use class Syntax to Define a Constructor Function

// ES5:
// var SpaceShuttle = function(targetPlanet){
//     this.targetPlanet = targetPlanet;
//   }
//   var zeus = new SpaceShuttle('Jupiter');

// ES6:
// class SpaceShuttle {
//     constructor(targetPlanet) {
//       this.targetPlanet = targetPlanet;
//     }
//   }
//   const zeus = new SpaceShuttle('Jupiter');

// Task:
// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'

// =================================================================================
// Use getters and setters to Control Access to an Object

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book("anonymous");
console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer);

// Task:
// Only change code below this line
class Thermostat {
  constructor(temp) {
    this._temp = temp;
  }
  // getter
  get temperature() {
    return (5 / 9) * (this._temp - 32);
  }
  // setter
  set temperature(updateTemp) {
    this._temp = (updateTemp * 9.0) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
