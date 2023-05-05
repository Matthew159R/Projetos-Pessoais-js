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