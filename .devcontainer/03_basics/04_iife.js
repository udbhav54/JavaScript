// Immediately Invoked Function Expressinons (IIFE)
// we use iife to protect from polution which created from global scope

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
}) ();
// chai()

(() => {
    console.log(`DB CONNECTED TWO`);
    
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('udbhav')