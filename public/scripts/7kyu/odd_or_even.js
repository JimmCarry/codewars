// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!
const array = [2];

const oddOrEven  = ((array) => {
    const alert = array.reduce((acc, int) =>{
        return acc += int;
    })

    if (alert % 2 == 0) {
        console.log('even number')
    } else {
        console.log('odd number')
    }
    
});

oddOrEven(array)