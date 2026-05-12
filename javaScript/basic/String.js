const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");  // concatination operator

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // traditional way to write

const gameName = new String('hitesh-hc-com') // 13

// console.log(gameName[0]); // h
 console.log(gameName.__proto__);


// console.log(gameName.length);  // 13
// console.log(gameName.toUpperCase());  // HITESH-HS=C-COM
// console.log(gameName.charAt(2));  //t
// console.log(gameName.indexOf('t')); //2

// const newString = gameName.substring(0, 4) 
// console.log(newString); //hite
 

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());  // it remove space from start and end

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-')) // it replace %20 with -

// console.log(url.includes('sundar')) // it cheak wheather it present or not by indicating true or false

console.log(gameName.split(','));  // it split the word with '-'  [ 'hitesh-hc-com' ] miracle