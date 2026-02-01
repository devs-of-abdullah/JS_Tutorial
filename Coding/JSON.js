const obj = {
  name: "Ahmet",
  age: 22,
  active: true,
  skills: ["JS", "C#", "SQL"],
  address: {
    city: "Istanbul",
    zip: 34083,
  },
};

const jsonStr = JSON.stringify(obj);
console.log(jsonStr);

const jsonPretty = JSON.stringify(obj, null, 2);
console.log(jsonPretty);

const parsedObj = JSON.parse(jsonStr);
console.log(parsedObj.name);
console.log(parsedObj.skills[0]);
console.log(parsedObj.address.city);

const jsonArray = JSON.stringify([1, 2, 3]);
console.log(jsonArray);

const parsedArray = JSON.parse(jsonArray);
console.log(parsedArray[1]);

const filtered = JSON.stringify(obj, ["name", "age"]);
console.log(filtered);

const custom = JSON.stringify(obj, (key, value) => {
  if (key === "age") return undefined;
  return value;
});
console.log(custom);

const invalidJson = '{"name":"Ahmet",}';
try {
  JSON.parse(invalidJson);
} catch (e) {
  console.log("Invalid JSON");
}

const fromServer = '{"id":1,"email":"abdullah@a.com"}';
const user = JSON.parse(fromServer);
console.log(user.email);

const sendToServer = {
  ok: true,
  count: 3,
};
const payload = JSON.stringify(sendToServer);
console.log(payload);

const jsonDate = JSON.stringify({ date: new Date() });
console.log(jsonDate);

const revived = JSON.parse(jsonDate, (k, v) => {
  if (k === "date") return new Date(v);
  return v;
});
console.log(revived.date instanceof Date);
