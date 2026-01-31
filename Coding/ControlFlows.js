let score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else {
  console.log("C");
}

let day = 3;

switch (day) {
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
  case 3:
    console.log("Wed");
    break;
  default:
    console.log("Unknown");
}

for (let i = 0; i < 3; i++) {
  console.log("for", i);
}

let w = 0;
while (w < 3) {
  console.log("while", w);
  w++;
}

let d = 0;
do {
  console.log("do", d);
  d++;
} while (d < 3);

let arr = [10, 20, 30];
for (let v of arr) {
  console.log("of", v);
}

let obj = { a: 1, b: 2 };
for (let k in obj) {
  console.log("in", k, obj[k]);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) break;
  console.log("break", i);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log("continue", i);
}

/* LABELED BREAK */
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    console.log("label", i, j);
  }
}

function testReturn(x) {
  if (x < 0) return "negative";
  return "positive";
}
console.log(testReturn(5));
console.log(testReturn(-1));

try {
  JSON.parse("{ bad json }");
} catch (e) {
  console.log("caught error");
} finally {
  console.log("finally runs");
}

function checkAge(age) {
  if (age < 18) {
    throw new Error("Too young");
  }
  return "Allowed";
}

try {
  console.log(checkAge(20));
  console.log(checkAge(15));
} catch (e) {
  console.log(e.message);
}

let loggedIn = false;
loggedIn && console.log("User logged in");
loggedIn || console.log("Guest");

let values = [0, 1, "", "hi", null, undefined, [], {}];
for (let v of values) {
  if (v) {
    console.log("truthy", v);
  } else {
    console.log("falsy", v);
  }
}

let user = null;

if (user?.profile?.email) {
  console.log("email exists");
} else {
  console.log("no email");
}

let n = 0;
while (true) {
  if (n === 3) break;
  console.log("infinite", n);
  n++;
}
