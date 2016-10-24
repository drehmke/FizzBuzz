// Task - make this more dynamic - change strings and divisors - add more of each to the function as well
var DivisorString = (function () {
    function DivisorString(useDivisor, useString) {
        this.useDivisor = useDivisor;
        this.useString = useString;
    }
    return DivisorString;
}());
var test = [
    new DivisorString(3, "Fizz"),
    new DivisorString(7, "Buzz")
];
for (var _i = 0, test_1 = test; _i < test_1.length; _i++) {
    var testSet = test_1[_i];
    console.log("Test using " + testSet.useDivisor + ". If matches, display " + testSet.useString + ".");
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
