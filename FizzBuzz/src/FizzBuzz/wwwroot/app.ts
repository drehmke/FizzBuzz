// Task - make this more dynamic - change strings and divisors - add more of each to the function as well

let strings = [`Fizz`, `Buzz`];
let divisors = [3, 7];

function evaluateExpression(input, firstDivisor, secondDivisor, firstString, secondString) {
    if ((input % firstDivisor == 0) && (input % secondDivisor == 0)) {
        return firstString + secondString;
    }
    if (input % firstDivisor == 0) {
        return firstString;
    }
    if (input % secondDivisor == 0) {
        return secondString;
    }
    return input;
}

for (let i = 1; i < 101; i++) {
    console.log(evaluateExpression(i,3,7,`Fizz`,`Buzz`);
}