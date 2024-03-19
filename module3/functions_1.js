function printNum(){
    for (let i = 0; i < 10;i++){
        console.log(i);
    }
}

// printNum();


function addTwo(a,b){
    // console.log(a+b);
}

addTwo(55154,6546545644);

function loginMessage(username="jane doe") {
    return `${username} has just logged in`
}

// console.log(loginMessage(""));      has just logged in
// console.log(loginMessage("roro"));     roro has just logged in


function calculateCart(...num1) {
    return num1
}

console.log(calculateCart(400, 150,741,984,12046,4515));