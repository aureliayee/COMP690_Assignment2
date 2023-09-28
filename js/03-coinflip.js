let coinFlip = Math.round(Math.random())
let choice = prompt('Choose Heads or Tails').toUpperCase()
// console.log(coinFlip)
// console.log(choice)

if (coinFlip < 1) {
    if (choice === 'HEADS') {
        alert('The flip was heads and you chose heads...you win!')
    } else if (choice === 'TAILS'){
        alert('The flip was heads but you chose tails...you lose!')
    } else {
        alert('Please enter Heads or Tails')
    }
} else if (coinFlip >= 1) {
    if (choice === 'TAILS') {
        alert('The flip was tails and you chose tails...you win!')
    } else if (choice === 'HEADS') {
        alert('The flip was tails but you chose heads...you lose!')
    } else {
        alert('Please enter Heads or Tails')
    }
} 