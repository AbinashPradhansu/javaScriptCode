// let myDate = new Date();  // it is object type



// console.log(myDate);  //2026-05-12T06:15:58.072Z
// console.log(myDate.toString()); //Tue May 12 2026 11:48:25 GMT+0530 (India Standard Time)

// console.log(myDate.toLocaleDateString());  // 5/12/2026

// console.log(myDate.toDateString()); // Tue May 12 2026

// console.log(myDate.toLocaleString()). //5/12/2026, 11:52:05 AM

// console.log(myDate.toJSON()) //2026-05-12T06:22:05.916Z

// console.log(myDate.toTimeString()) // 11:53:55 GMT+0530 (India Standard Time)

// console.log(myDate.toLocaleTimeString())  // 11:54:40 AM

// const  createDate = new Date( 2000 , 8,10);  // month start from 0



// const  createDate1 = new Date( "10-09-2000");  // month start from 0 dd/mm/yyyy similarly we ca yyyy-mm-dd also   



// console.log(createDate.toLocaleString());  //9/10/2000, 12:00:00 AM
// console.log(createDate.toString()); //Sun Sep 10 2000 00:00:00 GMT+0530 (India Standard Time)

// console.log(createDate1.toLocaleString()); // 10/9/2000, 12:00:00 AM
// console.log(createDate1.toString()); //Mon Oct 09 2000 00:00:00 GMT+0530 (India Standard Time)



// timeStamp
let myDate = new Date(); 
let myTimeStamp = Date.now();
// console.log(myTimeStamp);  // 1778567956109 it is in milisecond

// console.log(myDate.getTime());  //1778568069888 it is in milisecond

// console.log(Math.floor(myDate.getTime()/1000));   // 1778568261


// get date ,time , month etc
// console.log(myDate.getMonth()); //4 due start from 0
// console.log(myDate.getYear()); //126

// console.log(myDate.getDay()); 2


console.log(myDate.toLocaleString('default',{
    weekday: "long",

})) //Tuesday
