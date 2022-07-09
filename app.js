const startBtn = document.getElementById("start-btn")
const newCardBtn = document.getElementById("new-card-btn")

let cards = document.getElementById("cards")
let sum = document.getElementById("sum")

newCardBtn.addEventListener("click", function() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    cards.textContent += " " + randomNum
    
    sum.textContent += randomNum

    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
})
