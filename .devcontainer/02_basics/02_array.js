const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_hreos = ["superman", "flash", "batman"]

// marvel_heros.push(dc_hreos)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_hreos)
// console.log(all_heros);

//Spread

const all_new_heros = [...marvel_heros, ...dc_hreos]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, 8, [5,6,7]]]

const real = another_array.flat(Infinity)
// console.log(real);



console.log(Array.isArray("Udbhav"));
console.log(Array.from("Udbhav"));
console.log(Array.from({name: "udbhav"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
