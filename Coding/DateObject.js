const now = new Date();

console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

console.log(now.getTime());

const d1 = new Date(2024, 0, 1);
console.log(d1);

const d2 = new Date("2024-01-01");
console.log(d2);

now.setFullYear(2030);
now.setMonth(5);
now.setDate(15);
console.log(now);

now.setHours(10);
now.setMinutes(30);
now.setSeconds(45);
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());

console.log(now.toISOString());
console.log(now.toUTCString());

console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());

const start = new Date("2024-01-01");
const end = new Date("2024-01-10");

const diffMs = end - start;
const diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log(diffDays);

const timestamp = Date.now();
console.log(timestamp);

const fromTimestamp = new Date(timestamp);
console.log(fromTimestamp);

console.log(Date.parse("2024-12-31"));

const isDate = now instanceof Date;
console.log(isDate);
