const snakeNames = require('snake-names');

let randomName = snakeNames.random();
let maleNames = snakeNames.male;
let femaleNames = snakeNames.female;
let fiveNames = snakeNames.random(5);
let allNames = snakeNames.all;

console.log('This is a random snake name:', randomName);
console.log('These are all the male snake names:', maleNames);
console.log('These are all the female snake name:', femaleNames);
console.log('These are 5 random snake names:', fiveNames);
console.log('These are all the snake names:', allNames);
