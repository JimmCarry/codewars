// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

// 1. like a first we need get max number, this number then we take off from arr and again get second max value
// 2. then just return equal of numbers

function largestPairSum(numbers)
{
  const max = Math.max.apply(null, numbers);
  numbers.splice(numbers.indexOf(max), 1);
  const maxSec = Math.max.apply(null, numbers);
  return max + maxSec
}

// solutions of other warriors from codewars what i chose for u and me :)
// function largestPairSum(numbers){
//     numbers.sort(function(a, b){ return b - a });
//     return numbers[0] + numbers[1];
// }