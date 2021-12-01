// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {
    const table = []
      for (let i = 1; i <= n; i++) {
        table.push(i)
      }
      return table
}

// solutions of other warriors from codewars what i chose for u and me :)

// let preFizz = n => [...Array(n)].map((x, i) => i+1);