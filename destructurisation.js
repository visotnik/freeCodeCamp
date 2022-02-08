// =================================================================================
// Use Destructuring Assignment to Assign Variables from Nested Objects

// Replace the two assignments with an equivalent destructuring assignment.
// It should still assign the variables lowToday and highToday
// the values of today.low and today.high from the LOCAL_FORECAST object.

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Only change code below this line

// const lowToday = LOCAL_FORECAST.today.low;
const {
  today: { low: lowToday },
} = LOCAL_FORECAST;
// const highToday = LOCAL_FORECAST.today.high;
const {
  today: { high: highToday },
} = LOCAL_FORECAST;

// Only change code above this line

console.log(
  "===> Destructuring Assignment of object: ",
  " lowToday=",
  lowToday,
  "highToday=",
  highToday
);

// =================================================================================
//Используйте деструктурирование, чтобы поменять местами значения a и b местами
let a = 8,
  b = 6;
// Only change code below this line
[b, a] = [a, b];

console.log("===> swap the values of a=8 and b=6", "a=", a, " b=", b);

// =================================================================================
// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
console.log("+++++++++ Destructuring Assignment with the Rest Parameter");

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  // Only change code below this line
  // const arr = list; // Change this line
  const [, , ...arr] = list;
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log("===> Destructuring Assignment. Start at 3 position =", arr);

// =================================================================================
// Use destructuring assignment within the argument to the function half to send
// only max and min inside the function.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line

console.log("===> Destructuring Assignment max=", max, ", min=", min);
