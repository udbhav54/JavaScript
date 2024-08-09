const user = {
    username: "udbhav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username= "udbhav"
//     console.log(this.username);
// }
// chai()// this work in object context

// const chai = function() {
//     let username= "udbhav"
//     console.log(this.username);
// }
// arrow function

const chai = () => {
    let username= "udbhav"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2

// }

// const addTwo = (num1, num2) =>   num1 + num2 // implict return 
// const addTwo = (num1, num2) =>   (num1 + num2)
const addTwo = (num1, num2) => ( {username: "udbhav"})
console.log(addTwo(2,2));

const myArray = [1,2,3,5]

