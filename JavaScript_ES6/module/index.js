// =================================================================================
// Reuse JavaScript Code Using import
// import / export

import { uppercaseString, lowercaseString } from "./string_functions.js";
import * as myMathModule from "./math_functions.js";
// import subtract from "./math_functions.js" // import/export default
// Only change code above this line

const uppercaseStringResult = uppercaseString("hello");
const lowercaseStringResult = lowercaseString("WORLD!");

const sumResult = myMathModule.add(45, 55);

console.log("===> import * as myMathModule =", sumResult);

console.log("===> Reuse JavaScript Code Using import =", uppercaseStringResult);
console.log("===> Reuse JavaScript Code Using import =", lowercaseStringResult);
