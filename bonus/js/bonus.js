const slides = [
    {
        image: '../img/Barcellona.jpg',
        title: 'Capital of Spain',
        text: 'Park Guell',
    }, {
        image: '../img/Berlino.jpg',
        title: 'Capital of Germany',
        text: 'Porta di Brandeburgo',
    }, {
        image: '../img/Londra.jpg',
        title: 'Capital of England',
        text: 'Tower Bridge',
    }, {
        image: '../img/Parigi.jpg',
        title: 'Capital of France',
        text: 'Torre Eiffel',
    }, {
        image: '../img/Roma.jpg',
        title: 'Capital of Italy',
        text: 'Colosseo',
    }
]

// intervallo di tempo in millisecondi
const autoplayInterval = 3000

let activeSlide = 0;

// Variabile per memorizzare l'id del timer
let autoplayTimer = null

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
        `<div class="${addClass}">
        <img src="${images.image}" alt="">
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

    // ferma l'autoplay quando l'utente interagisce con le frecce
    stopAutoplay()

    let currentSlide = citySlides.length - 1
    console.log(currentSlide)

    //Nascondo la slide attiva
    console.log(citySlides[activeSlide])
    citySlides[activeSlide].classList.remove('active')

    //Controllo se l'indice della slide corrente 
    //è uguale all'indice dell'ultima slide
    if (activeSlide === citySlides.length - 1) {

        //Se true torno alla prima slide
        activeSlide = 0

    } else {
        //Se false aumentiamo i activeSlide
        activeSlide++
    }

    //Mostro la slide successiva
    console.log(citySlides[activeSlide])
    citySlides[activeSlide].classList.add('active')
})

leftArrow.addEventListener('click', function () {
    console.log('click')

    // ferma l'autoplay quando l'utente interagisce con le frecce
    stopAutoplay()

    // Nascondo la slide attiva
    console.log(citySlides[activeSlide])
    citySlides[activeSlide].classList.remove('active')

    //Controllo activeSlide === 0 
    if (activeSlide === 0) {

        //Se true imposto torno all'ultima slide
        activeSlide = citySlides.length - 1
    } else {

        //Se false diminuisco i activeSlide
        activeSlide--
    }

    //Mostro l'immagine precedente
    console.log(citySlides[activeSlide])
    citySlides[activeSlide].classList.add('active')
})

// avvia l'autoplay all'inizio
startAutoplay()




// Funzione per cambiare la slide attiva
function nextSlide() {

    citySlides[activeSlide].classList.remove('active')

    activeSlide++
    
    if (activeSlide === citySlides.length) {
        activeSlide = 0;
    }

    citySlides[activeSlide].classList.add('active')

}

// avvia l'autoplay
function startAutoplay() {
    if (autoplayTimer === null) {
        autoplayTimer = setInterval(nextSlide, autoplayInterval);
    }
}

// ferma l'autoplay
function stopAutoplay() {
    if (autoplayTimer !== null) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
    }
}