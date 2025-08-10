for (var i= 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  });
}

Promise.resolve().then(() => {
  console.log('Promise resolved!');
});

setTimeout(() => {
  console.log('Timeout completed!');
});

queueMicrotask(() => {
  console.log('Microtask completed!');
});


console.log('Done!');




























/*
|--------------------------|
|        Call Stack        |
|--------------------------|
|                          |
|    Main Thread           |
|                          |
|                          |
|--------------------------|
|   Microtask Queue        |
|--------------------------|
|   - Promise.then()       |
|   - queueMicrotask()     |
|                          |
|--------------------------|
|   Macrotask Queue        |
|--------------------------|
|   - setTimeout()         |
|   - setInterval()        |
|   - I/O Operations       |
|   - User Input Events    |
|--------------------------|
*/
