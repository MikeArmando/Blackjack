// Grabs the "START" button and the "NEW CARD" button
const startGameBtn = document.getElementById("start-btn")
const newCardBtn = document.getElementById("new-card-btn")

// disables the "new card" button
document.getElementById("new-card-btn").disabled = true

// Grabs the phrase text
let gameText = document.getElementById("game-text")

// Grabs the "cards:" text and the "sum:" text
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

    let fCard = getRandomCard()
    let sCard = getRandomCard()

    cards = [fCard, sCard]
    sum = fCard + sCard

    sumEl.textContent = "Sum: " + sum

    renderGame()
})

newCardBtn.addEventListener("click", function () {
    newCard()
})

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1

    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let c = 0; c < cards.length; c++) {
        cardsEl.textContent += cards[c] + " "
    }

    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}