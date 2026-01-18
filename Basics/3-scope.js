// {}=> when used with if-else and functions it is known as scope

// if(true){
//     let a=5;
//     let b=6;
//     let c=7;

//     //these variables are in scope of else and if we try to console them outside if statement it will give a,b,c as undefined.
// }

// console.log(a); // output=> undefined
// console.log(b);
// console.log(c);




// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     // console.log("INNER: ", a);
    
// }



// console.log(a);
// console.log(b);
// console.log(c);


// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"         the child function can get access to parent's variables but vice- versa not true.
//         console.log(username);
//     }
    // console.log(website);

//      two()

// }

// one()

// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         // console.log(username + website);
//     }
    // console.log(website);
// }

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

// function addone(num){                this function declaration will work without any error. when function is accessed before declaration.
//     return num + 1
// }



// addTwo(5)
// const addTwo = function(num){                  this function declaration will give error,
//     return num + 2
// }




// ++++++++++++++++++ Arrow Functions +++++++++++++++


// this keyword refers the current context

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // this line will give output => whatever key and values are in object
        //    {
        //     username: 'hitesh',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
    }

}



user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); this line will give output {} empty object bcoz current context of nodejs environment in an empty object.
                      // browser ke andar jo global object h wo h window object.


// function chai(){
//     console.log(this);
// }
// chai()     when this is consoled under a function we get many values like global objects.


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()  Here the output will be undefined,  this keyword doesn't work under functions as same as with objects.




// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// Arrow function

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
