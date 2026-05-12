// number

// const score = 200;

// // intentially create dataType throw new keyward
// const number = new Number(100);

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

// const num = 23.899556;
// // console.log(num.toPrecision(5)); // number of digit to be printed with precise 23.895
// console.log(num.toPrecision(3)); //   23.9

// console.log(num.toPrecision(2)); // 24
// const num = 23.135556;
// console.log(num.toPrecision(2)); // 23

// use of tolocalString

// const price = 100000000;

// console.log(price.toLocaleString());  // 100,000,000 (us value)
// console.log(price.toLocaleString("en-IN"));  // 10,00,00,000 (indian value)
//  const price1 = 10000;

//  console.log(price1.toLocaleString()); //10,000(us value)
//  console.log(price1.toLocaleString("en-IN")); //10,000(us value)



//  **************************  MATH  *****************************************


// to change  -ve sign to +ve we use abs

//  console.log(Math.abs(-4));  //-4
//  console.log(Math.abs(4));  //4
//  console.log(Math.ceil(23.67));  //24
//  console.log(Math.ceil(23.34));  //24
//  console.log(Math.floor(23.67));  //23
//  console.log(Math.floor(23.34));  //23
//  console.log(Math.round(23.34));  //23
//  console.log(Math.round(23.84));  //24


//Random number

// console.log(Math.random()) // number comes between 0 to 9  0.74433222 like that 

// if we multiply with 10 then number comes 1 to 19   7.4433222 like that 
// console.log(Math.random()*10)

// to make it decimal rather than flooting
// console.log(Math.floor(Math.random()*10));  // it will give decimal number


// console.log(Math.floor(Math.random()*10)+1); // 0 to 10

// we need random in a range of min to max

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max-min +1)) + min);

 

