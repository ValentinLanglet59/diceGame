const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const dice1 = document.getElementById("player1Dice");
const dice2 = document.getElementById("player2Dice");
const message = document.getElementById("message")


let player1Score = 0;
let player2Score = 0;
let player1Turn = true;


rollBtn.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        dice1.textContent = randomNumber
        message.textContent = "Player 2 turn"
        dice1.classList.remove('active')
        dice2.classList.add('active')

    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        dice2.textContent = randomNumber
        message.textContent = "Player 1 turn"
        dice2.classList.remove('active')
        dice1.classList.add('active')
    }
    player1Turn = !player1Turn

    if (player1Score >= 20) {
        message.textContent = "player 1 won !"
        rollBtn.style.display = 'none'
        resetBtn.style.display = 'block'

    } else if (player2Score >= 20) {
        message.textContent = "player 2 won"
        rollBtn.style.display = 'none'
        resetBtn.style.display = 'block'
    }
})

resetBtn.addEventListener('click', () => {
    resetGame()
})

const resetGame = () => {
     player1Score = 0;
     player2Score = 0;
     dice1.textContent = "-"
     dice2.textContent = "-"
     player1Scoreboard.textContent = player1Score
     player2Scoreboard.textContent = player2Score
     rollBtn.style.display = 'block'
     resetBtn.style.display = 'none'
     dice2.classList.remove('active')
     dice1.classList.add('active')
}