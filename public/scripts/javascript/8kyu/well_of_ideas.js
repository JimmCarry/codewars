// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
    console.log(x)
    let counter = 0;
    x.forEach(element => {
        if (element === 'good') {
            counter++
        }
    });
    if (counter === 0) {
        return 'Fail!'
    } else if (counter <= 2) {
        return 'Publish!'
    } else {
        return 'O smell a series!'
    }
}

console.log(well(['bad', 'bad', 'bad']))

// solutions of other warriors from codewars what i chose for u and me :)