const arr = [1, 2, 3, 4, 5];

console.log(arr[0]);
console.log(arr[arr.length - 1]);

arr[1] = 20;
console.log(arr);

arr.push(6);
arr.pop();
arr.unshift(0);
arr.shift();
console.log(arr);

console.log(arr.length);

const arr2 = new Array(10);
console.log(arr2.length);

const arr3 = Array.of(1, 2, 3);
console.log(arr3);

const arr4 = Array.from("ABC");
console.log(arr4);

for (let i = 0; i < arr.length; i++) {
  console.log("for", arr[i]);
}

for (let v of arr) {
  console.log("for-of", v);
}

arr.forEach((v, i) => {
  console.log("forEach", i, v);
});

const mapped = arr.map((v) => v * 2);
console.log(mapped);

const filtered = arr.filter((v) => v % 2 === 0);
console.log(filtered);

const reduced = arr.reduce((acc, v) => acc + v, 0);
console.log(reduced);

console.log(arr.find((v) => v > 3));
console.log(arr.findIndex((v) => v === 3));

console.log(arr.some((v) => v > 4));
console.log(arr.every((v) => v > 0));

console.log(arr.includes(3));
console.log(arr.indexOf(3));
console.log(arr.lastIndexOf(3));

const sliced = arr.slice(1, 3);
console.log(sliced);
console.log(arr);

const spliced = arr.splice(1, 2, 99, 100);
console.log(spliced);
console.log(arr);

const a = [1, 2];
const b = [3, 4];
const merged = a.concat(b);
console.log(merged);

const spreadMerged = [...a, ...b];
console.log(spreadMerged);

const nested = [1, [2, [3, 4]]];
console.log(nested.flat());
console.log(nested.flat(2));

const words = ["hello", "world"];
console.log(words.join(" "));
console.log(words.reverse());

const nums = [3, 1, 4, 2];
nums.sort();
console.log(nums);

nums.sort((x, y) => x - y);
console.log(nums);

const filled = new Array(3).fill(7);
console.log(filled);

const keys = arr.keys();
console.log(keys.next().value);

const values = arr.values();
console.log(values.next().value);

const entries = arr.entries();
console.log(entries.next().value);

const copy = arr;
copy[0] = 999;
console.log(arr[0]);

const shallowCopy = [...arr];
shallowCopy[0] = 1;
console.log(arr[0]);

const deepArr = [{ x: 1 }];
const shallow = [...deepArr];
shallow[0].x = 5;
console.log(deepArr[0].x);

const destruct = [10, 20, 30];
const [x, , z] = destruct;
console.log(x, z);

const restArr = [1, 2, 3, 4];
const [h, ...t] = restArr;
console.log(h, t);

const holes = [1, , 3];
console.log(holes.length);
console.log(holes[1]);
