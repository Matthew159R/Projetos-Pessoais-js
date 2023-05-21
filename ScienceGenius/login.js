/*------Script form-------*/
const formForm = document.querySelector('.formForm')
const feedBack = document.querySelector('h2')
const comment = document.querySelector('.comment')
const inputEmail = document.querySelector('.email')
const inputPassword = document.querySelector('.password')
const addComment = document.querySelector('.addComment')
const formComment = document.querySelector('.sectionComment')
const username = document.querySelector('.name')
const usernameInput = document.querySelector('.email')
const avatar = document.querySelector('.avatar')

formForm.addEventListener('submit', event => {
    event.preventDefault()

    const inputEmailValue = event.target.email.value
    const inputPasswordValue = event.target.password.value
    

    if (!inputEmailValue || !inputPasswordValue) {
        feedBack.classList.remove('success')
        feedBack.classList.add('error')
        feedBack.textContent = 'Todos os dados precisam ser preenchidos =('
    }else {
        feedBack.classList.add('success')
        feedBack.classList.remove('error')
        feedBack.textContent = 'Dados enviados! =)'
        addComment.style.display = 'block'
        comment.style.display = 'block'
        formForm.style.display = 'none'
    }
})





