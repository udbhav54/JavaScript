
// var c = 300
let a = 300

// {} // scope

if(true) {
    let a = 10
    const b = 20
    // console.log("INNER:" , a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "udbhav"
    function two() {
        const websit = "github"
        // console.log(username);
    }
    // console.log(websit);
    // two()
}
one()

if (true) {
    const username = "udbhav"
    if(username === "udbhav" ) {
        const websit = " github"
        // console.log(username + websit);
    }
    // console.log(websit);
}
// console.log(username);

// ++++++++++++++ Intresting ++++++++++++++++++++++++++++++++++


function addone(value) {
    return value + 1
}
// console.log(addone(5))



const addTwo = function(num) {
    return num + 2
}

addTwo(5)


