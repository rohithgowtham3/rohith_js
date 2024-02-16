const myArr = [0, 1, 2, 3, 4, 5]
// for (let i = 0; i < myArr.length; i++) {
//     console.log(`${i+1}th element is ${myArr[i]}`);
// }

// array methods

// myArr.push(10)
// console.log(myArr);
// console.log(myArr.push(110));

// slice and splice

console.log('original- ', myArr);
let changeArr1 = myArr.slice(0,3)
console.log('dup1- ', changeArr1);
console.log('myArr- ', myArr);


console.log('original 2- ', myArr);
let changeArr2 = myArr.splice(0,3)
console.log('dup2- ', changeArr2);
console.log('myArr- ', myArr);

/*
lesson- the method that manipulates the original array is splice, slice does not
change the original array but splice does
*/