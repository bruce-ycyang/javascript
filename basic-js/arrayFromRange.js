const number = arrayFromRange(-10,-4);

console.log(number);

function arrayFromRange(min, max) {
    let output = [];
    for (let num = min; num <= max; num++)
        output.push(num)
    return output;
}