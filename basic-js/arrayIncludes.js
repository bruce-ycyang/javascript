const numbers = [1, 2, 3, 4];

//implement function includes
console.log(numbers.includes(1));

function includes(array, searchNumber) {
    for (let element of array)
        if (element === searchNumber) return true;
    return false;
}

console.log(includes(numbers, 5))