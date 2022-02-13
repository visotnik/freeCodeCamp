// Факториализировать число

function findLongestWordLength(str) {
  const strArr = str.split(" ");
  let length = 0;
  strArr.forEach((el) => {
    if (el.length > length) length = el.length;
  });

  return length; // str.length;
}

console.log(
  "===> find longest word in the string =",
  findLongestWordLength("The quick brownering fox jumped over the lazy dog")
);
