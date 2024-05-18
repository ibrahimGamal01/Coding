// Coding Task Suppose that p = 76543692179, q = 343434343453, and e = 457.
//  The ciphertext c ≡ me (mod pq) is transmitted, but an error occurs during
//  transmission. The received ciphertext is 2304329328016936947195. The
//  receiver is able to determine that the digits received are correct but that last digit
//  is missing. Determine the missing digit and decrypt the message

//  two 30-digit primes and encrypt given plaintexts using RSA 
// Generate large primes, compute n, and encrypt given plaintexts.
// 

const crypto = require('crypto'); // Import the crypto library for generating random bytes
const bigInt = require('big-integer'); // Import the big-integer library for handling large integers

// Generate a 30-digit prime number
function generatePrime() {
    while (true) {
        const num = bigInt(crypto.randomBytes(38).toString('hex'), 16);
        if (num.isPrime()) return num; // Return the prime number
    }
}

// Generate two large primes p and q
const p = generatePrime();
const q = generatePrime();
const n = p.multiply(q); // Compute n = p * q
const e = bigInt(65537); // Common choice for e value and handle large integer operations

console.log(`p: ${p}`);
console.log(`q: ${q}`);
console.log(`n: ${n}`);

const messages = ["cat", "bat", "hat", "encyclopedia", "antidisestablishmentarianism"];

// Function to encrypt a message using RSA
function encryptMessage(message, e, n) {
    const m = bigInt(Buffer.from(message).toString('hex'), 16); // Convert message to a big integer
    return m.modPow(e, n); // Encrypt the message
}

// Encrypt each message
const ciphertexts = messages.map(message => encryptMessage(message, e, n));

// Display the ciphertexts
ciphertexts.forEach((cipher, index) => {
    console.log(`Ciphertext for "${messages[index]}": ${cipher}`);
    console.log(`The ciphertext size is ${cipher.toString().length} bits`);

});

// Test cases
const testMessages = ["dog", "log", "fog", "encyclopedia", "supercalifragilisticexpialidocious"];
const testCiphertexts = testMessages.map(message => encryptMessage(message, e, n));
testCiphertexts.forEach((cipher, index) => {
    console.log(`Test ciphertext for "${testMessages[index]}": ${cipher}`);
    console.log(`The ciphertext size is ${cipher.toString().length} bits`);
});
