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
//for (let testSet of test) {
//    console.log(`Test using ${testSet.useDivisor}. If matches, display ${testSet.useString}.`)
//}
function evaluateExpression(input, testAgainst) {
    // test against all values ---
    var evalAll = "";
    var stringAll = "";
    for (var i = 0; i < testAgainst.length; i++) {
        evalAll += "( " + input + " % " + testAgainst[i].useDivisor + " == 0 )";
        if (i != (testAgainst.length - 1)) {
            evalAll += " && ";
        }
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
for (var i = 1; i < 5; i++) {
    //console.log(evaluateExpression(i, 3, 7, `Fizz`, `Buzz`);
    evaluateExpression(i, test);
}
