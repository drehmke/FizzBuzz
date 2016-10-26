// Task - make this more dynamic - change strings and divisors - add more of each to the function as well
var DivisorString = (function () {
    function DivisorString(useDivisor, useString) {
        this.useDivisor = useDivisor;
        this.useString = useString;
    }
    return DivisorString;
}());
var test = [
    //new DivisorString(2, `Tic`),
    new DivisorString(3, "Fizz"),
    new DivisorString(7, "Buzz")
];
function testDivisor(element, index, array) {
    return element.against % element.divisor == 0;
}
function evaluateExpression(input, testAgainst) {
    var fullString = "";
    var allDivisors = [];
    for (var i = 0; i < testAgainst.length; i++) {
        fullString += testAgainst[i].useString;
        allDivisors.push({ divisor: testAgainst[i].useDivisor, against: input });
    }
    if (allDivisors.every(testDivisor) === false) {
        // we have failed to matched _every_  instance, but we might match some
        if (!allDivisors.forEach(testDivisor)) {
            console.log(input);
        }
        else {
            console.log('something magic happens');
        }
    }
    else {
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
for (var i = 1; i <= 21; i++) {
    //console.log(evaluateExpression(i, 3, 7, `Fizz`, `Buzz`);
    evaluateExpression(i, test);
}
