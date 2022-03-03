// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

const string = 'abcd'

function doubleChar(str) {
    return str.split('').map(el => el + el).join('')
}

doubleChar(string)

// solutions of other warriors from codewars what i chose for u and me :)

// function doubleChar(str) {
//     return str.replace(/(.)/g, "$1$1")
//  }