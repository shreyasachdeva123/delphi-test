arr = [];
var previousResult = 0;
var operand = "";
var numInput = "";;
var previousOperand = "add";
let clearBtn = document.getElementById("clearBtn");
let calculatorDiv = document.getElementById("calculator");

clearBtn.addEventListener("click", () => {
    previousResult = 0;
    operand = "";
    numInput = "";
    arr = [];
    document.getElementById("display").innerHTML = 0;
    previousOperand = "add";
});

neg_pos_btn.addEventListener("click", () => {
    let negativeNum = document.getElementById("display").value;
    let n = negativeNum * -1;
    document.getElementById("display").innerHTML = n;
    numInput = n;
});

decimal.addEventListener("click", () => {
    arr.push(".");
    document.getElementById("display").innerHTML = arr.join("");
    numInput = document.getElementById("display").innerHTML;
});


calculatorDiv.addEventListener("click", (e) => {
    if (e.target.className === "numberBtn") {
        arr.push(e.target.innerHTML);
        document.getElementById("display").innerHTML = arr.join("");
        numInput = document.getElementById("display").innerHTML;
    } else if (e.target.className === "operandBtn" && e.target.id === "divideBtn") {
        findOperand("divide");
    } else if (e.target.className === "operandBtn" && e.target.id === "powerBtn") {
        findOperand("power");
    } else if (e.target.className === "operandBtn" && e.target.id === "multiply") {
        findOperand("multiply");
    } else if (e.target.className === "operandBtn" && e.target.id === "subtract") {
        findOperand("subtract");
    } else if (e.target.className === "operandBtn" && e.target.id === "add") {
        findOperand("add");
    } else if (e.target.className === "operandBtn" && e.target.id === "equal") {
        if (operand === "add") {
            add(previousResult, numInput);
        } else if (operand === "subtract") {
            subtract(previousResult, numInput);
        } else if (operand === "multiply") {
            multiplyTwo(previousResult, numInput);
        } else if (operand === "divide") {
            divide(previousResult, numInput);
        } else if (operand === "power") {
            power(previousResult, numInput);
        }
        document.getElementById("display").innerHTML = `${previousResult}`;
        previousOperand = "";
    }
});

function add(a, b) {
    previousResult = parseFloat(a) + parseFloat(b);
    return previousResult;
}

function subtract(a, b) {
    previousResult = parseFloat(a) - parseFloat(b);
    return previousResult;
}

function multiplyTwo(a, b) {
    previousResult = parseFloat(a) * parseFloat(b);
    return previousResult;
}

function divide(a, b) {
    if (b === "0") {
        return previousResult;
    }
    previousResult = parseFloat(a) / parseFloat(b);
    return previousResult;
}

function power(a, b) {
    previousResult = Math.pow(parseFloat(a), parseFloat(b));
    return previousResult;
}


function doMath() {
    if (previousOperand === "add") {
        add(previousResult, numInput);
    } else if (previousOperand === "subtract") {
        subtract(previousResult, numInput);
    } else if (previousOperand === "multiply") {
        multiplyTwo(previousResult, numInput);
    } else if (previousOperand === "divide") {
        divide(previousResult, numInput);
    } else if (previousOperand === "power") {
        power(previousResult, numInput);
    }
}


function findOperand(n) {
    if (previousResult === 0 && numInput === "") {
        document.getElementById("display").innerHTML = "0";
    } else {
        operand = n;
        while (arr.length > 0) {
            arr.pop();
        }
        doMath(previousOperand);
        document.getElementById("display").innerHTML = `${previousResult}`;
        previousOperand = operand;

        if (n === "multiply") {
            numInput = "1";
        } else { numInput = "0"; }
    }
}