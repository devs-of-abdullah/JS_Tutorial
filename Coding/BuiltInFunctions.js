const str = "Hello World";

console.log(str.length);
console.log(str[0]);
console.log(str.charAt(1));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.includes("World"));
console.log(str.startsWith("Hello"));
console.log(str.endsWith("World"));

console.log(str.indexOf("o"));
console.log(str.lastIndexOf("o"));

console.log(str.slice(0, 5));
console.log(str.substring(0, 5));

console.log(str.replace("World", "JS"));
console.log(str.replaceAll("o", "0"));

console.log(str.split(" "));
console.log("  hi  ".trim());

const num = 12.3456;

console.log(num.toFixed(2));
console.log(num.toPrecision(4));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

console.log(Math.max(1, 5, 3));
console.log(Math.min(1, 5, 3));

console.log(Math.random());
console.log(Math.trunc(num));
console.log(Math.abs(-10));

console.log(Number("123"));
console.log(Number("abc"));

console.log(parseInt("123px"));
console.log(parseFloat("12.5kg"));

console.log(isNaN("abc"));
console.log(isFinite(10));

console.log((10).toString());
console.log((255).toString(16));

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());

console.log(now.toISOString());
console.log(now.toLocaleDateString());

console.log(Boolean(""));
console.log(Boolean("hi"));
console.log(Boolean(0));
console.log(Boolean(1));

console.log(String(123));
console.log(String(true));

console.log(Array.isArray([]));
console.log(Object.keys({ a: 1, b: 2 }));

console.log(JSON.stringify({ x: 1 }));
console.log(JSON.parse('{"x":1}'));

console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));

console.log("5" + 5);
console.log("5" - 1);
