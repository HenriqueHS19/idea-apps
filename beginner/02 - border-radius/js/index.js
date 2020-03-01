const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const result = document.querySelector('.result');

function handleSubmit(event) {
    event.preventDefault();

    let values = ""

    inputs.forEach(function(input){
        values += input.value + "px ";
    });

    result.style.borderRadius = values;
    
}

function handleReset(event) {
    event.preventDefault();

    inputs.forEach(function(input) {
        input.value = "";   
    });

    const values = "0px";

    result.style.borderRadius = values;
}