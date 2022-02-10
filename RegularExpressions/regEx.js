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

// =================================================================================
// параметр, который соответствует символам, встречающимся ноль или более раз.
// Символ для этого — звездочка или звездочка: *.

// Only change code below this line
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result12 = chewieQuote.match(chewieRegex); // Aaaaaaaaaaaaaaaa

// =================================================================================
// Find Characters with Lazy Matching
// выражение /t[a-z]*i/к строке "titanic" возвращает ["titani"]
// Если же использовать ? символ, выражение /t[a-z]*?i/ возвращает ["ti"].
// подстановочный знак . в регулярном выражении соответствует любому символу

let text13 = "<h1>Winter is coming</h1>";
let myRegex13 = /<.*?>/; // Change this line
let result13 = text13.match(myRegex13);

// =================================================================================
// находим любое количество букв "C" в строке
let reCriminals131 = /C+/; // Change this line
// находим любое количество букв "C"или "c" (в любом регистре) в строке
let reCriminals132 = /C+/i; // Change this line

// =================================================================================
// Поиск с начала строки - ^
// НЕ путать с [^] - внутри набора ^ - обозначает отрицание
let rickyAndCal14 = "Cal and Ricky both like racing.";
let calRegex14 = /^Cal/; // Change this line
let result14 = calRegex14.test(rickyAndCal14);

// =================================================================================
// Поиск (совпадение) с шаблонами конечных строк $
// искать конец строки, используя символ доллара $ в конце регулярного выражения.

let caboose15 = "The last car on a train is the caboose";
let lastRegex15 = /caboose$/; // Change this line
let result15 = lastRegex15.test(caboose15);

// =================================================================================
// Сопоставьте все буквы и цифры
// [A-Za-z0-9_] - это \w - найдет одну букву/цифру/_
// /[A-Za-z0-9_]+/ - это /\w+/ - найдет все буквы/цифры/_ до пробела
// /\w/g - найдет все буквы/цифры/_ в строке

let quoteSample16 = "The five boxing wizards jump quickly.";
let alphabetRegexV216 = /\w/g; // Change this line
let result16 = quoteSample16.match(alphabetRegexV216).length;
console.log(
  "===> Count all letters = ",
  result16,
  "arr=",
  quoteSample16.match(alphabetRegexV216)
);

// =================================================================================
// Сопоставьте все кроме букв/цифр/_
// /[^A-Za-z0-9_]/ соответствует /\W/ ищет до первого несовпадения
// /[^A-Za-z0-9_]/g соответствует /\W/g - ищет все несовпадения в строке
// /[^A-Za-z0-9_]+/g соответствует /\W+/g - ищет первое несовпадение с любым ко-вом символов
let quoteSample17 = "The .! five boxing wizards jump quickly.";
let nonAlphabetRegex17 = /\W/g; // Change this line
let result17 = quoteSample17.match(nonAlphabetRegex17).length;

console.log(
  "===> Count all without letters = ",
  result17,
  "arr=",
  quoteSample17.match(nonAlphabetRegex17)
);

// =================================================================================
// поиск цифровых символов — \d (ищет один символ любого числа от нуля до девяти)
// /[0-9]/ соответствует /\d/
let movieName18 = "2001: A Space Odyssey";
let numRegex18 = /\d/g; // Change this line
let result18 = movieName18.match(numRegex18).length; // 4

// =================================================================================
// поиск не цифровых символов — \D (ищет один символ любого не числа)
// /[^0-9]/ соответствует /\D/
let movieName19 = "2001: A Space Odyssey";
let noNumRegex19 = /\D/g; // Change this line
let result19 = movieName19.match(noNumRegex19).length;

// =================================================================================
// проверить все имена пользователей в базе данных
// 1. Имена пользователей могут использовать только буквенно-цифровые символы.
// 2. Единственные цифры в имени пользователя должны быть в конце. В конце их может
//    быть ноль или больше. Имя пользователя не может начинаться с цифры.
// 3. Буквы имени пользователя могут быть строчными и прописными.
// 4. Имя пользователя должно быть не менее двух символов. Двухсимвольное имя пользователя
//    может использовать только буквы алфавита в качестве символов.
let username20 = "Ja1TyuF9888"; // JackOfAllTrades007
let userCheck20 = /^[a-zA-Z][a-zA-Z]+[0-9]*$|^[a-zA-Z]\d\d+$/; // Change this line /^[a-zA-Z][a-zA-Z]+[0-9]$/g
let result20 = userCheck20.test(username20);

console.log(
  "===> Check user name =",
  result20,
  "string =",
  username20.match(userCheck20)
);

// /^[a-zA-Z][a-zA-Z]+[0-9]*$/
// ^[a-zA-Z] - начало строки с буквы
// [a-zA-Z]+ - вторая только буква и после 2-й буквы любое количество букв
// [0-9]*$ - в конце могут быть только цифры (любое количество)
// | - или
// ^[a-zA-Z] - начало строки с 1-й буквы
// \d\d+$ - минимум 2 цифры в конце строки

// /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i
// ^ - start of input
// [a-z] - first character is a letter
// [0-9]{2,0} - ends with two or more numbers
// | - or
// [a-z]+ - has one or more letters next
// \d* - and ends with zero or more numbers
// $ - end of input
// i - ignore case of input

// =================================================================================
// можно сопоставлять пробелы или пробелы между буквами.
// Искать пробелы \s в т.ч. возврата каретки (\r), табуляции (\t),
// перевода страницы (\f) и новой строки (\n), вертикальная табуляция (\v).
// т.е. \s - это пробелы и [ \r\t\f\n\v]

let sample21 = "Whitespace is important in separating words";
let countWhiteSpace21 = /\s/g; // Change this line
let result21 = sample21.match(countWhiteSpace21);

// =================================================================================
// искать все, кроме пробелов
// \S соответствует [^ \r\t\f\n\v]
let sample22 = "Whitespace is important in separating words";
let countNonWhiteSpace22 = /\S/g; // Change this line
let result22 = sample22.match(countNonWhiteSpace22);

// =================================================================================
//  указать min и max количество вхождений паттерна с помощью спецификаторов {min, max}
// /a{3,5}h/ - здесь "a" должно встретитья от 3 до 5 раз перед буквой "h"

let ohStr23 = "Ohhh no";
let ohRegex23 = /Oh{3,6}\sno/; // Change this line
let result23 = ohRegex23.test(ohStr23);

// =================================================================================
// Укажите только минимальное количество совпадений {min, }
// /ha{3,}h/ - буква "a" должна встретится в шаблоне минимум 3 раза подряд
let haStr24 = "Hazzzzah";
let haRegex24 = /Haz{4,}ah/; // Change this line
let result24 = haRegex24.test(haStr24);

// =================================================================================
// Указать можно точное количество вхождений {3}
let timStr25 = "Timmmmber";
let timRegex25 = /Tim{4}ber/; // Change this line
let result25 = timRegex25.test(timStr25);

// =================================================================================
// Проверить шаблон, который может существовать или не существовать [шаблон]? / символ?
let favWord26 = "favorite";
let favRegex26 = /favou?rite/; // Change this line
let result26 = favRegex26.test(favWord26);

// Lookaheads — это шаблоны, которые сообщают, что нужно смотреть вперед в вашей строке
// просматривает всю строку
// Положительный просмотр вперед (?=...) - т.е. должно соответствовать ...
// Отрицательный просмотр вперед (?!...) - т.е. должно отсутствовать
// "abc123" /(?=\w{3,6})(?=\D*\d)/ - вначале проверка строки будет на (?=\w{3,6}),
// потом на єту же строку проверят на (?=\D*\d), и если оба шаблона верні, тогда true

let sampleWord27 = "astronaut";
let pwRegex27 = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result27 = pwRegex27.test(sampleWord27);

// =================================================================================
// Проверьте наличие смешанной группировки символов (...)
// найти Penguinили Pumpkinв строке /P(engu|umpk)in/

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

// =================================================================================
// Повторное использование шаблонов с помощью групп захвата
// Найти /row row row/, но что, если вы не знаете повторяющееся конкретное слово?
// Группы захвата можно использовать для поиска повторяющихся подстрок.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/reuse-patterns-using-capture-groups
// /(\w+) \1 \1/ - соответствует слову, которое встречается трижды через пробел
// .match()метода для строки вернет массив с совпадающей подстрокой вместе с ее захваченными группами.

// выражение должно совпадать со строкой 42 42 42, но не должно с 42 42 42 42
// /(\d+)\s\1\s\1/ - любое совпадение в строке, например 42 42 42 42
// /^(\d+)\s\1\s\1$/ - тут определяем начало строки и ее конец.
// /s - можно заменить пробелом
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
