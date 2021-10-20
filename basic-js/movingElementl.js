const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, -1);

console.log(output);

//code by myself 
function move(array, index, offset) {
    const numbers = array,
        movingNumber = numbers[index];
        position = index + offset;

    if ((position) > numbers.length - 1 || (position) < 0) {
        console.error('Invalid index');
        return;
    }
    let changeNumber = numbers[position];
    numbers[index] = changeNumber;
    numbers[position] = movingNumber;
    return numbers;
}

//code from video
let output1 = moving(numbers, 1, 2);
console.log(output1);
function moving(array, index, offset) {
    let position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Ivalid index');
        return;
    }
    const output = [...array];
    const element =  output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}