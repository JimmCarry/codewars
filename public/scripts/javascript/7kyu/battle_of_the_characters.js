// Description:
// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

// Rules:
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Only capital characters can and will participate a battle.
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples:
//   battle("ONE", "TWO"); // => "TWO"`
//   battle("ONE", "NEO"); // => "Tie!"
//console.log('A'.charCodeAt(0))

function battle(x, y) {
    let valueX = x.split('').map(x => x.charCodeAt(0) - 64)
    .reduce((a ,b ) => a + b)

    let valueY = y.split('').map(y => y.charCodeAt(0) - 64)
    .reduce((a ,b ) => a + b)

    if (valueX > valueY) {
        return x
    } else if (valueX === valueY) {
        return 'Tie'
    } else {
        return y
    }
}

const x = 'HU'
const y = 'RCE'

// solutions of other warriors from codewars what i chose for u and me :)

// function battle(x, y) {
//     a = x.split("").map(z => z.charCodeAt(0)-64).reduce((a,b) => a+b, 0)
//     b = y.split("").map(z => z.charCodeAt(0)-64).reduce((a,b) => a+b, 0)
//     return a < b ? y : a > b ? x : "Tie!"
// }

// function battle(x, y) {
//     const warriors = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     let a = [...x].map(el => warriors.indexOf(el) + 1).reduce((a,c) => a + c)
//     let b = [...y].map(el => warriors.indexOf(el) + 1).reduce((a,c) => a + c)
    
//     return a == b ? 'Tie!' : a > b ? x : y
// }