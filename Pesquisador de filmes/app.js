const apiKey = '15f9ef49'
const endPoint = inputValue => {
    return `http://www.omdbapi.com/?apikey=${apiKey}&plot=full&t=${inputValue}&plot=full&language=pt-br`
    
}

const form = document.querySelector('form')
const containerMoovie = document.querySelector('.container')

form.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.search.value

    while (containerMoovie.firstChild) {
        containerMoovie.removeChild(containerMoovie.firstChild)
      }

      containerMoovie.style.animation = 'container-animation 2s forwards'

    const getMoovie = async () => {
        try {
            const response = await fetch(endPoint(inputValue))

            return await response.json()
        }catch (error) {
            console.log(error)
        }
    }

    const setMoovie = async moovieName => {
     getMoovie(moovieName)
        .then(data => {
            console.log(data)
            const moovieName = inputValue
            const { Poster:MoovieImg } = data
            const { Actors } = data
            const { imdbRating:avaliation } = data
            const { Plot } = data
            
            const informationOfMoovie = `
            <div class="top">
            <div class="centerDetail">
                <p>Detalhes do filme</p>
            </div>
            <img src="${MoovieImg}" alt="${moovieName}" class="MoovieImg">
        </div>

        <div class="bottom">
            <div class="content1 actorsName">
                <p>Atores: ${Actors}</p>
            </div>
            <div class="content2 MoovieNameAndAvaliacion">
                <p>${moovieName}</p>
                <div class="avaliation">
                    <p>${avaliation}</p>
                    <img src="/avaliação.png" alt="" class="star">
                </div>
            </div>
            <div class="content3 sinopseAndBuyButton">
                <p>${Plot}</p>
                <button>Comprar ingresso</button>
            </div>
        </div>
        `
        containerMoovie.insertAdjacentHTML('afterbegin', informationOfMoovie)
        })
        .catch(error => console.log(error))
    }
    setMoovie()

})

