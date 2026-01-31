
for (let i = 0; i < 3; i++) {
  console.log("for", i);
}

for (let i = 0, j = 3; i < j; i++, j--) {
  console.log("for-multi", i, j);
}

let a = 0;
for (; a < 3; a++) {
  console.log("for-no-init", a);
}

let b = 0;
for (; ; b++) {
  if (b === 3) break;
  console.log("for-no-cond", b);
}

let c = 0;
for (; c < 3; ) {
  console.log("for-no-update", c);
  c++;
}

let w = 0;
while (w < 3) {
  console.log("while", w);
  w++;
}

let d = 0;
do {
  console.log("do-while", d);
  d++;
} while (d < 3);

let arr = [10, 20, 30];
for (let v of arr) {
  console.log("for-of", v);
}

for (let ch of "ABC") {
  console.log("for-of-str", ch);
}

let obj = { x: 1, y: 2 };
for (let k in obj) {
  console.log("for-in", k, obj[k]);
}

for (let i in arr) {
  console.log("for-in-arr", i, arr[i]);
}

for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log("break", i);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log("continue", i);
}

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    console.log("label-break", i, j);
  }
}

outer2: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) continue outer2;
    console.log("label-continue", i, j);
  }
}

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    console.log("nested", i, j);
  }
}

let inf = 0;
while (true) {
  if (inf === 3) break;
  console.log("infinite", inf);
  inf++;
}

arr.forEach((v, i) => {
  console.log("forEach", i, v);
});

let mapped = arr.map((v) => v * 2);
console.log("map", mapped);

let filtered = arr.filter((v) => v > 15);
console.log("filter", filtered);

let reduced = arr.reduce((acc, v) => acc + v, 0);
console.log("reduce", reduced);


console.log(
  "every",
  arr.every((v) => v > 5),
);

/* SOME */
console.log(
  "some",
  arr.some((v) => v > 25),
);

console.log(
  "find",
  arr.find((v) => v === 20),
);

console.log(
  "findIndex",
  arr.findIndex((v) => v === 20),
);

let it = arr[Symbol.iterator]();
console.log("iter", it.next());
console.log("iter", it.next());
console.log("iter", it.next());
console.log("iter", it.next());

async function asyncLoop() {
  for (let i = 0; i < 3; i++) {
    await new Promise((r) => setTimeout(r, 100));
    console.log("async-for", i);
  }
}
asyncLoop();
