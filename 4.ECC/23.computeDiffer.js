// 23.Coding Task Compute the difference (5, 9) − (1, 1) on the elliptic curve
// y2 ≡ x3 − 11x + 11 (mod 593899). Note that the answer involves large integers,
// even though the original points have small coordinates

// Task 23: Compute the Difference (5, 9) − (1, 1) on the Elliptic Curve


// This function calculates the modular inverse using Fermat's little theorem.
function modInv(a, p) {
    // Calculate a^(p-2) mod p
    return BigInt(a) ** BigInt(p - 2n) % BigInt(p);
}

// This function adds two points on an elliptic curve defined by y^2 = x^3 + ax + b (mod p).
function pointAdd(P, Q, a, p) {
    if (P[0] === Q[0] && P[1] === Q[1]) {
        // Doubling a point (P + P)
        const numerator = (3n * P[0] ** 2n + BigInt(a)) % BigInt(p);
        const denominator = (2n * P[1]) % BigInt(p);
        // Calculate the slope (lambda)
        const lambda = (numerator * modInv(denominator, p)) % BigInt(p);
        // Calculate the x and y coordinates of the resulting point (R)
        const xR = (lambda ** 2n - P[0] - Q[0]) % BigInt(p);
        const yR = (lambda * (P[0] - xR) - P[1]) % BigInt(p);
        return [xR, yR]; // Return the resulting point
    } else {
        // Adding two different points (P + Q)
        const numerator = (Q[1] - P[1]) % BigInt(p);
        const denominator = (Q[0] - P[0]) % BigInt(p);
        // Calculate the slope (lambda)
        const lambda = (numerator * modInv(denominator, p)) % BigInt(p);
        // Calculate the x and y coordinates of the resulting point (R)
        const xR = (lambda ** 2n - P[0] - Q[0]) % BigInt(p);
        const yR = (lambda * (P[0] - xR) - P[1]) % BigInt(p);
        return [xR, yR]; // Return the resulting point
    }
}

// This function negates the y-coordinate of a point on the elliptic curve.
function pointNeg(P, p) {
    // Negate the y-coordinate by subtracting it from p if negative, else leave as is
    return [P[0], (BigInt(-P[1]) % BigInt(p) + BigInt(p)) % BigInt(p)];
}

// This function subtracts one point (Q) from another point (P) on the elliptic curve.
function pointSub(P, Q, a, p) {
    // Subtract points by adding P and the negation of Q
    return pointAdd(P, pointNeg(Q, p), a, p);
}

// Define the prime modulus (p) and curve parameters (a, b) for y^2 = x^3 - 11x + 11 (mod p)
const p = 593899n;
const a = -11n;
const b = 11n;

// Define the points (P and Q) to subtract
const P = [5n, 9n];
const Q = [1n, 1n];

// Compute the result of P - Q using point subtraction on the elliptic curve
const R = pointSub(P, Q, a, p);

// Print the result of the subtraction
console.log(`The result of (5, 9) - (1, 1) is: [${R}]`);
