// Подтвердить окончание
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

// Проверьте, strзаканчивается ли строка (первый аргумент, )
// заданной целевой строкой (второй аргумент, target).

// Эту задачу можно решить с помощью .endsWith()метода

// confirmEnding("Congratulation", "on")должен вернуться true.
// confirmEnding("Connor", "n")должен вернуться false.
// confirmEnding("Open sesame", "same")должен вернуться true.

function confirmEnding(str, target) {
  const targetLength = target.length;
  const endString = [...str].splice(-targetLength, targetLength).join("");
  // (endString === target) ? return true : return false
  if (endString === target) {
    return true;
  } else {
    return false;
  }
}

console.log(
  "======> Confirm the Ending of string =",
  confirmEnding("Open sesamew", "same")
);
