
let navbar = document.querySelector('.navbar')
let navbarBtn = document.querySelector('.fa-bars')
const banner = document.querySelector('.banner__container')

const carousel = document.querySelector('.carousel__wrapper')
const swiper = document.querySelector('.swiper')

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const navbarItems = document.querySelectorAll('.nav__links a')

const videoContainer = document.querySelector('#video__container')
const videoWrapper = document.querySelector('.video__wrapper')
const videoPlayBtn = document.querySelector('.video__play__btn')
const videoCloseBtn = document.querySelector('.fa-close')


const tabs = document.querySelectorAll('.tab')
const portfolioContainer = document.querySelector('.portfolio__imgs__container')

const slideWidth = window.innerWidth;
let direction;
let teamDirection;


const portfoioData = [
    {
        id: 1,
        img: 'https://affapress.com/templates/upsite_responsive_corporate_landing_page/html/header_1/images/content/portfolios/thumb/1.jpg',
        category: 'Entertainment',
    },
    {
        id: 2,
        img: 'https://affapress.com/templates/upsite_responsive_corporate_landing_page/html/header_1/images/content/portfolios/thumb/2.jpg',
        category: 'Creative, Mobile',
    },
    {
        id: 3,
        img: 'https://affapress.com/templates/upsite_responsive_corporate_landing_page/html/header_1/images/content/portfolios/thumb/3.jpg',
        category: 'Entertainment',
    },
    {
        id: 4,
        img: 'https://affapress.com/templates/upsite_responsive_corporate_landing_page/html/header_1/images/content/portfolios/thumb/4.jpg',
        category: 'Entertainment, Mobile',
    },
    {
        id: 5,
        img: 'https://affapress.com/templates/upsite_responsive_corporate_landing_page/html/header_1/images/content/portfolios/thumb/5.jpg',
        category: 'Creative, Mobile',
    },
    {
        id: 6,
        img: 'https://affapress.com/templates/upsite_responsive_corporate_landing_page/html/header_1/images/content/portfolios/thumb/6.jpg',
        category: 'Creative, Entertainment',
    },
    {
        id: 7,
        img: 'https://affapress.com/templates/upsite_responsive_corporate_landing_page/html/header_1/images/content/portfolios/thumb/7.jpg',
        category: 'Creative',
    },
    {
        id: 8,
        img: 'https://affapress.com/templates/upsite_responsive_corporate_landing_page/html/header_1/images/content/portfolios/thumb/8.jpg',
        category: 'Mobile',
    },
]


document.addEventListener('scroll', () => {
    if (window.innerWidth > '800') {
        if (window.scrollY === 0) {
            navbar.style.height = '100px'
            navbar.style.backgroundColor = 'transparent'
        } else if (window.scrollY !== 0) {
            navbar.style.height = '70px';
            navbar.style.backgroundColor = '#000000d5'
        }
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

navbarBtn.addEventListener('click', () => {
    if (navbar.classList.contains("expanded-div")) {
        navbar.classList.remove("expanded-div");
      } else {
        navbar.classList.add("expanded-div");
      }
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

next.addEventListener('click', function () {
    nextSlide()
})

// let time = setInterval(() => {
//     nextSlide()
// }, 3000);

swiper.addEventListener('transitionend', () => {

    if (direction === -1) {
        swiper.appendChild(swiper.firstElementChild)
    } else if (direction === 1) {
        swiper.prepend(swiper.lastElementChild)
    }

    swiper.style.transition = 'none'
    swiper.style.transform = 'translate(0)'
    setTimeout(() => {
        swiper.style.transition = 'all .5s'
    })
})

videoPlayBtn.addEventListener('click', () => {
    videoWrapper.classList.add('videoActive')
    videoContainer.classList.add('videoActive')
    document.body.style.overflow = 'hidden'
})

videoCloseBtn.addEventListener('click', () => {
    videoWrapper.classList.remove('videoActive')
    videoContainer.classList.remove('videoActive')
    document.body.style.overflow = 'auto'
})














function updatePortfolio(category) {
    const filteredData = category === 'All Works' ? portfoioData : portfoioData.filter(i => i.category.split(', ').includes(category))
    portfolioContainer.innerHTML = ''

    filteredData.forEach(item => {
        const portfolioItem = document.createElement('div')
        portfolioItem.classList.add('portfolioImg')
        portfolioItem.innerHTML = `<img src="${item.img}" alt="Portfolio Item ${item.id}">`
        portfolioContainer.appendChild(portfolioItem)

        portfolioItem.addEventListener('mouseenter', () => {
            portfolioItem.classList.add('img__hover');
            const imgDesc = document.createElement('div');
            imgDesc.classList.add('img__desc');
            imgDesc.innerHTML = `Portfolio Item ${item.id} <br> ${item.category}`;
            portfolioItem.appendChild(imgDesc);
        });

        portfolioItem.addEventListener('mouseleave', () => {
            portfolioItem.classList.remove('img__hover');
            const imgDesc = portfolioItem.querySelector('.img__desc');
            if (imgDesc) {
                portfolioItem.removeChild(imgDesc);
            }
        });

    })

}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('tab_menu_active'));
        tab.classList.add('tab_menu_active');
        updatePortfolio(tab.getAttribute('data-category'));
    });
});
tabs[0].classList.add('tab_menu_active')

updatePortfolio('All Works')
