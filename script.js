// Function calling other function
// const calculateAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const jobLeft = function (birthYear) {
//   const age = calculateAge(birthYear);
//   return 65 - age;
// };

// const ajobLeft = jobLeft(1975);
// console.log(ajobLeft);

// Javascript events
// function displayText() {
//   console.log("This is console text.");
// }

// function alertText() {
//   alert("This is alert text.");
// }

// Javascript strings
const firstName = "asif";
const lastName = "akbar";
console.log(firstName);
console.log(lastName);

// example
// const text = 'i love "Bangladesh"';
// console.log(text);
// const text2 = "i love 'Bangladesh'";
// console.log(text2);

// const text3="I love \"Bangladesh!\"";
// const text3 = "I love \\Bangladesh!";
// console.log(text3);

// Strings Method
const X = "Bapi Biswas";
// console.log(X.length);

// // String Slice
// const fruits = "apple, banana, mango";
// console.log(fruits.length);

// const fruit1 = fruits.slice(0, 5);
// console.log(fruit1);
// const fruit2 = fruits.slice(7, 13);
// console.log(fruit2);
// const fruit3 = fruits.slice(15, 20);
// console.log(fruit3);
// const fruit4 = fruits.slice(-5);
// console.log(fruit4);
// const fruit5 = fruits.slice(-13, -7);
// console.log(fruit5);

// substring
const fruits = "apple, banana, mango";
const fruit1 = fruits.substring(0, 5);
console.log(fruit1);

// substr (works like slice)

// String Replace
// const text = "I love Khulna!";
// console.log(text);

// const text2 = text.replace("Khulna", "Rajshahi");
// console.log(text2);

// String to Uppercase
// const text = "Hello World";
// console.log(text);
// console.log(text.toLocaleUpperCase());

// To lower case
// const text = "Hello World";
// console.log(text);
// console.log(text.toLowerCase());

// String Trim
// const text = "    Hello World       ";
// console.log(text);
// console.log(text.trim());

// String Search
const text = "Rahim Karim Sakib Karim";
console.log(text.indexOf("Sakib"));
console.log(text.lastIndexOf("Karim"));

console.log(text.search("Karim"));
