const numbers = [-1, -2, -13, -14];
const numbers1 = [1, 2, 13, 14];

const max = getMax(numbers);

console.log(max);
function getMax(array) {
    if (array.length === 0) return undefined;

    let max = array[0];
    
    for (let element of array)
    if (element > max)
    max = element;
    
    return max;
}

//getMax implementation using reduce
function getMaxReduce(array) {
    if (array.length === 0) return undefined;
    
    return array.reduce((a, b) =>  (a >  b) ? a : b);
}
const maxNumber = getMaxReduce(numbers1);
console.log(maxNumber);
