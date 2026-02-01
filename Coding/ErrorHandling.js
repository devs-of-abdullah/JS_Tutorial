function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Inputs must be numbers");
  }
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch (e) {
  console.log(e.message);
}

function getUserName(user) {
  if (!user || typeof user !== "object") {
    return "Guest";
  }
  return user.name || "Guest";
}

console.log(getUserName({ name: "Ahmet" }));
console.log(getUserName(null));

function parseJsonSafe(str) {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

console.log(parseJsonSafe('{"a":1}'));
console.log(parseJsonSafe("{bad json"));

function withdraw(balance, amount) {
  if (balance == null || amount == null) return balance;
  if (amount <= 0) return balance;
  if (amount > balance) return balance;
  return balance - amount;
}

console.log(withdraw(100, 30));
console.log(withdraw(100, 200));

function saveEmail(email) {
  if (typeof email !== "string") {
    throw new TypeError("Email must be string");
  }
  if (!email.includes("@")) {
    throw new Error("Invalid email");
  }
  return true;
}

try {
  console.log(saveEmail("a@b.com"));
  console.log(saveEmail("invalid"));
} catch (e) {
  console.log(e.message);
}

function safeAccess(obj) {
  return obj?.profile?.email ?? "no-email";
}

console.log(safeAccess({ profile: { email: "a@b.com" } }));
console.log(safeAccess({}));

function retry(fn, times) {
  let lastError;
  for (let i = 0; i < times; i++) {
    try {
      return fn();
    } catch (e) {
      lastError = e;
    }
  }
  throw lastError;
}

let attempt = 0;
try {
  retry(() => {
    attempt++;
    if (attempt < 3) throw new Error("fail");
    return "success";
  }, 5);
  console.log("success");
} catch (e) {
  console.log(e.message);
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

try {
  assert(5 > 10, "Assertion failed");
} catch (e) {
  console.log(e.message);
}

function sum(a = 0, b = 0) {
  if (Number.isNaN(a) || Number.isNaN(b)) return 0;
  return a + b;
}

console.log(sum(2, 3));
console.log(sum(NaN, 3));
