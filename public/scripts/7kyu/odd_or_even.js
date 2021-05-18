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

// 1. we need take the array and sum of values -> here we can use reduce function
// 2. after what we summ vuleas, result we must use modulus % for will give the remainder -> simple return even or odd
// 3. atleast use condition for empty string -> return even if true

const oddOrEven  = ((array) => {
    if (array == '') {
        return 'even';
    } else {
        const alert = array.reduce((acc, int) =>{
            return acc += int;
        })

        if (alert % 2 == 0) {
            return 'even';
        } else {
            return 'odd';
        }
    }

});


// solutions of other warriors from codewars what i chose for u and me :)
// function oddOrEven(arr) {
//     return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
//   }

//   const oddOrEven = a => a.reduce((s,n)=> s + n,0)%2 == 0 ? "even" : "odd";