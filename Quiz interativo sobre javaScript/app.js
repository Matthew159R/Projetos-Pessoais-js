const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')
const info = document.querySelectorAll('.card')
const popup = document.querySelector('.overlay')
const button = document.querySelector('.buttonRemove ')

form.addEventListener('submit', event => {
    event.preventDefault()

    const correctAnswers = ['C', 'C', 'D', 'C']

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]
    
    let score = 0

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 25
        }
    

    scrollTo(0, 0)
    })
    let count = 0

    const timer = setInterval(() => {
        if (count === score) {
            clearInterval(timer)

            setTimeout(() => {
                popup.classList.remove('d-none')
                popup.querySelector('.sim').addEventListener('click', () => {
                    info.forEach(card => {
                        card.classList.remove('d-none')
                    })
                    popup.classList.add('d-none')
                })
                popup.querySelector('.nao').addEventListener('click', () => {
                    popup.classList.add('d-none')
                })
            }, 1000)
 
        popup.querySelector('.nao').addEventListener('click', () => {
        popup.classList.add('d-none')
        })
        }
        result.classList.remove('d-none')
        result.querySelector('span').textContent = ` ${count}`

        count++
    }, 20)

    button.textContent = 'Você foi bem =)'
    button.disabled = true
    button.style.border = 'solid 5px green'

})

info.addEventListener('click', )