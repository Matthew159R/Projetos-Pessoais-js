const carouselContainer = document.querySelector('.carousel-img')
const buttonBackSlide = document.querySelector('[data-js="carousel__button--prev"]')
const buttonNextSlide = document.querySelector('[data-js="carousel__button--next"]')
const carouselImgs = Array.from(carouselContainer.children)

let indexl = 0
console.log(indexl)

buttonNextSlide.addEventListener('click', event => {
  indexl += 1

  if (indexl > 2) {
    indexl = 0
  }else if (indexl < 0){
    indexl = 2
  }

  carouselImgs.forEach((img, index) => {
    if (index === indexl) {
      if (indexl === 1) {
       carouselImgs[index - 1].classList.remove('carousel__item--visible')
       carouselImgs[index].classList.add('carousel__item--visible')
      }else if (indexl === 2) {
        carouselImgs[index - 1].classList.remove('carousel__item--visible')
        carouselImgs[index].classList.add('carousel__item--visible')
      }else if (indexl === 0) {
        carouselImgs[2].classList.remove('carousel__item--visible')
        carouselImgs[index].classList.add('carousel__item--visible')
      }
      
    }
  })
})

buttonBackSlide.addEventListener('click', event => {
  indexl -= 1

  if (indexl > 2) {
    indexl = 0
  }else if (indexl < 0){
    indexl = 2
  }

  carouselImgs.forEach((img, index) => {
    if (index === indexl) {
      if (indexl === 2) {
        carouselImgs[0].classList.remove('carousel__item--visible')
        carouselImgs[index].classList.add('carousel__item--visible')
       }else if (indexl === 1) {
         carouselImgs[index + 1].classList.remove('carousel__item--visible')
         carouselImgs[index].classList.add('carousel__item--visible')
       }else if (indexl === 0) {
         carouselImgs[index + 1].classList.remove('carousel__item--visible')
         carouselImgs[index].classList.add('carousel__item--visible')
       }
       
    }

  })
})














