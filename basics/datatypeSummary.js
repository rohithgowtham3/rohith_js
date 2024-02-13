let user1 = {
    email: "roro@gmail.com",
    userId: 23492
}

let user2 = user1;

// console.log(user2);

user2.userId = 37483;
user2.email = "rohith@gmail.com"

console.log(user1);
console.log(user2);