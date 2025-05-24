document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

function displayData() {

    const temperature = 8;
    const windSpeed = 12;
    const conditions = "Partly cloudy";


    let windChill = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
    }

    document.getElementById('data').innerHTML = `
    <h2>Data</h2>
    <strong>Area:</strong><span>302.073 sq km</span>
    <strong>Population:</strong><span>58.990.000</span>
    <strong>Capital:</strong><span>Rome</span>
    <strong>Languages:</strong><span>Italian</span>
    <strong>Currency:</strong><span>Euro</span>
    <strong>Time zone:</strong><span>Winter UTC+1, Summer UTC+2</span>
    <strong>Calling Code:</strong><span>+39</span>
    <strong>Internet TLD:</strong><span>.it</span>
    `;
    document.getElementById('weather').innerHTML = `
    <div class="title">
        <h2>Weather </h2>
        <p>⛅</p>
        <img src="images/wheater-cloud.svg" alt="weather cloud">
    </div>
    <strong>Temperature:</strong> <span>${temperature}°C</span>
    <strong>Conditions:</strong><span>${conditions}</span>
    <strong>Wind:</strong><span>${windSpeed} km/h</span>
    <strong>Wind chill:</strong><span>${windChill}</span>
    `;
}

displayData();