// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

const n = 348597

function digitize(n) {
    return n.toString().split('').reverse().map(char => Number(char))
}

digitize(n)
// solutions of other warriors from codewars what i chose for u and me :)