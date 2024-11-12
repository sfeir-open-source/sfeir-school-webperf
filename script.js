Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => {
    console.log(2);
  });
});

setTimeout(() => {
  console.log(3);
}, 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
