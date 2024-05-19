// Decrypt RSA without Factoring 𝑛

// 11. Coding Task Paul Revere’s friend in a tower at MIT says he’ll send the message
//  one if (the British are coming) by land and two if by sea. Since they know that
//  RSA will be invented in the Boston area, they decide that the message should be
//  encrypted using RSA with n = 712446816787 and e = 6551. Paul Revere
//  receives the ciphertext 273095689186.
//  a. What was the plaintext? Answer this without factoring n.

// Determine the original plaintext message that was encrypted using RSA with n = 712446816787 and e = 6551, 
// resulting in the ciphertext 273095689186, without factoring n.

//  b. What could Paul Revere’s friend have done so that we couldn’t guess
//  which message was encrypted?
//  Answer: Paul Revere's friend could have added random padding to the plaintext before encryption,
//          ensuring that the ciphertext varies even for the same message.

const bigInt = require('big-integer'); 
// Function to decrypt the RSA ciphertext
function decryptRSA(ciphertext, e, n) {
    // Try plaintext values m = 1 and m = 2
    for (let m = 0; m < 3; m++) {
        // Check if m^e % n equals the ciphertext
        if (bigInt(m).modPow(e, n).equals(ciphertext)) {
            return m; // Return the plaintext if it matches
        }
    }
    return null; // Return null if no valid plaintext is found
}

// Given values
const n = bigInt("712446816787");
const e = bigInt(6551);
const ciphertext = bigInt("273095689186");

// Decrypt the ciphertext
const plaintext = decryptRSA(ciphertext, e, n);

if (plaintext !== null) {
    console.log(`The plaintext is: ${plaintext}`);
} else {
    console.log("Plaintext not found.");
}

// Test cases
const testCases = [
    { ciphertext: bigInt("273095689186"), expected: 2 },
    { ciphertext: bigInt("102430"), expected: null }
];

testCases.forEach(({ ciphertext, expected }, index) => {
    const result = decryptRSA(ciphertext, e, n);
    console.log(`Test case ${index + 1}: ${result === expected ? `Passed and the text is ${ciphertext}` : `Failed and the text is ${ciphertext}`}`);
});
