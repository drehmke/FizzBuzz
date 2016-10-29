// Task - make this more dynamic - change strings and divisors - add more of each to the function as well
var DivisorString = (function () {
    function DivisorString(useDivisor, useString) {
        this.useDivisor = useDivisor;
        this.useString = useString;
    }
    return DivisorString;
}());
var test = [
    new DivisorString(2, "Tic"),
    new DivisorString(3, "Fizz"),
    //new DivisorString(10, `Tac`),
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
        var someString = "";
        for (var _i = 0, test_1 = test; _i < test_1.length; _i++) {
            var used = test_1[_i];
            if (input % used.useDivisor === 0) {
                someString += used.useString;
            }
        }
        if (someString != "") {
            console.log(someString);
        }
        else {
            console.log(input);
        }
    }
    else {
        console.log(fullString);
    }
}
for (var i = 1; i <= 100; i++) {
    evaluateExpression(i, test);
}
