
function sayMyName() {

    console.log("U");
    console.log("D");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("V");
}

// sayMyName()

// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2);
    
// }

function addTwoNumber(num1, num2) {
    // let result = num1 + num2
    // return result

    return num1 + num2
    
}
const result = addTwoNumber(3, 5)
// console.log("Result: ", result);

// how we take value input form user

function logginUserMessage(username = "sam") {
    if(!username){
        console.log("Please enter a username");
        return       
    }
    return `${username} just logged in`
}

// console.log(logginUserMessage("udbhav"));
// console.log(logginUserMessage());

function calculateCartPrice(val1, val2, ...num1) { // ...num rest or spread operator put in array
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "udbahv",
    prices: 199
}

function handelObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handelObject(user)
// handelObject({
//     username: "sam",
//     price: 399
// })

const mynewarray = [200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(mynewarray));
console.log(returnSecondValue([200,400,600,522]));




