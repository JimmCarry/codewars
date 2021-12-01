// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const n = 5;

function reverseSeq(n) {
    const table = []
    for (let i = n; i >= 1; i--) {
        table.push(i)
    }
    return table
}

reverseSeq(n)

// solutions of other warriors from codewars what i chose for u and me :)
// const reverseSeq = n => {
//     return Array(n).fill(0).map((e, i) => n - i );
//   };