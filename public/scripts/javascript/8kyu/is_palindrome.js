// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let pali = x.split('').reverse().join('');
    return (x.toLowerCase() === pali.toLowerCase()) ? true : false;
};

// solutions of other warriors from codewars what i chose for u and me :)