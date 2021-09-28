const panels = document.querySelectorAll('.panel')      //Коллекция классов с селектором .panel

panels.forEach((panel) => {                     //перебираем каждые дочерние классы
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}