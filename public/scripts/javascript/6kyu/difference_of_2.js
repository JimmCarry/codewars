// The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

// The result array should be sorted in ascending order of values.

// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

// Examples
// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]

// [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

// [1, 23, 3, 4, 7] should return [[1, 3]]

// [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]

let input = [1, 2, 3, 4];

function twosDifference(input){
    const array = [];
    
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            //console.log(input[i], input[j])
            const num1 = input[i];
            const num2 = input[j];

            if (Math.abs(num1 - num2) === 2 ) {
                array.push([Math.min(num1, num2), Math.max(num1, num2)]);
            }
        }
    }

    return array.sort((a, b) => a[0] - b[0])
}
twosDifference(input)
// solutions of other warriors from codewars what i chose for u and me :)

// function twosDifference(input){
//     return input
//      .sort(function(a, b){
//        return a - b
//      })
//      .filter(function(a){
//        return input.indexOf(a+2) != -1
//      })
//      .map(function(a){
//        return [a, a+2]
//      })
// }