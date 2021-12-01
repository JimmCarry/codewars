// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    return string.replace(/([A-Z])/g, ' $1')
}

// solutions of other warriors from codewars what i chose for u and me :)

// function solution(string) {
//     string = string.split('').map(function (el) {
//       if (el === el.toUpperCase()) {
//         el = ' ' + el
//       }
//       return el
//     })
//     return string.join('')
//   }

// function solution(string) {
//     let final = '';

//     for (let i = 0; i < string.length; i++) {
//         const char = string[i];
//         if(char === char.toUpperCase()) {
//             final += ` ${char}`;
//         } else {
//             final += char;
//         }
//     }

//     return final;
// }