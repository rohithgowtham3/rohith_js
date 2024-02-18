// object literals
const sym = Symbol('this is a symbol')


const jsUser = {
    name: 'rohith',
    age: 18,
    location: 'mysore',
    isLoggedin: false,
    email: 'roro@gmail.com',
    [sym]: 'symbol in lecture on objects'
}



// const jsUserCopy = Object.assign({}, jsUser) 

// console.log(jsUser['age']);
// Object.freeze(jsUser)

jsUser['email'] = 'rohithgg@gmail.com'
// console.log(jsUser);

jsUser.greet = function(){
    console.log('Hello JS User');
}


jsUser.greet1 = function(){
    console.log(`Hello JS User ${this.name}`);
}

console.log(jsUser.greet());
console.log(jsUser.greet1());


console.log(jsUser);