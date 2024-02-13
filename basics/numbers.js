const score = 400
console.log(score);

const bal = new Number(500.0000)
console.log(bal.toFixed(3));
console.log(bal.toString().length);

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math.PI.toFixed(4));

console.log(Math.PI.toPrecision(5));


// math.random always prints values between 0 and 1(eg 0.45623987652985, 0.4397639465234788652, etc)

console.log(Math.random());
console.log(Math.floor((Math.random()*10)) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * ((max - min) + (min%10)+1) + min))