/* 

const message = document.querySelector('.message')

console.log(message)
console.log(message.textContent)

message.textContent = 'Hello'

console.log(message.textContent)

const input = document.querySelector('.guess')
*/

const check = document.querySelector('.check')
const message = document.querySelector('.message')
const secretNumber = document.querySelector('.number')
const body = document.querySelector('body')
const scoreValue = document.querySelector('.score')
const again = document.querySelector('.again')
const highScoreValue = document.querySelector('.highscore')

let randomValue = Math.floor(Math.random() * 19) + 1;

let score = 20
let highScore = 0

// secretNumber.textContent = randomValue

const displayMessage = (string) => {
    message.textContent = string
}

// Main logic of the game
check.addEventListener('click', () => {
    const input = Number(document.querySelector('.guess').value)

    console.log('value ', input, typeof input)


    // input is empty

    // WORK ON THIS
    // if (!input) {
    //     message.textContent = 'Input number first, dude !'
    // }


    // correct number guessed

    if (input === randomValue) {
        secretNumber.textContent = randomValue
        displayMessage('Correct number guessed, congrats !')

        body.style.backgroundColor = '#60b347'
        secretNumber.style.width = '30rem'

        if (score > highScore) {
            highScore = score
            highScoreValue.textContent = highScore
        }
    }


    if (input !== randomValue) {
        if (score > 1) {
            displayMessage(input > randomValue ? 'Number too high' : 'Number too low')

            score--
            scoreValue.textContent = score
        } else {
            displayMessage('You lost, sorry')
            scoreValue.textContent = 0
        }
    }

    // // number higher than guessed

    // if (input > randomValue) {
    //     if (score > 1) {
    //         message.textContent = 'Number too high'

    //         score--
    //         scoreValue.textContent = score
    //     } else {
    //         message.textContent = 'You lost, sorry'
    //         scoreValue.textContent = 0
    //     }
    // }


    // // number lower than guessed

    // if (input < randomValue) {
    //     if (score > 1) {
    //         message.textContent = 'Number too low'

    //         score--
    //         scoreValue.textContent = score
    //     } else {
    //         message.textContent = 'You lost, sorry'
    //         scoreValue.textContent = 0
    //     }
    // }
})


// Reset functionality
again.addEventListener('click', () => {
    const input = document.querySelector('.guess')

    randomValue = Math.floor(Math.random() * 19) + 1;
    score = 20

    input.value = ''

    displayMessage('Start guessing...')

    secretNumber.textContent = '?'
    scoreValue.textContent = score

    body.style.backgroundColor = '#222'
    secretNumber.style.width = '15rem'
})