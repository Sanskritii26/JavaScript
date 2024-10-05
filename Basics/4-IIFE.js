// Immediately Invoked Function Expressions (IIFE)

//sometimes there are problems due to pollution occuring by global scope variables. so we use IIFe


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // this is named IIFI


//here semicolon is important to tell the function to stop the execution.

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')  // this is unnamed IIFI