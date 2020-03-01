const txtVisor = document.querySelector("#txtVisor");
const buttonsNumber = document.querySelectorAll('.number');
const buttonsOperators = document.querySelectorAll('.operator');

let num1 = "";
let num2 = "";
let clickOp = false;
let operation = "";

function handleNumber(event) {
    if (!clickOp) {
        num1 += event.target.textContent;
        addVisor(num1);
    }
    else {
        num2 += event.target.textContent;
        addVisor(num2);
    }
}

function handleOperation(event) {
    let op = event.target.textContent;
        
    if (op != "=" && op != "C") {
        clickOp = true;
        operation = event.target.textContent;
    }
    else if (op == "=") {
        if (operation == "+") {
            addVisor(sum(parseInt(num1), parseInt(num2)));
        }
        if (operation == "-") {
            addVisor(sub(parseInt(num1), parseInt(num2)));
        }
        if (operation == "x") {
            addVisor(mult(parseInt(num1), parseInt(num2)));
        }
        if (operation == "/"){
            addVisor(div(parseInt(num1), parseInt(num2)));
        }
    }
    else if (op == "C") {
        num1 = "";
        num2 = "";
        clickOp = false;
        operation = "";
        txtVisor.value = "0";
    }
}

function addVisor(text) {
    txtVisor.value = text;
}

// add event listener in all buttons of numbers
buttonsNumber.forEach(function(element) {
    element.addEventListener('click', handleNumber);
});

buttonsOperators.forEach(function(element) {
    element.addEventListener('click', handleOperation);
});

// calculator
function sum(num1, num2) {
    return num1 + num2;
};

function sub(num1, num2) {
    return num1 - num2;
};

function div(num1, num2){
    return num1 / num2;
};

function mult(num1, num2) {
    return num1 * num2;
};
