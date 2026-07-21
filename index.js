"use strict";
let productName = "watch";
console.log("product name is: " + productName);
let price = 10;
console.log(`price is: $${price}`);
let discountAvailible = false;
console.log("no avilible discount now: " + discountAvailible);
function getDiscount(price, discount) {
    return price - discount;
}
console.log(getDiscount(10, 5));
function userName(name = "Guest") {
    return ("Hello" + name);
}
console.log(userName(" show man"));
function printLength(x) {
    if (typeof x === "string") {
        console.log(x.length);
    }
    else {
        console.log("Input is not a string.");
    }
}
printLength("Hello");
printLength(123);
