// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);  // 1

// Array methods

// myArr.push(6) 
// console.log(myArr); // [0,1,2,3,4,5,6]
// myArr.push(7)   
// console.log(myArr); // [0,1,2,3,4,5,6,7]
// myArr.pop()  
// console.log(myArr);  // [0,1,2,3,4,5,6]

// myArr.unshift(9)
// console.log(myArr);  // [9,0,1,2,3,4,5]
// myArr.shift() 
// console.log(myArr);  // [0,1,2,3,4,5,6]

// console.log(myArr.includes(9));  //false
// console.log(myArr.indexOf(3)); // 3

// const newArr = myArr.join()

// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
// console.log( newArr); //0,1, 2,3,4,5


// slice, splice

// console.log("A ", myArr);  // A  [ 0, 1, 2, 3, 4, 5 ]

// const myn1 = myArr.slice(1, 3) // ending index not includes

// console.log(myn1); // [ 1, 2 ]
// console.log("B ", myArr);


// console.log(myArr);   [ 0, 1, 2, 3, 4, 5 ]
// const myn2 = myArr.splice(1, 3) // ending index is included and change in original array
// console.log("C ", myArr);  //C  [ 0, 4, 5 ]
// console.log(myn2); //[ 1, 2, 3 ]


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // it add one array with another array [
//   'thor',
//   'Ironman',
//   'spiderman',
//   [ 'superman', 'flash', 'batman' ],
//   'superman',
//   'flash',
//   'batman'
// ]

// console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); //flash'

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array); // [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]



console.log(Array.isArray("Hitesh")) //false
console.log(Array.from("Hitesh")) //[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]