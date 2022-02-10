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

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));
