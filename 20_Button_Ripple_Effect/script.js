//<span class="circle" style="top:0px; left:82px;"></span>

const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX     //ловим координат мышки по x и y
        const y = e.clientY

        const buttonTop = e.target.offsetTop        //координаты относительно самого элемента
        const buttonLeft = e.target.offsetLeft

        const xInside = x -buttonLeft               //координаты на площади данного элемента 
        const yInside = y - buttonTop

        const circle = document.createElement('span')       //сам эффект
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})