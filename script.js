// Get the display input field
const display = document.getElementById("inOut")

// Function to clear the display
function clearDisplay() {
    display.value = ""
}

// Function to delete the last character from the display
function deleteLast() {
    display.value = display.value.toString().slice(0,-1)
}


// Function to append values to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to calculate the expression on the display
function calculate() {
    try {
        // Get the current input value
        let input = display.value;

        // Regular expression to validate the input: only numbers, operators, and valid decimal usage
        const validExpression = /^[0-9]+(\.[0-9]+)?([+\-*/][0-9]+(\.[0-9]+)?)*$/;

        // If the input matches the valid expression
        if (validExpression.test(input)) {
            // Evaluate the mathematical expression
            let result = eval(input);

            // Check if result is a floating-point number and round it to a fixed decimal point
            if (result % 1 !== 0) {
                display.value = result.toFixed(10).replace(/\.?0+$/, ''); // Remove extra zeros
            } else {
                display.value = result;
            }
        } else {
            // If the input is invalid, display an error
            display.value = "Invalid Expression";
        }

        
    } catch (error) {
        display.value = "Error";
    }
}


// Adding an event listener to detect keyboard inputs
document.addEventListener("keydown", e => {
    // Avoid appending values if the input field is focused
    if (document.activeElement === display) {
        return;
    }

    const key = e.key;

    //check if the key is a number (0-9) or decimal point
    if (!isNaN(key)) {
        appendToDisplay(key)
    } else if (key === ".") {
        appendToDisplay(key)
    } else if (key === "/") {
        appendToDisplay(key)
    } else if (key === "*") {
        appendToDisplay(key)
    } else if (key === "-") {
        appendToDisplay(key)
    } else if (key === "+") {
        appendToDisplay(key)
    } else if (key === "Enter") {
        calculate()


    } else if (key === "Backspace") {
        deleteLast()
    } else if (key === "Escape") {
        
        clearDisplay()
    }
})


