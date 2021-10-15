let output = fizzbuzz(9)
console.log(output)

function fizzbuzz(input) {
    if (typeof input  !== 'number') 
        return 'Not a number';
    if ((input % 3) === 0 && (input % 5) === 0)
        return 'fizzbuzz'
    if (input % 3 === 0) 
        return 'fizz'
    if (input % 5 === 0 )
        return 'buzz'
    return input 
}
