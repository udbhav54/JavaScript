const num = [1,2,3,4]

const initialValue  = 0
// const sum = num.reduce((a , c) => a + c, 0 )


// const sum = num.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}` );
//     return acc + currval
    
// }, 0)
// console.log(sum);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 5999
    },
    {
        itemName : "react course",
        price : 999
    },
    {
        itemName : "DSA course",
        price : 6999
    },
]

const sum = shoppingCart.reduce((acc, item) =>(acc + item.price),0)
console.log(sum);



