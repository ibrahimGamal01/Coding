## Decrypt RSA without Factoring n (`11.plaintext.js`)

### Problem Statement

Paul Revere’s friend sends an encrypted message using RSA with `n = 712446816787` and `e = 6551`. The ciphertext received is `273095689186`. Determine the plaintext without factoring `n`.

### Approach

Since the possible messages are known to be "1 if by land" and "2 if by sea," 
we only need to check these small plaintext values (1 and 2).

### Code Walkthrough

1. **Import `big-integer` Library**:  used to handle large integers in JS.
    
    
2. **Decrypt RSA Function**: decrypt the ciphertext by checking small plaintext values (1 and 2).
    
    
3. **Decrypt the Ciphertext**:
    - Call the `decryptRSA` function and print the result.

---

## Encrypt and Decrypt with Large Primes (`12.LargePrimes.js`)

### Problem Statement

Generate two 30-digit prime numbers, compute `n = p * q`, and encrypt given plaintext messages using RSA.
$[ c = m^e \mod n ]$
- **c** is the ciphertext,
- **m** is the plaintext message converted to an integer,
- **𝑒** is the Public Exponent 

### Approach

1. **Generate Large Primes**: Generate two large prime numbers `p` and `q`.
2. **Compute n**: Compute `n = p * q`.
3. **Encrypt Messages**: Encrypt the given plaintext messages using RSA encryption with `e = 65537`.

### Code Walkthrough

1. **Libraries**: Import `crypto` for generating random bytes and `big-integer` for handling large integers.
    
    
2. **Generate a 30-digit Prime Number**:
    - Continuously generate random numbers until a prime number is found.
    
3. **Generate Two Large Primes**:
    - Generate primes `p` and `q`, and compute `n`.
    
    ```jsx
    const p = generatePrime();
    const q = generatePrime();
    const n = p.multiply(q);  // Compute n = p * q
    const e = bigInt(65537);  // Common choice for e value
    
    console.log(`p: ${p}`);
    console.log(`q: ${q}`);
    console.log(`n: ${n}`);
    
    ```
    
4. **Encrypt a Message Using RSA**:
    
    ```jsx
    function encryptMessage(message, e, n) {
        const m = bigInt(Buffer.from(message).toString('hex'), 16);  // Convert message to a big integer
        return m.modPow(e, n);  // Encrypt the message
    }
    
    ```
    


---

## Find Missing Digit in Ciphertext (`13.MissingDigit.js`)

### Problem Statement

Given `p = 76543692179`, `q = 343434343453`, and `e = 457`, the received ciphertext `2304329328016936947195` is missing its last digit. Determine the missing digit and decrypt the message.

### Approach

1. **Brute Force the Missing Digit**: Try appending each digit (0-9) to the received ciphertext.
2. **Check for Valid Plaintext**: For each new ciphertext, check if it results in a valid plaintext.

### Code Walkthrough
    
1. **Given Values**:
    - Initialize p, q, q, e, n, ciphertext missing digit

    
2. **Compute Modular Inverse**: (not used directly in the code). ``function mod_inv``
    
3. **Find Missing Digit and Decrypt**:
    - Brute force the missing digit by appending each digit (0-9) to the received ciphertext and checking for valid plaintexts.
    - ``findMissingDigitAndDecrypt`` 
        - ``for loop 1`` to try digits 0-9 to complete the ciphertext
        - ``Inner for loop`` Try plaintexts 0-999 and check for equality with the ciphertext
    

