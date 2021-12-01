// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// 1. here in first case we must remove all non-alphabetic letters from string, in this i am not experience so i took help from MDN, not so much clever from this, i will must take a look later
// 2. okey take some magic from google and i took this /[^A-Za-z']/g what us exactly what we need ... pick everything except A - Z and a - z
// 3. now i hope it will be easier, how i think new string we take split by "", reverse, join and get back on string 

const reverseLetter = ((str) => {
    const newStr = str.replace(/[^A-Za-z']/g, "");
    return reverseStr = newStr.split('').reverse().join('').toString();
});



// solutions of other warriors from codewars what i chose for u and me :)
//reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');