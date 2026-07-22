function fullName(first: string, last: string) {
    return first + " " + last;
}

console.log(fullName("omar", "cabdi"));

function registerUser(username: string, language: string, isAdmin?: boolean) {
    return(`${username}, ${isAdmin}, ${language || "eng"}`);
}

console.log(registerUser("omar", "somali", true, ));

function average(...scores: number[]): number {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

console.log(average(80, 90, 100)); 
console.log(average(70, 75)); 
console.log(average(50));  