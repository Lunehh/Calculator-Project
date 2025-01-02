function appendToDisplay(value) {
    const display = document.getElementById("display");
    
    // Prevent multiple decimal points in one number
    if (value === '.' && display.value.includes('.')) return;

    display.value += value; // Append value to the display
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = ""; // Clear the display
}

function calculateResult() {
    const display = document.getElementById("display");
    
    try {
        // Evaluate the expression in the display
        const result = eval(display.value);
        display.value = result; // Show result in the display
    } catch (error) {
        display.value = "Error"; // Show error if evaluation fails
        setTimeout(clearDisplay, 1500); // Clear after a short delay
    }
}
