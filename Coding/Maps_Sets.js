const map = new Map();

map.set("name", "Ahmet");
map.set("age", 22);

console.log(map.get("name"));
console.log(map.get("age"));
console.log(map.has("age"));
console.log(map.size);

map.delete("age");
console.log(map.size);

for (const [k, v] of map) {
  console.log(k, v);
}

const map2 = new Map([
  ["a", 1],
  ["b", 2],
]);

console.log(map2.get("a"));

const set = new Set();

set.add(1);
set.add(2);
set.add(2);
set.add(3);

console.log(set.has(2));
console.log(set.size);

set.delete(1);

for (const v of set) {
  console.log(v);
}

const arr = [1, 2, 2, 3, 3];
const unique = new Set(arr);
console.log([...unique]);

const nums = new Set();
nums.add(10);
nums.add(20);

const sum = [...nums].reduce((a, b) => a + b, 0);
console.log(sum);

const mapFromObj = new Map(Object.entries({ x: 10, y: 20 }));
console.log(mapFromObj.get("x"));

const objFromMap = Object.fromEntries(map2);
console.log(objFromMap);

const setToArr = Array.from(set);
console.log(setToArr);
