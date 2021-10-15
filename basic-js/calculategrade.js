const marks = [80, 80, 50]
const marks1 = [100, 100]

//Average = 70

//1-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

console.log(calculateGrade1(marks1))

// my code
function calculateGrade(marks) {
    let sum = 0,
        count = 0;

    for (let index in marks) {
        sum += marks[index]
        count++;
    }

    let average = sum / count;

    if (average < 60)
        return 'F';
    else if (average < 70)
        return 'D';
    else if (average < 80)
        return 'C';
    else if (average < 90)
        return 'B';
    else
        return 'A';
}

//mosh code
function calculateGrade1(marks) {
    let sum = 0;

    for (let mark of marks) 
        sum += mark;
    
    let average = sum / marks.length;

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}