const name = "udbhav"
const repoCount = 50

// console.log(name + repoCount + "Value"); outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('udbha-v');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('v'));

//  const newString = gameName.substring(0,3) // last value not included
//  console.log(newString);

const anotherString = gameName.slice(-5,3) // we can give negative value
console.log(anotherString);


const newStringOne = "  udbhav  "
console.log(newStringOne);
console.log(newStringOne.trim()); // to remove extra character work on whiteSpace and new line


const url = "https://hitest.com/hitest%20choudhary"
console.log(url.replace('%20','-'));

console.log(gameName.split('-'));


