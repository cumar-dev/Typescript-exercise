"use strict";
function generics(data) {
    return data;
}
const stringNames = generics("omar");
console.log(stringNames);
const numbers = generics(100);
console.log(numbers);
const arrayNames = generics(["Ali", "Omar", "Ahmed"]);
console.log(arrayNames);
const userInfo = generics({
    name: "omar",
    age: 21,
    gender: "male"
});
console.log(userInfo);
const responseApi = {
    status: "active",
    data: "omar"
};
console.log(responseApi);
const responseApiObject = {
    status: "completed",
    data: {
        id: 12465,
        name: "omar"
    }
};
console.log(responseApiObject);
function generic(items) {
    return items;
}
const names = generic(["Omar", "Ali", "Ahmed"]);
console.log(names);
const number = generic([187, 76845, 798803247]);
console.log(number[0]);
