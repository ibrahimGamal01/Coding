### Birthday Paradox Code Explanation

#### Problem Statement
Calculate the probability that at least two students out of 200 share the same last four digits of their Social Security number.

#### Input
- `numStudents`: The number of students (200 in this case).
- `numPossibleDigits`: The total number of possible last four digits of Social Security numbers (10000, as there are 10000 possible combinations from 0000 to 9999).

#### Output
- The probability that at least two students have the same last four digits.

#### Method
This problem is analogous to the Birthday Paradox, where we calculate the probability that in a group of people, at least two have the same birthday. Here, instead of birthdays, we are considering the last four digits of Social Security numbers.

#### Detailed Code Explanation


#### Walkthrough
1. **Initialization**: Start with `probabilityNoMatch` as 1 (100%).
2. **Iterate through each student**:
   - For each new student, the probability that they have a unique last four digits decreases.
   - Multiply `probabilityNoMatch` by `(numPossibleDigits - i) / numPossibleDigits` for each student `i`.
3. **Calculate the complement**: The probability of at least one match is `1 - probabilityNoMatch`.
4. **Output the result**: Print the calculated probability.


----

### Birthday Attack Code Explanation

#### Problem Statement
Find two different ASCII strings whose SHA-1 hashes have the same high-order 40 bits (first 10 hexadecimal digits). Return the two strings and the number of SHA-1 hash calculations performed.

#### Method
The method used is a form of a birthday attack, where we exploit the high probability of collisions in hash functions given a large enough set of random inputs.

#### Detailed Code Explanation

#### Walkthrough
1. **Random String Generation**:
   - `randomString` generates a random ASCII string of length 8 using base-36 encoding.

2. **Hash Calculation**:
   - `sha1First40Bits` computes the SHA-1 hash of a string and extracts the first 10 hex digits (high-order 40 bits).

3. **Birthday Attack Execution**:
   - Initialize an empty dictionary `hashes` to store seen hash values and their corresponding strings.
   - Initialize a counter `n` to count the number of SHA-1 hash calculations.
   - In a loop:
     - Generate a random string `s`.
     - Compute its SHA-1 hash and extract the first 10 hex digits.
     - Increment the SHA-1 call counter.
     - Check if this hash is already in the dictionary:
       - If yes, a collision is found. Retrieve the existing string `t` and return it along with `s` and the count `n`.
       - If no, store the hash and the string `s` in the dictionary and continue.

4. **Output the result**: Print the two colliding strings and the number of SHA-1 calls.

### Summary
- The Birthday Paradox code calculates the probability of at least one collision in a group using combinatorial probability.
- The birthday attack code finds actual hash collisions by exploiting the high probability of collisions in large enough sets of random inputs, using a dictionary to efficiently detect collisions.