const slides = [
    {
        image: 'slide1.jpg',
        tagLine:
            'Impressions tous formats <span>en boutique et en ligne</span>',
    },
    {
        image: 'slide2.jpg',
        tagLine:
            'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
    },
    {
        image: 'slide3.jpg',
        tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
    },
    {
        image: 'slide4.png',
        tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
    },
]

// Recover DOM elements
const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')
const dots = document.querySelector('.dots')
const elementImage = document.querySelector('.banner-img')
const elementTagLine = document.querySelector('#banner p')


// Calc variable
let displayedImg = 0 // cette variable correspond à l'index de l'image qui est affichée

// Init carousel
addDots()

// Display image function
function displayImage(imageNumber) {
    const imageUrl = './assets/images/slideshow/' + slides[imageNumber].image
    elementImage.setAttribute('src', imageUrl)
    elementTagLine.innerHTML = slides[imageNumber].tagLine
}

// Add dots function
function addDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div')
        dot.classList.add('dot')
        if (i === 0) {
            dot.classList.add('dot_selected')
        }
        dots.append(dot)
    }
}

// Select dot function
function dotSelect(imageNumber) {
    const dotList = document.querySelectorAll('.dot')
    for (let i = 0; i < dotList.length; i++) {
        if (i === imageNumber) {
            dotList[i].classList.add('dot_selected')
        } else {
            dotList[i].classList.remove('dot_selected')
        }
    }
}

// Events on clicks
arrowLeft.addEventListener('click', () => {
    displayedImg--
    if (displayedImg < 0) {
        displayedImg = slides.length - 1
    }
    displayImage(displayedImg)
    dotSelect(displayedImg)
})

arrowRight.addEventListener('click', () => {
    displayedImg++
    if (displayedImg > slides.length - 1) {
        displayedImg = 0
    }
    displayImage(displayedImg)
    dotSelect(displayedImg)
})
