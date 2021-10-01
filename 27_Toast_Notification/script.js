const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Привет',
    'Здравствуй',
    'Нихау',
    'Ку еще раз'
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
   const notif = document.createElement('div')
   notif.classList.add('toast')
   notif.classList.add(type ? type : getRandomTypes())

   notif.innerText = message ? message : getRandomMessages()

   toasts.appendChild(notif)

   setTimeout(() => {
       notif.remove()
   }, 1500)
}

function getRandomMessages() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomTypes() {
    return types[Math.floor(Math.random() * types.length)]
}