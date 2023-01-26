let arr = [];

let arrOne = ["Masha", "Tolia", "Fifa"];
console.log(arrOne[1]);

let arrTwo = [
   "Sasha",
   {
      type: "JS",
      age: 36,
   },
   true,
   function () {
      console.log("Hello, my name is Serhii");
   },
];
console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);
console.log(arrTwo[2]);
arrTwo[3]();

let matrix = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
];
console.log(matrix);
console.log(matrix[0][1]);
