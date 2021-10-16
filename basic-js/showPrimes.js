// showPrimes(20);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {

        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(number);
    }
}

// single responsibility priciple
showPrimes_SRP(20);


function showPrimes_SRP(limit) {
    for (let number = 2; number <= limit; number++) 
        if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++) 
        if (number % factor === 0)
            return false;
    return true;
}

