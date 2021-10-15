checkspeed(76)

// exercise my code
// function checkspeed(speed) {
//     if (speed < 75)
//         return 'ok';
//     else if ((speed - 70) / 5 >= 12)
//         return 'suspended';
//     else 
//         return (Math.floor((speed-70)/5)) + ' point';
// }

function checkspeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint){
        console.log('OK');
        return;
    }
    let points = Math.floor((speed - speedLimit) / kmPerPoint)
    if (points >= 12) 
        console.log('License suspended');
    else 
        console.log(points + ' point');
    
}