const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')

const days = ['Понидельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение']

const months = ['января', 'февраля', 'марта','апреля', 'мая', 'июня','июля', 'августа', 'сентября','октября', 'ноября', 'декабря']

toggleEl.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})


function setTime() {            //Получаем время и делим их по частям  в переменных
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    hourEl.style.transform =`translate(-50%, -100%) rotate(${scale(hours, 0, 11, 0, 360)}deg)`  //для стерлки часов с формулой

    minuteEl.style.transform =`translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`//для стерлки минут с формулой

    secondEl.style.transform =`translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)` //для стерлки секунд с формулой

    timeEl.innerHTML = `${hours}:${minutes}:${seconds}`   // < 10 ? `0 ${minutes}` : minutes

    dateEl.innerHTML = `${days[day]} <span class="circle">${date}</span> ${months[month]} ` 
}

// специальная формула для расчета  в css свойстве transfrom rotate(), стрелки будут правильно отображать
function scale (number, inMin, inMax, outMin, outMax) {             
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime()


//ставим интервал для каждой секунды
setInterval(setTime, 1000);
