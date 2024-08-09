// Singleton - (object)
// constructor, literal

// Object.create -> by the help of constructor

// Object literal (not form singleton) -> declaration

const mySym = Symbol("key1")

const JsUser = {
    name: "Udbhav",
    "full name": "udbhav kumar",
    [mySym]: "mykey2",
    age: 20,
    location: "Bangalore",
    email: "udbhav@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["mon", "sat"]
}

// access by using .

// console.log(JsUser.name);
// console.log( JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( typeof JsUser[mySym]);

// console.log(JsUser);

// to freeze the value of an object

JsUser.email = "udbhav123@gmail.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)
JsUser.email = "udbhav1234@gmail.com"
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greeting2 = function() {
    console.log(`Hello JS user, ${this.age}`);
}

// console.log(JsUser.greeting); // in this function not excuted but reference will call back as return

console.log(JsUser.greeting2());





