const clockContainer = document.querySelector('.clock-container')


const updateClock = () => {
    const present = new Date()
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()
    let conditionHours = String(hours).length === 1
    let conditionMinutes = String(minutes).length === 1
    let conditionSeconds = String(seconds).length === 1

    const clockHTML = `
        <span>${conditionHours ? `0${hours}` : hours}</span> :
        <span>${conditionMinutes ? `0${minutes}` : minutes}</span> :
        <span>${conditionSeconds ? `0${seconds}` : seconds}</span>
    ` 
    clockContainer.innerHTML = clockHTML
}

setInterval(updateClock, 1000)