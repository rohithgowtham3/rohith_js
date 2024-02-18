const marvel = ['thor', 'ironman', 'spiderman']
const dc = ['flash', 'batman', 'superman']

// marvel.push(dc)

// console.log(marvel);
// console.log(dc);
// console.log(marvel[3]);

// const concat = marvel.concat(dc)
// console.log(concat);

// const allHeros = [...marvel, ...dc]
// console.log(allHeros);

// "..." is called a spread operator

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const Arr3 = anotherArr.flat(Infinity)
// console.log(Arr3)

let s1 = 100
let s2 = 200
let s3 = 300
// console.log(Array.of(s1, s2, s3));           // 'of' returns the given set of items in an array

let myName = "rohith gowtham"
console.log(Array.of(myName));                  // of returns the given set in a single array without splitting the array
console.log(Array.from(myName));                // from returns the given set in a single array after splitting the array

