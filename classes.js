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
