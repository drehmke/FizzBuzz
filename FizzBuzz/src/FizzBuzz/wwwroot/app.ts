// Task - make this more dynamic - change strings and divisors - add more of each to the function as well

class DivisorString {
    constructor( public useDivisor: number, public useString: string) { }
}

let test: DivisorString[] = [
    new DivisorString(2, `Tic`),
    new DivisorString(3, `Fizz`),
    new DivisorString(10, `Tac`,)
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
        let someString = ``;

        for (let used of test) {
            if (input % used.useDivisor === 0) {
                someString += used.useString;
            }
        }
        if (someString != '') {
            console.log(someString);
        }
        else {
            console.log(input);
        }
}

for (let i = 1; i <= 100; i++) {
    evaluateExpression(i, test);
}
