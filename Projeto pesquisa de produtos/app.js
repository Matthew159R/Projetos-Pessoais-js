const form = document.querySelector('form')
const search = document.querySelector('.form-control')
const spanProduct = document.querySelector('.product')
const spanPrice = document.querySelector('.price')
const price =  document.querySelector('.alert-warning')
const productt = document.querySelector('.alert-secondary')
const Alert = document.querySelector('.sugestão')
const buttonAllProducts = document.querySelector('.allProducts')
const ul = document.querySelector('ul')

const getProducts = url => new Promise((resolve, reject) => {
    const requestProducts = new XMLHttpRequest()

    requestProducts.addEventListener('readystatechange', () => {
        
        if (requestProducts.readyState === 4) {

            if (requestProducts.status === 200) {
                const dataProducts = JSON.parse(requestProducts.responseText)
                resolve(dataProducts)
            }else {
                reject('Não foi possível obter os dados por algum motivo')
            }
        }
    })

    requestProducts.open('GET', url)
    requestProducts.send()
})

let click = 0
form.addEventListener('submit', event => {
    event.preventDefault()
    const userSearch = search.value.trim()
    click = 0
    ul.textContent = ''

    getProducts('products.json')
        .then(data => {
            if (userSearch.length === 0) {
                //Programar um popup aqui
                price.style.display = 'none'
                productt.style.display = 'none'
            }else {
            const userSearchLower = userSearch.toLowerCase()
            const result = data.filter(product => product.Nome.toLowerCase().includes(userSearchLower))

            if (result.length === 0) {
                //Programar um popup aqui
                price.style.display = 'none'
                productt.style.display = 'none'
            }else {
            result.forEach(product => {
                Alert.textContent = ''
                Alert.style.backgroundColor = 'gray'
                spanProduct.textContent = product.Nome
                spanPrice.textContent = ` R$${product.Preço}`
                price.style.display = 'flex'
                productt.style.display = 'flex'
            })
        }
        }


    
  })
        .catch(ERROR => console.log(ERROR))

        search.value = ''

  
})
    

search.addEventListener('keyup', event => {
    const inputValue = event.target.value.trim()
    getProducts('products.json')
        .then(data => {
    const result = data.filter(product => product.Nome.toLowerCase().includes(inputValue))
    result.forEach(todo => {

        if (inputValue.length === 0) {
            Alert.textContent = ''
        }else {
            Alert.textContent = ''
            Alert.textContent = todo.Nome
        }
    })
})
})

Alert.addEventListener('click', () => {
    search.value = Alert.textContent
})


buttonAllProducts.addEventListener('click', () => {
    click += 1
    if (click >= 2) {
        buttonAllProducts.disabled
    }else {
    getProducts('products.json').then(data => {
        data.forEach(todo => {
            const li = document.createElement('li')
            li.textContent = todo.Nome
            ul.appendChild(li)
        })
    })
}
})