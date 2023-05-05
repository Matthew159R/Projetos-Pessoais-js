const carousel = document.querySelector('.carousel')
const next = document.querySelector('.next')
const back = document.querySelector('.back')

let indexImg = 0

const imgs = Array.from(carousel.children)

next.addEventListener('click', event => {
    indexImg += 1
  
    if (indexImg > imgs.length - 1) {
        indexImg = 0
    }else if (indexImg < 0){
        indexImg = imgs.length - 1
    }


    imgs.forEach((img, index) => {
        
        if (indexImg === index) {
            if (indexImg === 0) {
                imgs[0].classList.remove('none')
                imgs[0].style.animation = 'fadeVisibility 0.5s'    
                imgs[imgs.length - 1].classList.add('none')
                imgs[imgs.length - 1].style.animation = ''

            }else {
                imgs[indexImg - 1].setAttribute('class', 'none')
                imgs[indexImg - 1].style.animation = ''
                imgs[indexImg].classList.remove('none')

                imgs[indexImg].style.animation = 'fadeVisibility 0.5s'
                console.log(indexImg, img)
            }
        }
    })
})

back.addEventListener('click', event => {
    indexImg -= 1
  
    if (indexImg > imgs.length - 1) {
        indexImg = 0
    }else if (indexImg < 0){
        indexImg = imgs.length - 1
    }


    imgs.forEach((img, index) => {
        
        if (indexImg === index) {
            if (indexImg === imgs.length - 1) {
                imgs[imgs.length - 1].classList.remove('none')
                imgs[imgs.length - 1].style.animation = 'fadeVisibility 0.5s'    
                imgs[0].classList.add('none')
                imgs[0].style.animation = ''

                console.log(indexImg, img)
            }else {
                imgs[indexImg + 1].setAttribute('class', 'none')
                imgs[indexImg + 1].style.animation = ''
                imgs[indexImg].classList.remove('none')

                imgs[indexImg].style.animation = 'fadeVisibility 0.5s'
                console.log(indexImg, img)
            }
        }
    })
})

setInterval(() => {
    next.click()
}, 2000)

const buttonBuy = document.querySelector('button')

buttonBuy.addEventListener('mouseleave', event => {
    buttonBuy.style.animation = 'buyAnimationReverse 0.5s forwards'
    buttonBuy.style.border = 'solid 1px orange'
})

const containerHamburger = document.querySelector('.containerHamburger')
const navBarHamburger = document.querySelector('.contentHamburger')
const body = document.querySelector('body')
const header = document.querySelector('.presentation')
let click = 1

containerHamburger.addEventListener('click', event => {
    click += 1
    navBarHamburger.style.animation = 'fadein 1s'
    containerHamburger.classList.toggle("change")
    
    if (click % 2 === 0) {
        navBarHamburger.style.display = 'flex'
    }else {
        navBarHamburger.style.animation = 'fadein2 1s'
        setTimeout(() => {
            navBarHamburger.style.display = 'none'
        }, 500)
    }
})

body.addEventListener('click', event => {
    const clickedElement = event.target
    if (clickedElement === header || clickedElement === body) {

        if (navBarHamburger.style.display === 'flex'){
            click += 1
            containerHamburger.classList.toggle("change")
        
        if (click % 2 === 0) {
            navBarHamburger.style.display = 'flex'
        }else {
            navBarHamburger.style.display = 'none'
        }
    }

    }
})
