// 22.Coding Task You want to represent the message 12345 as a point (x, y) on the
// curve y2 ≡ x3 + 7x + 11 (mod 593899). Write x = 12345 and find a value of the
// missing last digit of x such that there is a point on the curve with this
// x-coordinate

// Task 22: Representing the Message 12345 as a Point on the Curve


// This function finds a point on an elliptic curve given the base value of x and a prime modulus.
function findPointOnCurve(xBase, p) {
    // xBase is the base value of x (without the last digit)

    // Loop through the last digit from 0 to 9
    for (let lastDigit = 0; lastDigit < 10; lastDigit++) {
        // Generate x value by appending the last digit to the base value
        const x = BigInt(xBase) * BigInt(10) + BigInt(lastDigit);
        
        // Calculate the right-hand side (RHS) of the curve equation: y^2 ≡ x^3 + 7x + 11 (mod p)
        const rhs = (x ** 3n + BigInt(7) * x + BigInt(11)) % BigInt(p);
        
        // Calculate the potential y-value using modular exponentiation
        const y = powMod(rhs, (BigInt(p) + 1n) / 4n, BigInt(p));
        
        // Check if this y-value satisfies the equation y^2 ≡ RHS (mod p)
        if ((y * y) % BigInt(p) === rhs) {
            return [x, y]; // Return the point if it satisfies the curve equation
        }
    }
    return null; // Return null if no valid point is found
}

// Helper function for modular exponentiation
function powMod(base, exp, mod) {
    let result = 1n; // Initialize result as 1
    while (exp > 0n) { // While exponent is greater than 0
        if (exp % 2n === 1n) { // If exponent is odd
            result = (result * base) % mod; // Update result using modular multiplication
        }
        base = (base * base) % mod; // Square the base
        exp = exp / 2n; // Halve the exponent
    }
    return result; // Return the final result
}

// Define the prime modulus
const p = 593899n;


const xBase = 12345n;

// Find the point on the curve
const point = findPointOnCurve(xBase, p);
if (point) {
    console.log(`The point on the curve is: [${point}]`); // Print the point if found
} else {
    console.log("No valid point found with x starting with 12345"); // Print message if no valid point is found
}
