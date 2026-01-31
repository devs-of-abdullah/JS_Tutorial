
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

a++;
b--;

let x = 5;
x += 2;
x -= 1;
x *= 3;
x /= 2;
x %= 2;
x **= 3;

/* COMPARISON */
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");
console.log(10 > 5);
console.log(10 >= 10);
console.log(5 < 10);
console.log(5 <= 5);

console.log(true && false);
console.log(true || false);
console.log(!true);

let sc = null;
console.log(sc || "fallback");
console.log(sc && "never");

console.log(5 & 1);
console.log(5 | 1);
console.log(5 ^ 1);
console.log(~5);
console.log(5 << 1);
console.log(5 >> 1);

let s1 = "Hello";
let s2 = "World";
console.log(s1 + " " + s2);
console.log(`${s1} ${s2}`);

console.log(typeof 123);
console.log(typeof "abc");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

console.log([] instanceof Array);
console.log({} instanceof Object);

let age = 17;
let status = age >= 18 ? "adult" : "child";
console.log(status);

let n1 = null;
let n2 = 0;
console.log(n1 ?? "default");
console.log(n2 ?? "default");

let user = {
  profile: {
    email: "a@b.com",
  },
};

console.log(user.profile?.email);
console.log(user.address?.city);

let u = 5;
console.log(+u);
console.log(-u);
console.log(++u);
console.log(--u);

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2);

function sum(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total;
}
console.log(sum(1, 2, 3));

let c = (1, 2, 3);
console.log(c);

let p = 2 + 3 * 4 ** 2;
console.log(p);

/* DELETE */
let delObj = { x: 1, y: 2 };
delete delObj.x;
console.log(delObj);

console.log("y" in delObj);
console.log("x" in delObj);


console.log(null == undefined);
console.log(null === undefined);
console.log(NaN == NaN);
console.log(Object.is(NaN, NaN));
