// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
// 1. as first we need create array of first row and then just in loop we will multiply by order in array  


multiplicationTable = function(size) {
    const table = [];
    for (let i = 1; i <= size; i++) {
        const numbers = Array(size).fill(1).map((val, index) => (val + index) * i);
        table.push(numbers);
    }
    return table;
}

// solutions of other warriors from codewars what i chose for u and me :)