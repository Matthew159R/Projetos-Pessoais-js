const form = document.querySelector('form')
const divGif = document.querySelector('.out')

form.addEventListener('submit', async event => {
  event.preventDefault()
  const inputValue = event.target.search.value

  const APIkey = 'eT0eYcINTQ4HopWOjgziXrLdqUU6QIV3'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIkey}&limit=1&q=${inputValue}`

  try {
    const response = await fetch(url)

    if(!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    const gifData = await response.json()
    const linkGif = gifData.data[0].images.downsized.url
    const img = document.createElement('img')

    img.setAttribute('src', linkGif)
    img.setAttribute('alt', gifData.data[0].title)
    img.setAttribute('class', 'gif')
    
    divGif.insertAdjacentElement('afterbegin', img)

    event.target.reset()
  }catch (error) {
    alert('Não foi possível achar esse gif :(')
  }
})
