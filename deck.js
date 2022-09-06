let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
console.log(cardEl)

function startGame(){
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card!"

    }
    else if (sum === 21) {
        message = "BlackJack"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game"
        isAlive = false
    }

    messageEl.textContent = message 
}

function newCard() {
    message = "Drawing a new card from the deck!"
    let card = 7
    sum += card
    renderGame()
}