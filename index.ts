let productName: string = "watch";
console.log("product name is: " + productName);
let price: number = 10;
console.log(`price is: $${price}`);
let discountAvailible: boolean = false;
console.log("no avilible discount now: " + discountAvailible);

function getDiscount(price: number, discount: number) {
  return price - discount;
}

console.log(getDiscount(10, 5));

function userName(name: string = "Guest") {
  return("Hello" + name);
}

console.log(userName(" show man"));

function printLength(x: unknown): void {
  if (typeof x === "string") {
    console.log(x.length);
  } else {
    console.log("Input is not a string.");
  }
}

printLength("Hello");
printLength(123);