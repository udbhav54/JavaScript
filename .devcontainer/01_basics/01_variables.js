const accountId = 123456
let accountEmail = "udbhav@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 // not allowed

accountEmail = "abc@gmail.com"
accountPassword = "98745"
accountCity = "Bagaha"

console.log(accountId);

/* 
Prefer not to use var 
beacuse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])