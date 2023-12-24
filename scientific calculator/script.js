const display = document.getElementById("display");
let currentValue = "";
let previousValue = "";
let operation = "";

createButtons();

function createButtons() {
    const buttonContainer = document.querySelector(".buttons");
    const buttonValues = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "=", "+",
        "(", ")", "^", "sin",
        "cos", "tan", "log", "ln",
        "√", "x^2", "1/x", "π", "e", "C"
    ];

    buttonValues.forEach(value => {
        const button = document.createElement("button");
        button.textContent = value;
        buttonContainer.appendChild(button);
        button.addEventListener("click", handleButtonClick);
    });
}

function handleButtonClick() {
    const buttonValue = this.textContent;

    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(buttonValue)) {
        currentValue += buttonValue;
        display.value = currentValue;
    } else if (["+", "-", "/", "*"].includes(buttonValue)) {
        previousValue = currentValue;
        currentValue = "";
        operation = buttonValue;
    } else if (buttonValue === "=") {
        calculateResult();
    } else if (buttonValue === "C") {
        currentValue = "";
        previousValue = "";
        operation = "";
        display.value = "";
    } else if (buttonValue === "(" || buttonValue === ")") {
        currentValue += buttonValue;
        display.value = currentValue;
    } else {
        switch (buttonValue) {
            case "^":
                currentValue = "^" + currentValue;
                break;
            case "sin":
                currentValue = "Math.sin(" + currentValue + ")";
                break;
            case "cos":
                currentValue = "Math.cos(" + currentValue + ")";
                break;
            case "tan":
                currentValue = "Math.tan(" + currentValue + ")";
                break;
            case "log":
                currentValue = "Math.log10(" + currentValue + ")";
                break;
            case "ln":
                currentValue = "Math.log(" + currentValue + ")";
                break;
            case "√":
                currentValue = "Math.sqrt(" + currentValue + ")";
                break;
            case "x^2":
                currentValue = "Math.pow(" + currentValue + ", 2)";
                break;
            case "1/x":
                currentValue = "1/" + currentValue;
                break;
            case "π":
                currentValue += Math.PI;
                break;
            case "e":
                currentValue += Math.E;
                break;
        }
        display.value = currentValue;
    }
}

function calculateResult() {
    try {
        const result = math.eval(currentValue); // Using Math.js for advanced calculations
        display.value = result;
        currentValue = result;
        previousValue = "";
        operation = "";
    } catch (error) {
        alert("Invalid calculation!");
        currentValue = "";
        display.value = "";
    }
}
