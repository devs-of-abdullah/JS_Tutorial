function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

const sub = function (a, b) {
  return a - b;
};
console.log(sub(5, 2));

const mul = (a, b) => a * b;
console.log(mul(3, 4));

const div = (a, b) => {
  if (b === 0) return null;
  return a / b;
};
console.log(div(10, 2));

function greet(name = "Guest") {
  return "Hello " + name;
}
console.log(greet());
console.log(greet("Abdullah"));

function sum(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total;
}
console.log(sum(1, 2, 3, 4));

const nums = [2, 3];
console.log(add(...nums));

function check(n) {
  if (n < 0) return "negative";
  return "positive";
}
console.log(check(-1));
console.log(check(5));

function scopeTest() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
}
scopeTest();

function outer() {
  let x = 1;
  function inner() {
    let y = 2;
    console.log(x + y);
  }
  inner();
}
outer();

function counter() {
  let c = 0;
  return function () {
    c++;
    return c;
  };
}
const count = counter();
console.log(count());
console.log(count());
console.log(count());

(function () {
  console.log("IIFE");
})();

function process(value, cb) {
  return cb(value);
}
console.log(process(5, (v) => v * 2));

function multiplier(factor) {
  return function (n) {
    return n * factor;
  };
}
const double = multiplier(2);
console.log(double(5));

const obj1 = {
  x: 10,
  getX: function () {
    return this.x;
  },
};
console.log(obj1.getX());

const obj2 = {
  x: 20,
  getX: () => this.x,
};
console.log(obj2.getX());

function show(a, b) {
  return this.v + a + b;
}
const ctx = { v: 5 };
console.log(show.call(ctx, 1, 2));
console.log(show.apply(ctx, [1, 2]));
const bound = show.bind(ctx, 2, 3);
console.log(bound());

function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
}
console.log(fact(5));

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

async function asyncAdd(a, b) {
  return a + b;
}
asyncAdd(3, 4).then(console.log);

function mustBePositive(n) {
  if (n <= 0) throw new Error("Invalid");
  return n;
}
try {
  console.log(mustBePositive(3));
  console.log(mustBePositive(-1));
} catch (e) {
  console.log(e.message);
}
