// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.
const array = [1, 2, 3]

function find_average(array) {
    const sum = array.reduce((acc, el) => acc + el)
    return sum / array.length
}

find_average(array)
// solutions of other warriors from codewars what i chose for u and me :)
// function find_average(array) {
//     return array.reduce((a, b) => (a + b)) / array.length;
//   }