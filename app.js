// Grabs the "START" button and the "NEW CARD" button
const startGameBtn = document.getElementById("start-btn")
const newCardBtn = document.getElementById("new-card-btn")

// Grabs the text
let gameText = document.getElementById("game-text")

let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")

let alive = false
let blackjack = false

let cards = []

let sum = 0

startGameBtn.addEventListener("click", function () {

    renderGame()
    getRandomCard()
    
    gameText.textContent = "Want to draw another card?"
})

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    cardsEl.textContent += " " + randomNum

    cards.push(randomNum)

    for (let i = 0; i < cards.length; i++) {
        sum += cards[i]
    }


    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
}

function renderGame() {
    newCardBtn.addEventListener("click", function () {
        getRandomCard()
    })
}
