//. create. promise with a variable

// const promise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("create promise");
//     }, 1000);
//     resolve();
// })
// promise.then((promise) =>{
//     console.log("promise is pass");
    
// });


//. create. promise without variable 


//   new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("create promise 1");
//     }, 1000);
//     resolve();
// }).then((promise) =>{
//     console.log("promise is pass 1");
    
// });

// resolve can return array or object 

// const promise2 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("create promise 2")
//     }),1000
//       return resolve({username:"Abinash", age : 25});
// })
// promise2.then((user)=>{
//      console.log(user.username);
     
// });


// error handling


// const promise3 = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         let error =false;
//         if(!error){
//             resolve({username:"Abinash", age : 25});
//         }
//         else{
//             reject("something went wrong");
//         }
          
//     }, 1000);
    
// })
//  promise3.then((user)=>{
//     console.log(user);
//     console.log(user.age);
//     return user.username; // if we need return then we have to chainging then or thenable
// }).then((user) =>{
//     console.log(user)
// }).catch((error) =>{
//     console.log(error);
// }).finally(()=>{
//     console.log("it is optional ");  
    
// })
 

/* 
use of  async and await 
 but there is a problem it does not handle error bydefault
 so we have to write on try and catch block for error handling


 if no error it work smoothly

*/

const promise4 = new Promise((resolve,reject) =>{
    setTimeout(() => {
        let error =true;
        if(!error){
            resolve({username:"Abinash", age : 25});
        }
        else{
            reject("something went wrong");
        }
    
          
    }, 1000);
})

 let promiseConsume= (async() => {
    try{
        const response = await promise4;
    console.log(response);
    }catch(error){
        console.log(error);
        
    }
    
})
promiseConsume();