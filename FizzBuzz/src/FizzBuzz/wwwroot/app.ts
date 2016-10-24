// Task - make this more dynamic - change strings and divisors - add more of each to the function as well

class DivisorString {
    constructor( public useDivisor: number, public useString: string) { }
}

let test: DivisorString[] = [
    new DivisorString(3, `Fizz`),
    new DivisorString(7, `Buzz`)
];

for (let testSet of test) {
    console.log(`Test using ${testSet.useDivisor}. If matches, display ${testSet.useString}.`)
}

/*
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
*/
/*
for (let i = 1; i < 101; i++) {
    console.log(evaluateExpression(i,3,7,`Fizz`,`Buzz`);
}
*/