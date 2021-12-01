// In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// // Remove the 3's at indices 0 and 3
// // followed by removing a 4 at index 1
// solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
// More examples can be found in the test cases.

// Good luck!

const solve = [3, 4, 4, 3, 6, 3];

const newArray = solve.reduce((accumulator, int, index, array) => {
    if (!array.includes(int, index + 1)) { // if array not include integer from index + 1
        return [...accumulator, int] // return object with rest acc and assign integer
    } else {
        return accumulator
    }
}, []); // initial value let like empty object



// solutions of other warriors from codewars what i chose for u and me :)
// function solve(arr){
//     return arr.filter((val,i) => arr.lastIndexOf(val) == i);
// }

// const solve = arr => [...new Set(arr.reverse())].reverse()