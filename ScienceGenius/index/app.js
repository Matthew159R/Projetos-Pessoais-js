const themeContainer = document.querySelector('.container-themes')

const themeContainerElements = Array.from(themeContainer.children)

themeContainerElements.forEach((theme, index) => {
    const lookingForButtons = Array.from(themeContainerElements[index].children)

    theme.addEventListener('click', event => {
        const clickedElement = event.target
        const lookingForButtonMostContent = clickedElement.classList.contains('button-most-content')

        if (lookingForButtonMostContent) {
            lookingForButtons.forEach(element => {
                if (element.classList.contains('most-content')) {
                    element.style.display = 'flex'
                    element.classList.remove('most-content-animation-reverse')
                    element.classList.add('most-content-animation')
                }
            })
        }
    })

    theme.addEventListener('click', event => {
        const clickedElement = event.target
        const lookingForButtonCloseContent = clickedElement.classList.contains('button-close-content')

        if (lookingForButtonCloseContent) {
            lookingForButtons.forEach(element => {
                if (element.classList.contains('most-content')) {
                    element.classList.remove('most-content-animation')
                    element.classList.add('most-content-animation-reverse')

                    setTimeout(() => {
                        element.style.display = 'none'
                    }, 100)
                }
            })
        }
    })
})