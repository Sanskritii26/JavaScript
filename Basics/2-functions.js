// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName()



// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// addTwoNumbers("a","b");




// function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// addTwoNumbers(3,4)

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


// function calculateCartPrice(...num1){
//     return num1
// }

//"..." this is rest operator // when we have to pass too many arguments we can use it, in output it will give an array of those parameters. [200,400,500,2000]

// console.log(calculateCartPrice(200, 400, 500, 2000))



// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

//if we write like this then the output will be [500,2000] bcuz 200 and 400 will be assigned to val1 & val2.
// console.log(calculateCartPrice(200, 400, 500, 2000))





// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user)

// we can pass direct objects too.

// handleObject({
//     username: "sam",
//     price: 399
// })

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

const obj={
    method: function(){
        console.log("hello world")
    }
}

obj.method()