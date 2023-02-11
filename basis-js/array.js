let arr = [];

let arrOne = ["Masha", "Tolia", "Fifa"];
console.log(arrOne[1]);

let arrNew = arrOne;
arrNew.length = 2;
console.log(arrNew);

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

arr = ["Masha", "Tolia", "Fifa"];
arr.push("Jackson");
console.log(arr);

arr.shift();
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift("Sasha", "Juli");
console.log(arr);

// Пошук в масиві
// indexOf - повернає індекс елементу якщо знайде, інакше -1
let arrThree = ["Sasha", "Juli", "Tolia", "Fifa"];
console.log(arrThree.indexOf("Tolia"));
console.log(arrThree.indexOf("Julia"));

// includes - повертає true якщо елемент присутній, інакше false
console.log(arrThree.includes("Tolia"));
console.log(arrThree.includes("Julia"));

// Якщо масив складається з об'єктів:

let arrFour = [
   { name: "Tolia", age: 32 },
   { name: "Sasha", age: 18 },
   { name: "Juli", age: "No age" },
];

// find - повертає перший попавший елемент масиву(об'єкт) який підходить умові
// item - елемент масиву, index - ключ в елементі(об'єкті), array - весь масив

// let resultFourOne = arrFour.find(function (item, index, array) {
//    return item.age === 18;
// });
let resultFourOne = arrFour.find((item) => item.age === 18);
console.log(resultFourOne);

// findIndex - виконує те ж саме що і find, тільки повертає індекс елементу
let resultFourTwo = arrFour.findIndex((item) => item.age === 18);
console.log(resultFourTwo);

let arrFive = [
   { name: "Tolia", age: 32 },
   { name: "Sasha", age: 18 },
   { name: "Juli", age: "No age" },
   { name: "Fifa", age: 12 },
   { name: "Max", age: 24 },
];

// filter - виконує те ж саме що і find тільки не зупиняється коли умова виконується, і повертає масив елементів які задовільняють умову

// let resultFiveOne = arrFive.filter(function (item, index, array) {
//    return item.age >= 18;
// });
let resultFiveOne = arrFive.filter((item) => item.age >= 18);
console.log(resultFiveOne);

// Методи сортування масиву
// Метод sort(fn) - сортує масив на місці, міняючи порядок його елементів
// Сортування слів
let arrSix = ["Tolia", "Sasha", "Juli", "Fifa", "Max"];
console.log(arrSix.sort());

// Сортування чисел
let arrSixOne = [54, 13, 34, 74, 3];
console.log(arrSixOne.sort());

// Функція правильного сортування
function compareNumeric(a, b) {
   // if (a > b) return 1;
   // if (a == b) return 0;
   // if (a < b) return -1;

   return a - b;
}
// В круглих скобках можна вказати функцію по якій буде відбуватися сортування
console.log(arrSixOne.sort(compareNumeric));
// Більш простіший варіант стрілочної функції
console.log(arrSixOne.sort((a, b) => a - b));
