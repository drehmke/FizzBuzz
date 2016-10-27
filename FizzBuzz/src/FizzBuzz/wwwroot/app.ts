// Task - make this more dynamic - change strings and divisors - add more of each to the function as well

class DivisorString {
    constructor( public useDivisor: number, public useString: string) { }
}

let test: DivisorString[] = [
    new DivisorString(2, `Tic`),
    new DivisorString(3, `Fizz`),
    new DivisorString(7, `Buzz`)
];

function testDivisor(element, index, array) {
    return element.against % element.divisor == 0; 
}
function evaluateExpression(input, testAgainst) {
    let fullString = ``;
    let allDivisors = [];
    for (let i = 0; i < testAgainst.length; i++) {
        fullString += testAgainst[i].useString;
        allDivisors.push(
            { divisor: testAgainst[i].useDivisor, against: input }
        );
    }
    let tempArr = [];
    if (allDivisors.every(testDivisor) === false) {
        // we have failed to matched _every_  instance, but we might match some
        let someString = ``;

        for (let used of test) {
            if (input % used.useDivisor === 0) {
                someString += used.useString;
            }
        } // can't use an else on a for-loop, that's just silly
        // currently printing someString _and_ the input - probably because of the else statement
        else {
            // we failed to match anything - output our number
            console.log(input);
        }
    } else {
        // we match everything!
        console.log(fullString);
    }
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
for (let i = 1; i <= 21; i++) {
    //console.log(evaluateExpression(i, 3, 7, `Fizz`, `Buzz`);
    evaluateExpression(i, test);
}
