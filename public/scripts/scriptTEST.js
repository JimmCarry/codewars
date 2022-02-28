// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
// Note
// Please don't post issue about difficulty or duplicate.

function remove (string) {
    let reverse = string.split('').reverse()
    if (reverse[0] === '!') {
        return reverse.join('').substring(1).split('').reverse().join('')
    } else {
        return string
    }
}

// solutions of other warriors from codewars what i chose for u and me :)
// const remove = s => s.replace(/!$/, '');

// function remove(s) {
//     return s.endsWith('!') ? s.slice(0, -1) : s;
//   }
