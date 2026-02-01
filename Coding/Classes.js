class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "Hello " + this.name;
  }
}

const p1 = new Person("Ahmet", 22);
console.log(p1.name);
console.log(p1.age);
console.log(p1.greet());

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  study() {
    return this.name + " studies " + this.major;
  }
}

const s1 = new Student("Ahmet", 22, "Software Engineering");
console.log(s1.greet());
console.log(s1.study());

class Counter {
  #count = 0;

  increment() {
    this.#count++;
    return this.#count;
  }

  decrement() {
    this.#count--;
    return this.#count;
  }
}

const c = new Counter();
console.log(c.increment());
console.log(c.increment());
console.log(c.decrement());

class MathUtil {
  static add(a, b) {
    return a + b;
  }

  static sub(a, b) {
    return a - b;
  }
}

console.log(MathUtil.add(2, 3));
console.log(MathUtil.sub(5, 2));

class User {
  constructor(email) {
    this._email = email;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    if (!value.includes("@")) return;
    this._email = value;
  }
}

const u = new User("a@b.com");
console.log(u.email);
u.email = "invalid";
console.log(u.email);
u.email = "new@b.com";
console.log(u.email);

class Animal {
  speak() {
    return "sound";
  }
}

class Dog extends Animal {
  speak() {
    return "bark";
  }
}

const a = new Animal();
const d = new Dog();
console.log(a.speak());
console.log(d.speak());

const obj = {
  x: 10,
  getX() {
    return this.x;
  },
};

console.log(obj.getX());

const bound = obj.getX.bind({ x: 99 });
console.log(bound());

class Box {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }

  get area() {
    return this.w * this.h;
  }
}

const box = new Box(5, 4);
console.log(box.area);

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.id = Math.random();
  }
}

const sA = new Singleton();
const sB = new Singleton();
console.log(sA === sB);
