// Regular Expressions
// Using the Test Method

// =================================================================================
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
console.log("===> Regular Expressions, result=", result);

// =================================================================================
// Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result1 = waldoRegex.test(waldoIsHiding);
console.log("===> Match Literal Strings, result=", result1);

// =================================================================================
// Match a Literal String with Different Possibilities.
// You can search for multiple patterns using the alternation or OR operator: |.
// if you wanted to match the strings yes or no, the regex you want is /yes|no/.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result2 = petRegex.test(petString);

console.log(
  "===> Match a Literal String with Different Possibilities=",
  result2
);

// =================================================================================
// Ignore Case While Matching // Игнорировать регистр при сопоставлении
// You can match both cases using what is called a flag /i
let myString2 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result3 = fccRegex.test(myString2);

// =================================================================================
// Извлечь совпадения
// Можно извлечь совпадения с помощью .match() метода.
// .match синтаксис является «противоположным» .test методу
// 'string'.match(/regex/);
// /regex/.test('string');

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result4 = extractStr.match(codingRegex); // Change this line

// =================================================================================
// Найдите больше, чем первое совпадение
// Чтобы искать или извлекать по шаблону все совпадения нужно использовать /g флаг.
// Можно ставить несколько флагов в регулярном выражении, например /search/gi

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result5 = twinkleStar.match(starRegex); // Change this line

// =================================================================================
// Сопоставьте что угодно с точкой подстановки
// Подстановочный знак . будет соответствовать любому одному символу.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result6 = unRegex.test(exampleStr);

// =================================================================================
// Классы символов позволяют определить группу символов,
// которые нужно найти, поместив их в квадратные ( [ и ]) скобки.
// Task 1:
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/; // it isnt contain "o"
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex); // false

// Task 2:
let quoteSample7 =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex7 = /[aeiou]/gi; // Change this line
let result7 = quoteSample7.match(vowelRegex7); // Change this line

// =================================================================================
// Совпадение букв алфавита по диапазону [ от - до ]
// to match lowercase letters a through e you would use [a-e].

let quoteSample8 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex8 = /[a-z]/gi; // Change this line
let result8 = quoteSample8.match(alphabetRegex8); // Change this line

// =================================================================================
// Match Numbers and Letters of the Alphabet
// /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
// We can combine a range of letters and numbers in a single character set: /[a-z0-9]/ig

let quoteSample9 = "Blueberry 3.141592653s are delicious.";
let myRegex9 = /[h-s2-6]/gi; // Change this line
let result9 = quoteSample9.match(myRegex9); // Change this line

// =================================================================================
// Create a negated character set with ^
let quoteSample10 = "3 blind mice.";
let myRegex10 = /[^aeiou0-9]/gi; // Change this line
let result10 = quoteSample10.match(myRegex10); // Change this line
console.log("===> Create a negated character set=", result10);

// =================================================================================
// найти символы, которые встречаются один или несколько раз +
let difficultSpelling11 = "Mississippi";
let myRegex11 = /s+/gi; // Change this line
let result11 = difficultSpelling11.match(myRegex11);
