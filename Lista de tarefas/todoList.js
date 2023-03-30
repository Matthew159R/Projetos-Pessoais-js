const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearch = document.querySelector('.form-search input')


formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()
    if(inputValue.length) {
        todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt delete"></i>
          </li>
        `
        event.target.reset()
       
    }
})

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target

    if (Array.from(clickedElement.classList).includes('delete')) {
        const li = clickedElement.parentElement
        li.innerHTML = `<s>${li.textContent}</s>`
        li.style.color = '#ea868f'
        li.style.backgroundColor = '#2c0b0e'
        setTimeout(() => {
            li.remove()
        }, 1000)
        
    }
})

inputSearch.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()
    Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
        todo.classList.remove('d-flex')
        todo.classList.add('hidden')
    })
    Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
        todo.classList.remove('hidden')
        todo.classList.add('d-flex')
    })
})



