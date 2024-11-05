let age = 70;
let isStudent = false;

let isEligibleForDiscount = age > 65 || isStudent;
console.log(isEligibleForDiscount); // true




let number = 15;

let isInRange = number >= 10 && number <= 20;
console.log(isInRange); // true




let num1 = -5;
let num2 = 10;

let oneIsNegative = (num1 < 0 && num2 >= 0) || (num1 >= 0 && num2 < 0);
console.log(oneIsNegative); // true