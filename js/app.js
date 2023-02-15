console.log('Carousel Object exercise')

// let slides = [  
// './img/Barcellona.jpg',
// './img/Berlino.jpg',
// './img/Londra.jpg',
// './img/Parigi.jpg',
// './img/Roma.jpg'
// ]
// console.log(slides)

const slides = [
    {
        image: './img/Barcellona.jpg',
        title: 'Capital of Spain',
        text: 'Park Guell',
    }, {
        image: './img/Berlino.jpg',
        title: 'Capital of Germany',
        text: 'Porta di Brandeburgo',
    }, {
        image: './img/Londra.jpg',
        title: 'Capital of England',
        text: 'Tower Bridge',
    }, {
        image: './img/Parigi.jpg',
        title: 'Capital of France',
        text: 'Torre Eiffel',
    }, {
        image: './img/Roma.jpg',
        title: 'Capital of Italy',
        text: 'Colosseo',
    }
];

let activeSlide = 0

//Recupero dal DOM il carosello
const carousel = document.querySelector('.carousel')
console.log(carousel)

for (let i = 0; i < slides.length; i++) {

    let images = slides[i]
    console.log(images)

    let addClass = 'slide'

    if (i === activeSlide) {

        addClass += ' active'
    }

    const domElement =
    `<div class = "${addClass}">
        <img src = "${images.image}" alt= "">
        <div class = "image-description">
            <h2>${images.title}</h2>
            <p>${images.text}</p>
        </div>
    </div>`

    carousel.innerHTML += domElement

}

//Recupero immagini dal carosello
let citySlides = document.querySelectorAll('.slide')
console.log(citySlides)

//Recupero le frecce 
const rightArrow = document.getElementById('arrow-right')
console.log(rightArrow)

const leftArrow = document.getElementById('arrow-left')
console.log(leftArrow)

// Agganciamo gli eventi alle frecce
rightArrow.addEventListener('click', function () {
    console.log('click')

    let currentSlide = citySlides.length - 1
    console.log(currentSlide)

    //Nascondo la slide attiva
    console.log(citySlides[activeSlide])
    citySlides[activeSlide].classList.remove('active')

    if (activeSlide < currentSlide) {

        activeSlide += 1
    } else {

        activeSlide = 0
    }

    //Mostro la slide successiva
    console.log(citySlides[activeSlide])
    citySlides[activeSlide].classList.add('active')

})

leftArrow.addEventListener('click', function () {
    console.log('click')

    // Nascondo la slide attiva
    console.log(citySlides[activeSlide])
    citySlides[activeSlide].classList.remove('active')

    if (activeSlide > 0) {

        activeSlide--
    } else {

        activeSlide = citySlides.length - 1
    }

    //Mostro l'immagine precedente
    console.log(citySlides[activeSlide])
    citySlides[activeSlide].classList.add('active')

})
