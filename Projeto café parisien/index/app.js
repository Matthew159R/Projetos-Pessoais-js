
/*
const mainCoffes = document.querySelector('.mainCoffes')

const mainCoffesElements = Array.from(mainCoffes.children)

mainCoffesElements.forEach(element => {
    
    element.addEventListener('mouseover', () => {       
        element.classList.add('caixaTravada')
        
        setTimeout(() => {

            element.style.animation = 'h'

        }, 500)
    })

    element.addEventListener('mouseout', () => {
        element.classList.remove('caixaTravada')
        element.style.animation = 'jump 0.5s ease-in-out'
    })
})
*/
const navBar = document.querySelector('nav')

const navBarElements = Array.from(navBar.children)

const titleSectionCoffes = document.querySelector('.titleSectionCoffes')

navBarElements.forEach(element => {
    if (element.textContent.includes('Cafés')) {
        element.addEventListener('click', () => {
            titleSectionCoffes.scrollIntoView()
        })
    }
})


/* 
const desenvolvimento = document.querySelector('span')


setInterval(() => {

    setTimeout(() => {
        desenvolvimento.textContent = ' '
    }, 200)

    setTimeout(() => {
        desenvolvimento.textContent += '.'
    }, 400)

    setTimeout(() => {
        desenvolvimento.textContent += '.'
    }, 600)

    setTimeout(() => {
        desenvolvimento.textContent += '.'
    }, 800)
}, 800)

*/