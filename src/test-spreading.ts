let someArray: string[] = new Array(150000);
let newArray: string[] = [];
let tempArray:string[] = [];

someArray.fill("foo");

// Push
try {
  newArray.push(...someArray);
  console.log("Push: ", newArray.length);
} catch (e) {
  console.log("Using spread operator:", e);
}

// Concat
/*try {
  const tempArray = newArray.concat(someArray);
  console.log("Concat:", tempArray.length);
} catch (e) {
  console.log("Using concat function:", e);
}*/
