// =================================================================================
console.log("+++++++++ Recursion");

let countArray = [];
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    countArray.push(n);
    countdown(n - 1);

    return countArray;
  }
}
console.log("Recursion countdown result =", countdown(10));

// =================================================================================
