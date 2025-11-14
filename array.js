let arrayNumber = [1, 2, 3, 4, 5];
let arrayString = ["a", "b", "c", "d", "e"];
let arrayBoolean = [true, false, true, false];
let arrayObject = [
  { name: "John", age: 20 },
  { name: "Jane", age: 21 },
  { name: "Bob", age: 22 },
];

let arrayCustom = [1, "a", true, { name: "John", age: 20 }];

// Array Method
console.log(arrayNumber.length);
console.log(arrayNumber.toLocaleString());
console.log(arrayNumber.toString());
console.log(arrayNumber.join(", "));
console.log(
  arrayObject.map((item) => ({ ...item, phoneNumber: "08123456789" }))
);
arrayString.push("f");
console.log(arrayString);
arrayString.pop();
console.log(arrayString);
arrayString.splice(2, 2);
console.log(arrayString);
