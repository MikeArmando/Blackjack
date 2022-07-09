// Grabs the "START" button and the "NEW CARD" button
const startGameBtn = document.getElementById("start-btn")
const newCardBtn = document.getElementById("new-card-btn")
let gameText = document.getElementById("game-text")

let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")

let alive = false
let blackjack = false

let sum

startGameBtn.addEventListener("click", function() {
    renderGame()
    gameText.textContent = "Want to draw another card?"
})

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    cardsEl.textContent += " " + randomNum

    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
}

function renderGame() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    cardsEl.textContent += " " + randomNum

    newCardBtn.addEventListener("click", function() {
        getRandomCard()
    })

    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
}
