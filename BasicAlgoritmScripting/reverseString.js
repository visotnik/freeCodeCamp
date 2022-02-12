// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
  //   let strArr = [...str];
  let revArr = [];

  //   for (let i = strArr.length - 1; i >= 0; i--) {
  //     revArr.push(strArr[i]);
  //   }

  revArr = [...str]
    .reverse()
    .map((el) => el)
    .join("");

  return revArr; // str;
}

console.log("======> reverse String =", reverseString("hello"));
