console.log('Carousel Object exercise')

let slides = [  
'./img/Barcellona.jpg',
'./img/Berlino.jpg',
'./img/Londra.jpg',
'./img/Parigi.jpg',
'./img/Roma.jpg'
]
console.log(slides)

let activeSlide = 0

//Recupero dal DOM il carosello
const carousel = document.querySelector('.carousel')
console.log(carousel)

for (let i = 0; i < slides.length; i++){

    let images = slides[i]
    console.log(images)

    let addClass = 'slide'

    if (i === activeSlide){

        addClass += 'active'
    }

    const domElement = 
    `<div class = "${addClass}">
        <img src = "${images}" alt= "">
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



// let citySlides = document.createElement('div')
// console.log(citySlides)
// citySlides.classList.add('.slide')
// let slideContent = document.createElement('img')
// console.log(slideContent)
// slideContent.src = slides [activeSlide]
// citySlides.appendChild(slideContent)
// carousel.appendChild(citySlides)
//document.body.prepend(carousel)

// Agganciamo gli eventi alle frecce
rightArrow.addEventListener('click', function(){
    console.log('click')
    
    let currentSlide = citySlides.length - 1
    console.log (currentSlide)

    //Nascondo la slide attiva
    console.log(citySlides[activeSlide])
    citySlides[activeSlide].classList.remove('active')

    if(activeSlide < currentSlide){

        activeSlide += 1
    }else{

        activeSlide = 0
    }

    //Mostro la slide successiva
    console.log(citySlides[activeSlide])
    citySlides[activeSlide].classList.add('active')

})

leftArrow.addEventListener('click', function(){
    console.log('click')

    // Nascondo la slide attiva
    console.log(citySlides[activeSlide])
    citySlides[activeSlide].classList.remove('active')

    if(activeSlide > 0){

        activeSlide--
    }else{

        activeSlide = citySlides.length - 1
    }

    //Mostro l'immagine precedente
    console.log(citySlides[activeSlide])
    citySlides[activeSlide].classList.add('active')

})
