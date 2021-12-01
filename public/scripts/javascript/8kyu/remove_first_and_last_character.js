// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
// 1. here we got string so i found substr method for this but i need length of str for length of substr
const str = 'eloquent';

function removeChar(str){
    const letters = str.split('');
    return str.substr(1, letters.length - 2);
};

removeChar(str);

// solutions of other warriors from codewars what i chose for u and me :)
// function removeChar(str){
//     return str.slice(1, str.length - 1);
//   };

//   const removeChar = (str) => str.replace(/^.|.$/g, '');