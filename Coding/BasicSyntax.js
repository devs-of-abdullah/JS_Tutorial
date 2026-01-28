"use strict";

let x = 10;
const y = 20;
var z = 30;

let n = 5;
let s = "Hello";
let b = true;
let u;
let m = null;
let arr = [1, 2, 3];
let obj = { name: "Abdullah", age: 22 };

let sum = x + y;
let diff = y - x;
let prod = x * y;
let div = y / x;

let eq1 = x == "10";
let eq2 = x === 10;

let andOp = true && false;
let orOp = true || false;
let notOp = !true;

if (x > 5) {
  x++;
} else {
  x--;
}

for (let i = 0; i < 3; i++) {
  arr[i] = arr[i] * 2;
}

let i = 0;
while (i < 3) {
  i++;
}

function add(a, b) {
  return a + b;
}

const sub = (a, b) => a - b;

let result1 = add(3, 4);
let result2 = sub(10, 5);

arr.push(4);
arr.pop();

obj.city = "Istanbul";
delete obj.age;
console.log(obj);

let t = typeof x;
console.log(t);