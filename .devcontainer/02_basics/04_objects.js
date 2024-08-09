// construster

// const tinderUser = new Object() // singleton object

const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "shivam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// object inside object(nested)

const regularUser = {
    email: "abc@gmail.com",
    fullName: {
        userfulllname: {
            firstname: "udbhav",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullName.userfulllname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // go to mdn {}-> target

// by using spread
const obj3 = {...obj1,...obj2}
// console.log(obj3);

// data come from database
const user = [
    {
        id:1,
        email:"abc123@gmail.com"
    },
    {

    }
]

user[1].email
// console.log(tinderUser);
// // return in array form
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // make each value in key array form

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// de-structure

const course = {
    course: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

//course.courseInstructor
// syntax to print instance of object

// de- strusture in javascript

const {courseInstructor: instrustor} = course
console.log(instrustor);

// console.log(courseInstructor);

// react de - strusture
const navbar = ({company}) => {

}
navbar(comapny = "hitesh")

// {
//     "name": "hitesh",
//     "coursename": "js in hindi"
//     "price": "free"
// } json strusture in which key as well as value are in string

// [
//     {},
//     {},
//     {},
// ]




