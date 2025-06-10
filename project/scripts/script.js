document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active')
});



document.addEventListener('DOMContentLoaded', () => {

    const travelDestinations = [
        {
            name: "Rome, Italy",
            description: "An immersion into history, with ancient Rome and the Vatican City. Perfect for art and culture lovers.",
            price: "€1,299",
            climate: "Mediterranean. Hot and dry summers (25-30°C), mild and rainy winters (5-10°C). Spring and autumn are ideal.",
            imageUrl: "images/pack1.webp",
            packageIncludes: [
                "5 nights in a 4-star hotel",
                "Breakfast included",
                "Guided tours of the Colosseum & Vatican",
                "Airport transfers",
                "Travel insurance"
            ]
        },
        {
            name: "Paris, France",
            description: "The city of love and light, with the iconic Eiffel Tower, art museums, and refined cuisine. Perfect for a romantic travel.",
            price: "€1,499",
            climate: "Temperate oceanic. Warm summers (20-25°C), cold winters but rarely below freezing (3-7°C). Rainfall distributed throughout the year.",
            imageUrl: "images/pack2.webp",
            packageIncludes: [
                "4 nights in a boutique hotel",
                "Seine River cruise",
                "Eiffel Tower tickets",
                "Gourmet dinner experience",
                "Metro passes"
            ]
        },
        {
            name: "Kyoto, Japan",
            description: "Explore ancient temples, Zen gardens, and centuries-old traditions in Japan's cultural capital.",
            price: "€1,850",
            climate: "Humid temperate. Hot and humid summers (25-30°C), cold and dry winters (0-5°C). Mild intermediate seasons.",
            imageUrl: "images/pack3.webp",
            packageIncludes: [
                "7 nights in a traditional Ryokan",
                "Daily Japanese breakfast",
                "Geisha district walking tour",
                "Bullet train experience to Tokyo",
                "Tea ceremony workshop"
            ]
        },
        {
            name: "Serengeti, Tanzania",
            description: "An unforgettable safari adventure, witnessing the Great Migration and African wildlife. Discover the amazing nature.",
            price: "€3,500",
            climate: "Tropical. Dry seasons (June-October) and wet seasons (November-May). Consistent temperatures between 20-30°C.",
            imageUrl: "images/pack4.webp",
            packageIncludes: [
                "6 nights in a luxury safari lodge",
                "All meals & drinks",
                "Daily game drives with guide",
                "Visit to Ngorongoro Crater",
                "Bush dinner experience"
            ]
        },
        {
            name: "Fiji Islands",
            description: "A tropical paradise with turquoise waters, white sandy beaches, and abundant marine life. Perfect for a relax vacation.",
            price: "€2,100",
            climate: "Tropical maritime. Hot and humid year-round (25-30°C). Rainy season from November to April.",
            imageUrl: "images/pack5.webp",
            packageIncludes: [
                "8 nights in a beachfront resort",
                "Half-board meal plan",
                "Snorkeling & diving excursions",
                "Island hopping tour",
                "Traditional Kava ceremony"
            ]
        },
        {
            name: "Patagonia, Argentina",
            description: "Breathtaking landscapes of glaciers, mountains, and lakes. Ideal for hikers and wilderness lovers.",
            price: "€2,900",
            climate: "Cold temperate and very windy. Cool summers (10-15°C), harsh winters with strong snowfall (0-5°C).",
            imageUrl: "images/pack6.webp",
            packageIncludes: [
                "7 nights in an eco-friendly lodge",
                "Full board meals",
                "Guided glacier trekking (Perito Moreno)",
                "Hiking in Torres del Paine",
                "Internal flights in Argentina"
            ]
        },
        {
            name: "Vancouver, Canada",
            description: "A cosmopolitan city surrounded by mountains and ocean, with endless outdoor adventure opportunities.",
            price: "€1,650",
            climate: "Temperate oceanic. Dry and mild summers (20-25°C), wet and rainy winters (5-10°C).",
            imageUrl: "images/pack7.webp",
            packageIncludes: [
                "6 nights in a downtown Vancouver hotel",
                "Rocky Mountains day trip",
                "Capilano Suspension Bridge tickets",
                "Whale watching tour",
                "Local transit pass"
            ]
        },
        {
            name: "Marrakech, Morocco",
            description: "An explosion of colors, scents, and sounds. Explore vibrant souks, historic palaces, and the desert atmosphere.",
            price: "€950",
            climate: "Semi-arid. Very hot and dry summers (30-45°C), mild winters (10-20°C).",
            imageUrl: "images/pack8.webp",
            packageIncludes: [
                "4 nights in a traditional Riad",
                "Daily Moroccan breakfast",
                "Guided souk & Medina tour",
                "Day trip to Agafay Desert",
                "Cooking class with local chef"
            ]
        },
        {
            name: "New York City, USA",
            description: "The city that never sleeps. Iconic, energetic, and full of world-class culture, shopping, and entertainment.",
            price: "€1,400",
            climate: "Humid continental. Hot and humid summers (25-30°C), cold winters with snow (0-5°C). Pleasant spring and autumn.",
            imageUrl: "images/pack9.webp",
            packageIncludes: [
                "6 nights in a Midtown Manhattan hotel",
                "Broadway show tickets",
                "Empire State Building access",
                "Statue of Liberty ferry tour",
                "Shopping discount vouchers"
            ]
        },
        {
            name: "Barcelona, Spain",
            description: "A vibrant mix of modernist architecture, urban beaches, art, delicious Catalan cuisine and the infectious energy of Mediterranean life.",
            price: "€899",
            climate: "Mediterranean climate. Hot and humid summers (25-30°C), mild and dry winters (8-15°C).",
            imageUrl: "images/pack10.webp",
            packageIncludes: [
                "4 nights in a central boutique hotel",
                "Sagrada Familia skip-the-line tickets",
                "Park Güell entrance",
                "Tapas walking tour",
                "Beach access & relaxation time"
            ]
        },
        {
            name: "Iceland, Northern Lights Quest",
            description: "An Arctic adventure with volcanic landscapes, geysers, geothermal lagoons, and the magic of the Northern Lights.",
            price: "€2,300",
            climate: "Subpolar oceanic. Cool summers (10-15°C), mild but very windy and snowy winters (0-5°C).",
            imageUrl: "images/pack11.webp",
            packageIncludes: [
                "5 nights in a Reykjavik hotel",
                "Guided Northern Lights tour",
                "Golden Circle tour with Blue Lagoon",
                "Glacier hike experience",
                "Airport transfers"
            ]
        },
        {
            name: "Cape Town, South Africa",
            description: "An iconic city at the foot of Table Mountain, with magnificent beaches, vineyards, and rich history.",
            price: "€1,950",
            climate: "Mediterranean. Hot and dry summers (20-25°C), mild and rainy winters (8-15°C).",
            imageUrl: "images/pack12.webp",
            packageIncludes: [
                "7 nights in a luxury guesthouse",
                "Table Mountain cable car tickets",
                "Cape Peninsula full-day tour",
                "Winelands tasting experience",
                "Robben Island ferry & museum"
            ]
        }
    ];


    function displayTravelPackages() {
        const packagesContainer = document.querySelector('.travel-packages');

        if (packagesContainer) {
            packagesContainer.innerHTML = '';

            travelDestinations.forEach(trip => {
                const card = document.createElement('article');
                card.classList.add('package-card');

                card.innerHTML = `
                    <figure class="package-image">
                        <img src="${trip.imageUrl}" alt="${trip.name}" loading="lazy">
                        <figcaption>${trip.name}</figcaption>
                    </figure>
                    <div class="package-info">
                        <h3>${trip.name.split(',')[0]}</h3> <p>${trip.description}</p>
                        <p class="package-price">Price from: ${trip.price}</p>
                        <div class="package-includes">
                            <h4>Package includes:</h4>
                            <ul>
                                ${trip.packageIncludes.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                            <h4>Climate:</h4>
                            <p>${trip.climate}</p>
                        </div>
                        <a href="contact.html" class="contact-btn">Contact Us</a>
                    </div>
                `;
                packagesContainer.appendChild(card);
            });
        }
    }

    if (window.location.pathname.includes('travels.html')) {
        displayTravelPackages();
    }
}); 