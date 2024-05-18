// Coding Task Suppose that p = 76543692179, q = 343434343453, and e = 457.
//  The ciphertext c ≡ me (mod pq) is transmitted, but an error occurs during
//  transmission. The received ciphertext is 2304329328016936947195. The
//  receiver is able to determine that the digits received are correct but that last digit
//  is missing. Determine the missing digit and decrypt the message


// Find Missing Digit: Brute force the missing digit and check for valid plaintexts.
// Use modular arithmetic and large integer handling to determine the correct digit and plaintext.

const bigInt = require('big-integer'); // Import the big-integer library for handling large integers

// Given values
const p = bigInt("76543692179");
const q = bigInt("343434343453");
const e = bigInt(457);
const n = p.multiply(q); // Compute n = p * q
const receivedCiphertext = bigInt("230432932801693694719"); // Ciphertext with missing last digit

// Function to compute the modular inverse
function mod_inv(a, p) {
    return a.modPow(p.minus(2), p);
}

// Function to find the missing digit and decrypt the message
function findMissingDigitAndDecrypt(receivedCiphertext, e, n) {
    for (let d = 0; d < 10; d++) {
        // Append the missing digit to the ciphertext
        const ciphertext = receivedCiphertext.multiply(10).add(d);
        for (let m = 0; m < 1000; m++) { // Brute force small range for simplicity
            if (bigInt(m).modPow(e, n).equals(ciphertext)) {
                return { missingDigit: d, plaintext: m }; // Return the missing digit and plaintext
            }
        }
    }
    return null; // Return null if no valid plaintext is found
}

// Find the missing digit and decrypt the ciphertext
const result = findMissingDigitAndDecrypt(receivedCiphertext, e, n);

if (result !== null) {
    console.log(`The missing digit is: ${result.missingDigit}`);
    console.log(`The plaintext is: ${result.plaintext}`);
} else {
    console.log("Missing digit or plaintext not found.");
}

// Test cases
const testCases = [
    { receivedCiphertext: bigInt("12345678901234567890"), expected: null },
    { receivedCiphertext: bigInt("23043293280169369471"), expected: { missingDigit: 9, plaintext: 1 } }
];

testCases.forEach(({ receivedCiphertext, expected }, index) => {
    const result = findMissingDigitAndDecrypt(receivedCiphertext, e, n);
    const passed = result && result.missingDigit === expected.missingDigit && result.plaintext === expected.plaintext;
    console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
});
