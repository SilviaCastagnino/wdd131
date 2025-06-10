function displayTravelData() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let div = document.getElementById('travelSummary');
    div.innerHTML = `
    <h4>First Name:</h4>
    <p>${urlParams.get('firstName')}</p>
    <h4>Last Name:</h4>
    <p>${urlParams.get('lastName')}</p>
    <h4>Email Address:</h4>
    <p>${urlParams.get('email')}</p>
    <h4>Phone Number:</h4>
    <p>${urlParams.get('phone')}</p>
    <h4>Your Message:</h4>
    <p>${urlParams.get('message')}</p>
    `;
}

function updateRequestCounter() {
    if (requestCount) {
        let count = localStorage.getItem('travelRequestCount');
        if (count === null) {
            count = 0;
        } else {
            count = parseInt(count);
        }
        count++;
        localStorage.setItem('travelRequestCount', count);
        if (count === 1) {
            requestCount.textContent = "This is your first request with us. Thank you!"
        } else {
            requestCount.textContent = `You have submitted ${count} travel requests. We appreciate your trust!`
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('travel.html')) {
        displayTravelData();
        updateRequestCounter();
    }
});