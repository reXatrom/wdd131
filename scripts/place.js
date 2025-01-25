// Calculate Wind Chill Function
function calculateWindChill(temp, windSpeed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(2);
}

// Static Data
const temperature = 10; // in °C
const windSpeed = 15; // in km/h

// Update Footer with Last Modified Date
const footerDate = document.getElementById('date');
footerDate.textContent = `Last Modified: ${document.lastModified}`; // Corrected template literal syntax

// Wind Chill Calculation
const windChillElement = document.getElementById('windchill');
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill} °C`; // Fixed template literal usage
} else {
    windChillElement.textContent = 'N/A';
}
