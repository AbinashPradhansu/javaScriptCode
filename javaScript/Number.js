// number

const score = 200;

// intentially create dataType throw new keyward
const number = new Number(100);

// console.log(number);
// console.log(score);

// number to string
// console.log(typeof(score.toString()));  //string

// console.log(score.toString().length); //3

// tofixed function

// console.log(score.toFixed(2));  // it print upto two decimal number
// console.log(typeof(score.toFixed(2))); // String

// precistion value

// it gives precise value. 

// const num = 23.835556;
// // console.log(num.toPrecision(5)); // number of digit to be printed with precise 23.835

// console.log(num.toPrecision(2)); // 24
const num = 23.135556;
console.log(num.toPrecision(2)); // 23


