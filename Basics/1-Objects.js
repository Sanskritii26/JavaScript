// console.log('sanskriti');

// const mysym=Symbol("mykey");

// console.log(typeof mysym);

// const obj={
//     [mysym]:"mykey1"
// }

// console.log(typeof obj[mysym])

// const obj={
//     name: "Sanskriti",
//     age: 21,
//     email: "abc@gmail.com",
//     height: 5.2
// }

// console.log(obj)
// console.log(typeof obj)
// console.log(typeof obj.age)
// obj.greeting=function(){
//     console.log(`Hello JavaScript ${this.name}`)
// };

// console.log(obj.greeting());

// Singleton Objects/ made using constructor

// const tinderUser = new Object()

// non singleton
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname); output=>hitesh

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } this syntax will not combine these objects instead will make an bigger object and contain these two objects...

// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// spread operator
// console.log(obj3);

// array of objects// data from database come in this form generally

// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]
 
// users[1].email  output=>h@gmail.com
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  give all keys in an array form//very useful
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); make arrays of key-value pairs and put all inside an array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); to check if this key exist in object or not.


// De-structure of objects

// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// course.courseInstructor

// const {courseInstructor: instructor} = course // this will give hitesh and courseInstructor can be shorten as instructor.

// console.log(courseInstructor);
// console.log(instructor);

// JSON
// keys and values dono string hoti h

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]



