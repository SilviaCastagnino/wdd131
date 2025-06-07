document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const productSelect = document.getElementById('productName');
const reviewForm = document.getElementById('reviewForm');
const reviewSummary = document.getElementById('reviewSummary');
const reviewCount = document.getElementById('reviewCount');

function populateProducts() {
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
            productSelect.appendChild(option);
        });
    }
}

function displayReviewData() {
    if (reviewSummary) {
        const urlParams = new URLSearchParams(window.location.search);

        let summaryHTML = '<dl>';

        const productId = urlParams.get('productName');
        const product = products.find(p => p.id === productId);
        summaryHTML += `<dt>Product:</dt><dd>${product ? product.name.charAt(0).toUpperCase() + product.name.slice(1) : 'Not specified'}</dd>`;

        summaryHTML += `<dt>Rating:</dt><dd>${urlParams.get('rating') || 'Not specified'} stars</dd>`;

        summaryHTML += `<dt>Installation Date:</dt><dd>${urlParams.get('installDate') || 'Not specified'}</dd>`;

        const features = urlParams.getAll('features');
        summaryHTML += `<dt>Useful Features:</dt><dd>${features.length > 0 ? features.join(', ') : 'None selected'}</dd>`;

        summaryHTML += `<dt>Review:</dt><dd>${urlParams.get('reviewText') || 'No review provided'}</dd>`;

        const userName = urlParams.get('userName');
        summaryHTML += `<dt>Submitted by:</dt><dd>${userName || 'Anonymous'}</dd>`;

        summaryHTML += '</dl>';
        reviewSummary.innerHTML = summaryHTML;
    }
}


function updateReviewCounter() {
    if (reviewCount) {
        let count = localStorage.getItem('reviewCount');
        if (count === null) {
            count = 0;
        } else {
            count = parseInt(count);
        }
        count++;
        localStorage.setItem('reviewCount', count);

        if (count === 1) {
            reviewCount.textContent = "This is your first review submission. Thank you!";
        } else {
            reviewCount.textContent = `You have submitted ${count} reviews. We appreciate your feedback!`;
        }
    }
}

function initializePage() {
    if (window.location.pathname.includes('review.html')) {
        displayReviewData();
        updateReviewCounter();
    } else {
        populateProducts();
    }

    initializeFooter();
}

document.addEventListener('DOMContentLoaded', initializePage);