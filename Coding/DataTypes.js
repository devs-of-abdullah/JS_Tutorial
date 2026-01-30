console.clear();

let num = 10;
let str = "10";
let bool = true;
let und;
let nul = null;
let big = 10n;
let sym = Symbol("id");

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof und);
console.log(typeof nul);
console.log(typeof big);
console.log(typeof sym);

let p1 = 5;
let p2 = p1;
p2 = 9;
console.log(p1);

let r1 = { x: 1 };
let r2 = r1;
r2.x = 7;
console.log(r1.x);

let arr = [1, 2];
let obj = { a: 1 };
let fn = function () {};
let date = new Date();

console.log(arr instanceof Array);
console.log(obj instanceof Object);
console.log(fn instanceof Function);
console.log(date instanceof Date);

console.log(Number(str));
console.log(String(num));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(parseInt("123"));
console.log(parseFloat("3.14"));

console.log(num + str);
console.log(num - str);
console.log(num * str);

console.log(num == str);
console.log(num === str);

console.log(Boolean(""));
console.log(Boolean("hi"));
console.log(Boolean([]));
console.log(Boolean({}));

let copyArr = arr;
copyArr.push(3);
console.log(arr.length);

let realCopy = [...arr];
realCopy.push(4);
console.log(arr.length);

console.log(Object.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(nul));
console.log(Object.prototype.toString.call(und));

console.log("done");
