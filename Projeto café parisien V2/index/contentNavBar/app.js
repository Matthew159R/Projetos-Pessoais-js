const carousel = document.querySelector('.carousel')
const next = document.querySelector('.next')
const back = document.querySelector('.back')

let indexImg = 0

const imgs = Array.from(carousel.children)

next.addEventListener('click', event => {
    indexImg += 1
  
    if (indexImg > 4) {
        indexImg = 0
    }else if (indexImg < 0){
        indexImg = 4
    }

    imgs.forEach((img, index) => {
        
        if (indexImg === index) {
            if (indexImg === 0) {
                imgs[0].classList.remove('none')
                imgs[0].style.animation = 'fadeVisibility 0.5s'    
                imgs[4].classList.add('none')
                imgs[4].style.animation = ''

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
  
    if (indexImg > 4) {
        indexImg = 0
    }else if (indexImg < 0){
        indexImg = 4
    }

    imgs.forEach((img, index) => {
        
        if (indexImg === index) {
            if (indexImg === 4) {
                imgs[4].classList.remove('none')
                imgs[4].style.animation = 'fadeVisibility 0.5s'    
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
}, 4000)

const buttonBuy = document.querySelector('.buy')

buttonBuy.addEventListener('mouseenter', event => {
    buttonBuy.style.animation = 'buyAnimation 0.8s forwards'
    buttonBuy.style.border = '4px solid orange'
})
buttonBuy.addEventListener('mouseleave', event => {

    if (event.target) {
        buttonBuy.style.animation = 'buyAnimationReverse 0.5s forwards'
        buttonBuy.style.border = 'solid 2px orange'
    }
})

