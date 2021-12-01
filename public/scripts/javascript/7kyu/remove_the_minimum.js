// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]

// 1. from given array we will find smallest number and with findIndex we will find easy index
// 2. this index we can use with splice method but for that we need array so can easily save new const object [] and with rest we will get vallues

const removeSmallest = ((arr) => {
    const minNum = Math.min(...arr);
    const numIndex = arr.findIndex(num => num === minNum);
    const smallest = [...arr];
    smallest.splice(numIndex, 1);

    return smallest
})


// solutions of other warriors from codewars what i chose for u and me :)
// function removeSmallest(numbers) {
//     let indexOfMin = numbers.indexOf(Math.min(...numbers));
//     return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
// }

// const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));