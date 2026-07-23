"use strict";
function logIn(user) {
    console.log(user.username, user.password, user.email);
}
logIn({ username: "omar", password: "123456" });
logIn({ username: "omar", email: "omar@gmail.com", password: "123456" });
const valueUser = {
    isbn: "18374829102",
    title: "software developer"
};
valueUser.title = "software engineer";
console.log(valueUser);
// valueUser.isbn = "7692346";  //this will cause issue
// console.log(valueUser);
