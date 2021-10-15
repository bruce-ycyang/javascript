//Multiples of 3: 3, 6, 9
//Multiples of 5: 5, 10

console.log(sum(15));

function sum(limit) {
    count = 0;

    for (let i = 0; i <= limit ; i++) 
        if (i % 3 === 0 || i % 5 === 0)
            count += i;
            
    return count;
}