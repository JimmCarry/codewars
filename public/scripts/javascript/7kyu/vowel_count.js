// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
const str = "my pyx";

function getCount(str) {
    const regexVowel = /[aeiou]/g;
    const matches = str.match(regexVowel);
    
    if (matches === null) {
        return 0;
    }
    return matches.length;
}

// solutions of other warriors from codewars what i chose for u and me :)
// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }
// function getCount(str) {
//     return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//    }