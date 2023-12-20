"use strict";

let calculate = document.getElementById("inputBox");
let valid = "";
let Arr = [];

function num(x) {
    valid += x;

    if (parseInt(x) == x || x == ".") {
        calculate.value += x;

        if (valid.length < 2) {
            Arr.push(valid);
        } else {
            Arr[Arr.length - 1] = Arr[Arr.length - 1] + x;
        }
    } else {
        if (valid.length > 1) {
            Arr.push(x);
            calculate.value += x;
        } else {
            calculate.value = calculate.value.slice(0, -1);
            calculate.value += valid;
            Arr.pop();
            Arr.push(valid);
        }
        valid = "";
    }

    console.log(valid);
    console.log(Arr);
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        case "%":
            return a % b;
        default:
            return NaN;
    }
}

function evaluate(arr) {
    let result = 0;
    let currentOperator = "";

    arr.forEach((element, i) => {
        if (element === "+" || element === "-" || element === "*" || element === "/" || element === "%") {
            currentOperator = element;
        } else {
            if (currentOperator !== "") {
                result = operate(currentOperator, result, parseFloat(element));
                currentOperator = "";
            } else {
                result = parseFloat(element);
            }
        }
    });

    return result;
}

function Equal() {
    const result = evaluate(Arr);
    calculate.value = result;
}

function Delete() {
    let del = "";
    valid = "";
    calculate.value = calculate.value.slice(0, -1);

    del = Arr.pop();

    if (del.length > 1) {
        del = del.slice(0, -1);
        Arr.push(del);
    } else {
        del = "";
    }
    valid = del;
    console.log(Arr);
}

function Clear() {
    calculate.value = "";
    Arr = [];
    valid = "";
}
