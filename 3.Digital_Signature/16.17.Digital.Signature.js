/**
 * Explanation:
 * 
 * In Task 16, we successfully decrypted the message (m) and signature (s) using Bob's original primes (pB, qB) and verified Alice's signature.
 * 
 * For Task 17:
 * - Bob uses new primes (pB_new, qB_new) to generate new values for nB, phi_nB, and dB.
 * - This changes the modulus nB and the decryption key dB.
 * - When Alice sends (m2, s2) encrypted with Bob's original public key (eB, nB), Bob's new private key (dB_new) does not correctly decrypt the message and signature.
 * - As a result, the verification of Alice's signature fails because the decrypted signature does not match the message.
 * 
 * Modifications needed:
 * - For Alice's signature to be verified correctly, Bob must use the same primes (pB, qB) that were used to generate his original key pair.
 * - Alternatively, if Bob's primes change, he must communicate the new public key (nB_new, eB) to Alice, and she must use this new key for encryption.
 */

const bigInt = require('big-integer');

// Given parameters
const nA = bigInt("171024704183616109700818066925197841516671277");
const eA = bigInt("1571");
const nB = bigInt("839073542734369359260871355939062622747633109");
const eB = bigInt("87697");
const pB = bigInt("98763457697834568934613");
const qB = bigInt("8495789457893457345793");
const m1 = bigInt("418726553997094258577980055061305150940547956");
const s1 = bigInt("749142649641548101520133634736865752883277237");

// Step 1: Calculate dB
const phi_nB = pB.minus(1).multiply(qB.minus(1));
const dB = eB.modInv(phi_nB);

// Step 2: Decrypt m1 and s1
const m = m1.modPow(dB, nB);
const s = s1.modPow(dB, nB);

// Step 3: Verify the signature
const verify = s.modPow(eA, nA);

// Output the results
console.log(`Decrypted message: ${m}`);
console.log(`Decrypted signature: ${s}`);
console.log(`Verification result: ${verify.equals(m) ? "Valid signature" : "Invalid signature"}`);

// Task 17: Given new primes for Bob
const pB_new = bigInt("7865712896579");
const qB_new = bigInt("8495789457893457345793");
const m2 = bigInt("14823765232498712344512418717130930");
const s2 = bigInt("43176121628465441340112418672065063");

// Calculate new nB and phi_nB using new primes
const nB_new = pB_new.multiply(qB_new);
const phi_nB_new = pB_new.minus(1).multiply(qB_new.minus(1));
const dB_new = eB.modInv(phi_nB_new);

// Decrypt m2 and s2 using the new dB
const m2_decrypted = m2.modPow(dB_new, nB_new);
const s2_decrypted = s2.modPow(dB_new, nB_new);

// Verify the signature with new values
const verify_new = s2_decrypted.modPow(eA, nA);

// Output the results for new values
console.log(`New decrypted message: ${m2_decrypted}`);
console.log(`New decrypted signature: ${s2_decrypted}`);
console.log(`Verification result with new primes: ${verify_new.equals(m2_decrypted) ? "Valid signature" : "Invalid signature"}`);


