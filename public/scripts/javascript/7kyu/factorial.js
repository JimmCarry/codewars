// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

const num = 7;

const factorial = (num) => {
    let sum = [];
    for (let i = num; i >= 1; i--) {
        sum.push(i);
    }
    return sum.reduce((accumulator, int) => {
        return accumulator * int;
        
    })
    
}

// solutions of other warriors from codewars what i chose for u and me :)
// const factorial = n => n ? factorial(n - 1) * n : 1;

// function factorial(n){
//     let answer = 1;
    
//     while (n > 0) {
//       answer *= n;
//       n--;
//     }
    
//     return answer;
//   }