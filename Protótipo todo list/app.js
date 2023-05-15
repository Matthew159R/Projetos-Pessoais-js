let containerTodos = document.querySelector('.todos-list-container')
const todos = document.querySelectorAll('.todo')
const addTodoIcon = document.querySelector('.add-icon')
const addTodoInput = document.querySelector('.add')
const closeAddInput = document.querySelector('.closeAdd')
const addDescriptionInput = document.querySelector('.addDescription')
const addForm = document.querySelector('.addForm')
const buttonAddTodo = document.querySelector('button')

todos.forEach(todo => {
    const todoElements = Array.from(todo.children)
    const checkListButtons = document.querySelectorAll('.check')

    checkListButtons.forEach(checkListButton => {
        checkListButton.addEventListener('click', event => {
            event.target.parentElement.remove()
        })
    }) 
})


addTodoIcon.addEventListener('click', event => {
    addTodoInput.style.animation = ''
    addDescriptionInput.style.animation = ''
    event.target.style.display = 'none'
    addTodoInput.style.display = 'flex'
    addDescriptionInput.style.display = 'flex'
    closeAddInput.style.display = 'flex'

    setTimeout(() => {
        buttonAddTodo.style.display = 'flex'
    }, 800)
})

closeAddInput.addEventListener('click', event => {
    addTodoInput.style.animation = ''
    addDescriptionInput.style.animation = ''
    addTodoInput.style.animation = 'add-todo-animation-close 1s forwards'
    addDescriptionInput.style.animation = 'add-todo-animation-close 1s forwards'
    buttonAddTodo.style.display = 'none'

    setTimeout(() => {
        event.target.style.display = 'none'
        addTodoInput.style.display = 'none'
        addDescriptionInput.style.display = 'none'
        addTodoIcon.style.display = 'flex'
    }, 800)
})

addForm.addEventListener('submit', event => {
    event.preventDefault()
    const nameTodo = event.target.add.value
    const descriptionTodo = event.target.addDescription.value

    const newTodo = `   <div class="todo">
                            <img src="icons/close.png" class="check">
                            <h2>${nameTodo}</h2>
                            <p>${descriptionTodo}</p>
                            <div class="priority"><img src="icons/priority-todo.png"></div>
                        </div>`

    if (!nameTodo || !descriptionTodo) {
        alert('Digite algo')
    }else {
        containerTodos.insertAdjacentHTML('afterbegin', newTodo)
    }
})
