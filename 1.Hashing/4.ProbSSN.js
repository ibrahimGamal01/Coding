// Calculates the probability that at least two students out of 200 
// share the same last four digits of the Social Security number of each student using the Birthday Paradox formula.

function calculateProbabilityOfMatch(numStudents, numPossibleDigits) {
    let probabilityNoMatch = 1.0;
    for (let i = 0; i < numStudents; i++) {
        probabilityNoMatch *= (numPossibleDigits - i) / numPossibleDigits;
    }
    return 1 - probabilityNoMatch;
}

const numStudents = 200;
const numPossibleDigits = 10000;

const probability = calculateProbabilityOfMatch(numStudents, numPossibleDigits);
console.log(`The probability that at least two students have the same last four digits is: ${probability}`);
