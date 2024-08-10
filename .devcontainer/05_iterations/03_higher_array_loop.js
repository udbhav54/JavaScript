// for of 
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num); 
}

const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "Indai")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

for (const[ key, value] of map) {
    // console.log(key, ':-', value);
    
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'SPIDERMAN'
}
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }
