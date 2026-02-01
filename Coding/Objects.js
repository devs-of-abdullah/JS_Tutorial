const obj = {
  name: "Abdullah",
  age: 22,
  skills: ["JS", "C#", "SQL"],
  active: true,
};

console.log(obj.name);
console.log(obj["age"]);

obj.city = "Istanbul";
obj["country"] = "Syria";

delete obj.active;

const key = "skills";
console.log(obj[key]);

const user = {
  id: 1,
  profile: {
    email: "aa@gmail.com",
    address: {
      city: "Istanbul",
    },
  },
};

console.log(user.profile.email);
console.log(user.profile.address.city);

const a = { x: 1 };
const b = a;
b.x = 99;
console.log(a.x);

const c = { x: 1 };
const d = { x: 1 };
console.log(c === d);

const e = Object.assign({}, c);
e.x = 5;
console.log(c.x);
console.log(e.x);

const f = { ...c };
f.x = 7;
console.log(c.x);
console.log(f.x);

for (let k in obj) {
  console.log(k, obj[k]);
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const o1 = { a: 1, b: 2 };
const o2 = { b: 3, c: 4 };
const merged = { ...o1, ...o2 };
console.log(merged);

const frozen = Object.freeze({ x: 1 });
frozen.x = 10;
console.log(frozen.x);

const sealed = Object.seal({ y: 2 });
sealed.y = 5;
delete sealed.y;
console.log(sealed);

const obj2 = {
  x: 10,
  getX() {
    return this.x;
  },
};
console.log(obj2.getX());

const obj3 = {
  x: 20,
  getX: () => this.x,
};
console.log(obj3.getX());

const base = { a: 1 };
const child = Object.create(base);
child.b = 2;
console.log(child.a);
console.log(child.b);

console.log("name" in obj);
console.log(obj.hasOwnProperty("age"));

const entries = Object.entries(obj);
for (const [k, v] of entries) {
  console.log(k, v);
}

const json = JSON.stringify(obj);
console.log(json);
const parsed = JSON.parse(json);
console.log(parsed);

const dynKey = "level";
const dynObj = {
  [dynKey]: 3,
};
console.log(dynObj);

const obj4 = {
  a: 1,
  b: 2,
  c: 3,
};
const { a: va, c: vc } = obj4;
console.log(va, vc);
