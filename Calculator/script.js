// Check for duplicate variable declarations
console.log("Script is running!");


// Looks for the user-input element within the HTML file.
const inputValue = document.getElementById("user-input");
const numberButtons = document.querySelectorAll(".numbers"); // Use .numbers to select elements by class
// Iterate over each number button and attach an event listener
numberButtons.forEach(function (item) {
      // Log the item to confirm it's being selected
    item.addEventListener("click", function (e) {
        // Check if display shows "NaN" or "0" and clear it
        if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        // Append the clicked number to the display
        inputValue.innerText += e.target.innerHTML.trim();
        console.log(e.target.innerHTML);
        adjustFontSize();
    });
});


// Select all elements with the class 'operations'
const operationButtons = document.querySelectorAll(".operations");

// Function to handle click events
function handleOperationClick(e) {
    // Get the last character of the input value
    let lastValue = inputValue.innerText.substring(inputValue.innerText.length - 1);

    // If the last value is a number and "=" is clicked, evaluate the expression
    if (!isNaN(lastValue) && e.target.innerHTML === "=") {
        try {
            let result = eval(inputValue.innerText)
            //sets the result to only show 4 decimal places.
            inputValue.innerText = parseFloat(result.toFixed(4));
        } catch (error) {
            inputValue.innerText = "Error";  // Display error for invalid expressions
        }
    }
    // If "AC" is clicked, reset the display to 0
    else if (e.target.innerHTML === "AC") {
        inputValue.innerText = "0";
        inputValue.style.fontSize = "50px";
    }
    // If "DEL" is clicked, remove the last character
    else if (e.target.innerHTML === "DEL") {
        inputValue.innerText = inputValue.innerText.substring(0, inputValue.innerText.length - 1);
        if (inputValue.innerText.length === 0) {
            inputValue.innerText = "0";
        }
    }
    // Handle other operations (+, -, *, /)
    else {
        // Only add the operation if the last character is a number
        if (!isNaN(lastValue)) {
            inputValue.innerText += e.target.innerHTML;
        }
    }
}

// Attach event listeners to each operation button
operationButtons.forEach(button => {
    button.addEventListener("click", handleOperationClick);
});

// Function to adjust the font size based on the length of the input
function adjustFontSize() {
    const length = inputValue.innerText.length;
    
    if (length <= 10) {
        inputValue.style.fontSize = '50px';  // Default size for 10 or fewer characters
    } else if (length > 10 && length <= 15) {
        inputValue.style.fontSize = '35px';  // Slightly smaller font for 11-15 characters
    } else if (length > 15 && length <= 20) {
        inputValue.style.fontSize = '27px';  // Smaller font for 16-20 characters
    } else {
        inputValue.style.fontSize = '26px';  // Minimum font size for more than 20 characters
    }
}