const numbers = [1, 2, 3, 4, 1, 2, 2];

const count = countOccurrences(numbers, 1);

console.log(count);

//simple implement by myself
function countOccurrences(array, searchElement) {
    let count = 0;
    for (let element of array) 
        if (element === searchElement) count++;
    return count;
}

//implement with reduce function
function countOccurrencesUsingReduce(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement)? 1 : 0 ;
        return accumulator + occurence;
    }, 0);
}
const output = countOccurrencesUsingReduce(numbers, 2);
console.log(output);