// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Abinash",
    "full name": "Abinash Pradhan",
    [mySym]: "mykey1",
    age: 18,
    location: "Odisha",
    email: "abinash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) 
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // Hitesh Choudhary
// console.log(JsUser.full name); // we can not access in dot operator
// console.log(JsUser[mySym]) // only in bracket operator we can access this symbol

JsUser.email = "abinash@chatgpt.com"
// Object.freeze(JsUser) // after use freeze it will not allow to change any porperty from object
JsUser.email = "abinash@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


const tinderUser = new Object()  // creating user throw new keyword
// const tinderUser = {} // adding object key and value  throw  empty object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
 

// console.log(Object.keys(tinderUser)); // all object will come
// console.log(Object.values(tinderUser));  // all key will come
// console.log(Object.entries(tinderUser)); // it return all key and value on separate separate arry [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abinash",
            lastname: "Pradhan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2, obj4) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// const obj3 = {...obj1, ...obj2} it is best way to merge object
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "abinash"
}


const {courseInstructor: instructor} = course

// console.log(courseInstructor);  //  courseInstructor is not defined
// console.log(instructor);

// {
//     "name": "abinash",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]