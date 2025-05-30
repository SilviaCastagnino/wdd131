document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;



const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active')
})

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rome, Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
    {
        templeName: "London, England",
        location: "London, England",
        dedicated: "1953, August, 10",
        area: 42652,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-4243-main.jpg"
    },
    {
        templeName: "Bern, Switzerland",
        location: "Bern, Switzerland",
        dedicated: "1955, September, 9",
        area: 35546,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
    },
    {
        templeName: "Budapest, Hungary",
        location: "Budapest, Hungary",
        dedicated: "2025, June, 21",
        area: 18000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/budapest-hungary-temple/budapest-hungary-temple-58578-main.jpg"
    },
    {
        templeName: "Madrid, Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19",
        area: 45800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
    }
];

createTempleCard(temples);

const allTemple = document.querySelector('#all');
allTemple.addEventListener("click", () => {
    createTempleCard(temples);
});

const oldTemple = document.querySelector('#old');
oldTemple.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900));
});

const newTemple = document.querySelector('#new');
newTemple.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000));
});

const largeTemple = document.querySelector('#large');
largeTemple.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

const smallTemple = document.querySelector('#small');
smallTemple.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});

function createTempleCard(filteredTemples) {
    let main = document.querySelector('main');
    main.innerHTML = `
    <h2>Home</h2>
    `;
    filteredTemples.forEach(temple => {
        let div = document.createElement('div');
        div.className = "card-temple";
        div.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p>LOCATION: <span>${temple.location}</span></p>
        <p>DEDICATED: <span>${temple.dedicated}</span></p>
        <p>AREA: <span>${temple.area}</span></p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `
        main.appendChild(div);
    });
}