showNumbers(10);

function showNumbers(number) {
    for (let i = 0; i < number+1 ; i++) {
        //my code
        // if (i % 2 === 0)
        //     console.log(i, 'EVEN')
        // else 
        //     console.log(i, 'ODD')

        const massage = (i % 2 === 0) ? 'EVEN':"ODD";
        console.log(i, massage);
    }
}