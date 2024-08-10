// const userEmail = " udbhav@.ai"
// const userEmail = ""
const userEmail = []

if (userEmail) {
    console.log(`Got user email`);  
} else {
    console.log(`Don't have user email`);
    
}

// falsy values
// false , 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'fasle', " ", [], {}, function() {}

// if (userEmail.length === 0) {
//     console.log(`Array empty`);
    
// }

const emptObj = {}
if (Object.keys(emptObj).length === 0) {
    console.log(`empty`);
    
}

// Nullish Coalescing Operator (??) : null undefined

let val1
//  val1 = 5 ?? 19
// val1 = null ?? 15
// val1 =  undefined ?? 45
// val1 = null ?? undefined ?? 5
val1 = null ?? undefined // undefined

 console.log(val1);
 
 // Terninary Operator

//  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

