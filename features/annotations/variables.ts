const apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = true;

const nothingMuch: null = null;
const nothing: undefined = undefined;

// built in objects
const now: Date = new Date();

// Arrays
const colors: string[] = ['red', 'blue'];
const myNumbers: number[] = [1, 2, 3];
const truths: boolean[] = [true, false, true];

// Class
class Car {}
const car: Car = new Car();

// Object literal
const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = i => console.log(i);

// When to use annotations
// 1. Function that returns the 'any' type
const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // {x: 10, y: 20}

// 2. When we declare a variable on one line and initialize it later
const words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true;
}

// 3. Variables whose type cannot be inferred correctly
const numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) numberAboveZero = numbers[i];
}
