// Initial commit: set up RGB slider functionality

// Add commit: get slider elements from DOM
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

// Add commit: reference page body element
const pageBody = document.body;

// Add commit: create function to update background color
function updateBackgroundColor() {

    // Add commit: retrieve slider values
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    // Add commit: construct RGB color string
    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    // Add commit: apply background color to page
    pageBody.style.backgroundColor = rgbColor;
}


// Add commit: attach input event listeners to sliders
redSlider.addEventListener("input", updateBackgroundColor);
greenSlider.addEventListener("input", updateBackgroundColor);
blueSlider.addEventListener("input", updateBackgroundColor);

// Add commit: initialize background color on page load
updateBackgroundColor();