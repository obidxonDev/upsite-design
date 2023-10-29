
let navbar = document.querySelector('.navbar')
const banner = document.querySelector('.banner__container')
const swiper = document.querySelector('.swiper')
const oneSlider = document.querySelectorAll('.carousel__slide')
const carousel = document.querySelector('.carousel__wrapper')

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const navbarItems = document.querySelectorAll('.nav__links a')

const slideWidth = window.innerWidth;
let direction;

document.addEventListener('scroll', () => {
    if(window.scrollY === 0){
        navbar.style.height = '100px'
        navbar.style.backgroundColor = 'transparent'
    } else if(window.scrollY !== 0) {
        navbar.style.height = '70px';
        navbar.style.backgroundColor = '#000000d5'
    }
})


navbarItems.forEach(i => {
    i.addEventListener('click', (e) => {
        e.preventDefault()

        navbarItems.forEach(i => {
            i.classList.remove('active')
        })
        
        i.classList.add('active')

        var targetId = i.getAttribute('href').substring(1);

        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    })
})


prev.addEventListener('click', () => {
    direction = 1
    carousel.style.justifyContent = 'flex-end'
    swiper.style.transform = 'translateX(100%)'
})

function nextSlide() {
    direction = -1
    carousel.style.justifyContent = 'flex-start'
    swiper.style.transform = 'translateX(-100%)'
}

next.addEventListener('click', function() {
    nextSlide()
})

let time = setTimeout(() => {
    nextSlide()
}, 3000);

swiper.addEventListener('transitionend', () => {

    if(direction === -1){
        swiper.appendChild(swiper.firstElementChild)
    } else if(direction === 1){
        swiper.prepend(swiper.lastElementChild)
    }

    swiper.style.transition = 'none'
    swiper.style.transform = 'translate(0)'
    setTimeout(() => {
        swiper.style.transition = 'all .5s'
    })
})

