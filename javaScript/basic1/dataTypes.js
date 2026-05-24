 // primitive dataTypes call by value

 /* there are 7 types of Primitive dataTypes String ,
 Number,Null,undefined,Symbol,BigInt */

//  nonPrimitive

// call by refrence  mainly 3 types objects,array,functions

//Symbol 


const id = Symbol('123');
const anotherId =Symbol('123')
// both are diffeent due to use of Symbol

// console.log(typeof(id));   // Symbol
// console.log(anotherId);  // Symbol


let BigNumber = 2445467146444449889932046n;
 let number= null;
//  console.log(typeof(number));  //  object
//  console.log(undefined);   // undefined
 let num;
//  console.log(num);  // undfined
 

// console.table([id,anotherId,BigNumber]);

// operator. 

// console.log("1"+ 2);  // 12
// console.log("1"+ 2+ 3);  // 123
// console.log("1"+ 2+ "3"); //123
// console.log(3+ 2 + "5"); // 55

// console.log(+ true);  // 1
// console.log( true+);  // error

// let count =1;
// console.log(count++); //2
// console.log(++count); // 2

// link to study
// https://tc39.es/ecma262/#sec-abstract-operations


// memory allocataion 

// primitive (stack), nonprimitive(heap)

 //primitve stack

// let user1 ="user1@gmail.com";
// let user2 =user1;

// console.table([user1,user2]);
// user2 ="user2@gmail.com";
// console.table([user1,user2]);

// nonprimitive  heap changes in original

// let user1 ={
//     name : "Abinash",
//     age: 25,
// };
// let user2= user1;
// console.table([user1.name,user2.name]);
// user2.name ="Abhi";

// console.table([user1.name,user2.name]);
