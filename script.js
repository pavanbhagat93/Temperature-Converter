function convertCelsiusToFahrenheit() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitOutput = document.getElementById("fahrenheit");

    // Get the Celsius temperature from the input field
    const celsius = parseFloat(celsiusInput.value);

    // Check if the input is a valid number
    if (!isNaN(celsius)) {
        // Convert Celsius to Fahrenheit
        const fahrenheit = (celsius * 9/5) + 32;
        // Display the result
        fahrenheitOutput.textContent = fahrenheit.toFixed(2) + " °F";
    } else {
        // Display an error message if the input is not valid
        fahrenheitOutput.textContent = "Invalid input";
    }
}
