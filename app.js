// Grabs the "START" button and the "NEW CARD" button
const startGameBtn = document.getElementById("start-btn")
const newCardBtn = document.getElementById("new-card-btn")
document.getElementById("new-card-btn").disabled = true

// Grabs the text
let gameText = document.getElementById("game-text")

let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")

let alive = false
let blackjack = false

let sum = 0
let cards = []


startGameBtn.addEventListener("click", function () {
    document.getElementById("start-btn").disabled = true
    document.getElementById("new-card-btn").disabled = false

    alive = true

    let fCard = renderGame()
    let sCard = renderGame()

    cards = [fCard, sCard]

    sum = fCard + sCard

})

newCardBtn.addEventListener("click", function () {
    renderGame()
})

function renderGame() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    cardsEl.textContent += " " + randomNum

    sumEl.textContent = "Sum: " + sum

    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
}

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}