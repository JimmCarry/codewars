// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

function updateLight(current) {
    if (current == 'green') {
      return 'yellow'
    } else if (current == 'yellow') {
      return 'red'
    } else if (current == 'red') {
      return 'green'
    }  
}

// solutions of other warriors from codewars what i chose for u and me :)
// function updateLight(current) {
//     return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
// }