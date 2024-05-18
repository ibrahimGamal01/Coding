// Coding Task Write a function birthday1() that returns a tuple (s; t; n); where s
// and t are different ASCII strings whose SHA-1 hashes have the same high-order
// 40 bits (same 10 initial hex digits). The last component n of the return value is the
// number of calls to SHA-1. Again, you can generate random ASCII strings by
// converting random integers to hex. By the theory of these birthday attacks, you
// will need to compute somewhat more than 1 million hashes to find this collision
// with probability greater than 1=2: The simplest way to do it is to repeatedly
// generate random strings s and enter the pair SHA-1(s):s in a Python dictionary
// structure. When you find a hash value that’s already in the dictionary, you’re
// done. Include two different colliding pairs of strings in your writeup.


// find two different ASCII strings whose SHA-1 hashes have the same high-order 40 bits. 
// This involves generating random strings and checking their SHA-1 hashes until a collision is found. 
// using a dictionary to store and detect collisions.

const crypto = require('crypto');

// Function to generate a random ASCII string of length 8
function randomString() {
    return Math.random().toString(36).substring(2, 10);
}

// Function to compute the SHA-1 hash and return the first 10 hex digits
function sha1First40Bits(str) {
    const hash = crypto.createHash('sha1').update(str).digest('hex');
    return hash.substring(0, 10);
}

// Function to perform the birthday attack
function birthdayAttack() {
    const hashes = {}; // Dictionary to store hashes and corresponding strings
    let n = 0; // Number of SHA-1 calls

    while (true) {
        const s = randomString();
        const hash = sha1First40Bits(s);
        n++;
        if (hashes[hash]) {
            const t = hashes[hash];
            return { s, t, n }; // Return the colliding strings and number of SHA-1 calls
        }
        hashes[hash] = s;
    }
}

// Perform the birthday attack
const result = birthdayAttack();
console.log(`String 1: ${result.s}`);
console.log(`String 2: ${result.t}`);
console.log(`Number of SHA-1 calls: ${result.n}`);
