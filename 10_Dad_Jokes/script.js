const jokeEL = document.getElementById('joke')
const jokeBtn = document.getElementById('jokebtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// с использованием Async/Await

async function generateJoke() {
    const config = {
        headers : {
            'Accept' : 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)   

    const data = await res.json()

    jokeEL.innerHTML = data.joke
}


//  function generateJoke() {
//     const config = {
//         headers : {
//             'Accept' : 'application/json'
//         }
//     }


//     fetch('https://icanhazdadjoke.com', config)     //АПИ запрос на сайт
//         .then(res => res.json())                    //получаем
//         .then(data => {
//             jokeEL.innerHTML = data.joke
//         })
// }