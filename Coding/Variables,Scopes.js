
var v1 = 10;
var v1 = 20;

let l1 = 30;
l1 = 40;

const c1 = 50;

if (true) {
  var v2 = 100;
  let l2 = 200;
  const c2 = 300;
}

console.log(v2);

function scopeTest() {
  var f1 = 1;
  let f2 = 2;
  const f3 = 3;

  if (true) {
    var f4 = 4;
    let f5 = 5;
    const f6 = 6;
  }

  console.log(f1);
  console.log(f2);
  console.log(f3);
  console.log(f4);
}

scopeTest();

let x = 10;

function outer() {
  let x = 20;

  function inner() {
    let x = 30;
    console.log(x);
  }

  inner();
}

outer();

const obj = {
  name: "Ahmet",
  age: 22,
};

obj.age = 23;

const arr = [1, 2, 3];
arr.push(4);

for (let i = 0; i < 3; i++) {
  console.log(i);
}

for (var j = 0; j < 3; j++) {}

console.log(j);

try {
  console.log(tdzVar);
} catch (e) {
  console.log("TDZ error");
}

let tdzVar = 99;

function globalLeak() {
  leaked = 123;
}

globalLeak();
console.log(leaked);

{
  let blockA = "A";
  const blockB = "B";
}

const MAX_LIMIT = 100;

let counter = 0;
counter++;

function sum(a, b) {
  const result = a + b;
  return result;
}

console.log(sum(3, 4));
