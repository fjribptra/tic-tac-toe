const buttons = document.querySelectorAll('button')
const p = document.querySelector('p')
const randomNumber = Math.floor(Math.random() * 2)
const boardData = ['','','','','','','','','']
let xIsNext = randomNumber === 1 ? true : false
let value
let x
let winner

setInterval(() => {
    ifTie()
    ifWinner()
}, 0);

function ifWinner() {
    if(winner) p.innerHTML = `Winner is ${winner}`
}

function ifTie() {
    if(!boardData.includes('')) {
        p.innerHTML = `Tie!! Play again`
    }
}

function setXIsNext() {
    xIsNext = !xIsNext
}

function setBoardData(i) {
    boardData[i] = value
}

function setX(button, i) {
    if(winner) return
    if(button.innerHTML) return
    setXIsNext()
    xIsNext ? value = 'X': value = 'O'
    button.innerHTML = value
    value === 'X' ? button.classList = 'x' : 'o'
    setBoardData(i)
}

buttons.forEach((button, i) => {
    button.addEventListener('click', function() {
        setP()
        setX(button, i)
        setWinner()
        console.log(boardData)
    })
})

function setWinner() {
    winner = winnerCalculate()
}

function winnerCalculate() {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i=0; i<lines.length; i++) {
        const [a, b, c] = lines[i]
        if(boardData[a] && boardData[a] === boardData[b] && boardData[a] === boardData[c]) {
            return value
        }
    }
}

function setP() {
    return p.innerHTML = `Go ${xIsNext ? 'X' : 'O'}`
}

