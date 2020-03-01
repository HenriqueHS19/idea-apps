const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.operators');

function build() {
    
    const values = [7, 8, 9, "C", 4, 5, 6, "+", 1, 2, 3, "-", 0, "x", "/", "="];

    values.forEach(function(element, index){
        let type = typeof values[index];
        let button;

        if (type === "string"){
            button = createButton("button", "operator", element);
        }
        else {
            button = createButton("button", "number", element);
        }
        
        numbers.appendChild(button);
    });
}

function createButton(type, className, text) {
    const button = document.createElement('button');
    button.type = type;
    button.className = className;
    button.appendChild(document.createTextNode(text));
    return button;
}

build();