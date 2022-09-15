//player object
let player = {
    name: "Gabe",
    chips: 145
} 

//first card array
let cards = []
let sum = 0

let hasBlackJack = false //boolean: start game at 0 
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//player $$ chips 
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//Use getRandomCard() to set the values of firstCard and secondCard
function getRandomCard(){
   let randomNumber =  Math.floor(Math.random() * 13 ) + 1

    //If Ace --> 
    //If faceCard ---> 10
   if (randomNumber > 10 ){
    return 10

   } else if (randomNumber === 1){
    return 11

   }else {
   return randomNumber
    }
}



function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    //loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }


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

//"Hit" when user wants an extra card 
function newCard() {
    if (isAlive === true && hasBlackJack === false){

    //set Value of new card
    let card = getRandomCard()
    sum += card

    // Push the card to the cards array
    cards.push(card)
    renderGame()

    }
}