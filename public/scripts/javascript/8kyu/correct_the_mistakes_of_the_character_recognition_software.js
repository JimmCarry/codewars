// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

const string = 'L0ND0N'

function correct(string) {
	return string.split('').map(element => {
        if (element === '0') {
            return 'O'
        } else if (element === '5') {
            return 'S'
        } else if (element === '1') {
            return 'I'
        } else {
            return element
        }
    }).join('');
}

correct(string)
// solutions of other warriors from codewars what i chose for u and me :)

// correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

// function correct(string) {
//     return [...string].map(a => ({'0':'O','5':'S','1':'I'})[a]||a).join('')
//   }