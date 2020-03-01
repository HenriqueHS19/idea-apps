const form = document.querySelector('form');
const txtNumber = document.querySelector("#txtNumber");
const txtResult = document.querySelector("#txtResult");
let numbers = [];

function handleSubmit(event) {
    event.preventDefault();

    //Transform string in array(vetor)
    numbers = Array.from(txtNumber.value);

    if (checkBinary(numbers)) {
        // binary base
        let base = 2;

        let potency = [];
        for (let i = 0; i < numbers.length; i++) {
            potency.push(i);
        }

        // peforms exponentiation
        let expo = [];
        for (let i = 0; i < potency.length; i++) {
            let value = 1;
            for (let j = 0; j < potency[i]; j++) {
                value *= base;
            }
            expo.push(value);
        }

        // convert number in decimal
        let sum = 0;
        for (let i = 0, j = expo.length-1; i < numbers.length; i++, j--) {
            let value = (numbers[i] * expo[j]);
            sum += value;
        }
        
        txtResult.value = sum;

    }
    else { 
        alert("invalid number");
        clear();
    }
}

function checkBinary(number) {
    let cont = 0;

    number.map(function(item) {
        if (item > 1 || item < 0) {
            cont++;
        }
    });

    if (cont > 0) {
        return false;
    }
    return true;
}

function clear() {
    txtNumber.value = "";
    numbers = [];
} 

