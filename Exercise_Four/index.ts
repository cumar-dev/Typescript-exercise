interface User {
    username: String,
    email?: String,
    password: String
}

function logIn(user: User): void {
console.log(user.username, user.password, user.email);
}

logIn({username: "omar", password: "123456"});
logIn({username: "omar", email: "omar@gmail.com", password: "123456"});


interface userInfo {
    readonly isbn: String,
    title: String
}

const valueUser: userInfo = {
    isbn: "18374829102",
    title: "software developer"
}

valueUser.title = "software engineer";
console.log(valueUser);
valueUser.isbn = "7692346";  //this will cause issue
console.log(valueUser);