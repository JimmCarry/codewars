// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

// test value
// const a = 'first'
// const b = 'abcde'

function shorter_reverse_longer(a,b){
    console.log(a.length)
    console.log(b.length)
    if (a.length < b.length) {
        let shorter = a;
        let longest = b;
        let longReverse = longest.split('').reverse().join('');
        console.log(shorter + longReverse + shorter);
        return shorter + longReverse + shorter;
    } else {
        let shorter = b;
        let longest = a;
        let longReverse = longest.split('').reverse().join('');
        console.log(shorter + longReverse + shorter);
        return shorter + longReverse + shorter;
    }
}

//test function
//shorter_reverse_longer(a,b);

// solutions of other warriors from codewars what i choose for u and me :)
// var shorter_reverse_longer = function(a,b) {
//     var longest = a.length >= b.length ? a : b;
//     var shortest = a.length >= b.length ? b : a;
//     return shortest + longest.split('').reverse().join('') + shortest;
// }