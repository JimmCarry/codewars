// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by just checking just the day.

function isToday(date) {
    if (date.getFullYear() === new Date().getFullYear() && date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth() ) {
         return true
     } else {
         return false
     }
}

// solutions of other warriors from codewars what i chose for u and me :)

// function isToday(date) {
//     return new Date().toDateString() === date.toDateString();
// }

// const isToday = date => {
//     let d = new Date();
//     return ['getDate', 'getMonth', 'getFullYear'].every(v => date[v]() == d[v]());
// }