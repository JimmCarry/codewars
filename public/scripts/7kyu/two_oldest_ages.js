// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

// 1. like a first we need sort the arr and then just with slice methods we'll get two last numbers
// tips: to the sort function we need add compare function
//       in slice function when we use -index we get elements from end of arr

const ages = [1, 2, 10, 8];

function twoOldestAges(ages){
    return ages.sort((a,b) => a - b).slice(-2);
}

// solutions of other warriors from codewars what i chose for u and me :)

