document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

function displayData() {
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
    <strong>Temperature:</strong> <span>....</span>
    <strong>Conditions:</strong><span>......</span>
    <strong>Wind:</strong><span>Rome</span>
    <strong>Wind chill:</strong><span>.....</span>
    `;
}

displayData();