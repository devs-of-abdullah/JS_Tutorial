function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function simpleAsync() {
  return "done";
}

simpleAsync().then(console.log);

async function asyncWithAwait() {
  await delay(500);
  console.log("after 500ms");
}

asyncWithAwait();

async function sequential() {
  await delay(300);
  console.log("first");
  await delay(300);
  console.log("second");
}

sequential();

async function parallel() {
  const p1 = delay(300).then(() => "A");
  const p2 = delay(300).then(() => "B");
  const results = await Promise.all([p1, p2]);
  console.log(results);
}

parallel();

async function withTryCatch() {
  try {
    await Promise.reject(new Error("fail"));
  } catch (e) {
    console.log(e.message);
  }
}

withTryCatch();

async function returnValue() {
  return 42;
}

async function useReturn() {
  const v = await returnValue();
  console.log(v);
}

useReturn();

async function loopAsync() {
  for (let i = 0; i < 3; i++) {
    await delay(200);
    console.log(i);
  }
}

loopAsync();

async function conditionalAsync(ok) {
  if (!ok) {
    throw new Error("not ok");
  }
  return "ok";
}

conditionalAsync(true).then(console.log);

conditionalAsync(false).catch((e) => console.log(e.message));

async function chain() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(2);
  console.log(a + b);
}

chain();
