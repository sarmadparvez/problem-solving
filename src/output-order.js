for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    });
}
Promise.resolve().then(function () {
    console.log('Promise resolved!');
});
setTimeout(function () {
    console.log('Timeout completed!');
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
