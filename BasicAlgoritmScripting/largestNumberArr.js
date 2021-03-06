// Возврат наибольших чисел в массивах
// Возвращает массив, состоящий из наибольшего числа из каждого предоставленного подмассива.
// Для простоты предоставленный массив будет содержать ровно 4 подмассива.

// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
// должен вернуться [27, 5, 39, 1001].

// largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])
// должен вернуться [25, 48, 21, -3].

function largestOfFour(arr) {
  return arr.map((el) => {
    // variant 1
    return Math.max(...el);
    // variant 2
    // largestNum = el[0];
    // el.forEach((num) => {
    //   if (num > largestNum) largestNum = num;
    // });
    // return largestNum;
  });
}

console.log(
  "===> largest Of Four =",
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);
