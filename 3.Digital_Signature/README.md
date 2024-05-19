## RSA Decryption and Signature Verification: Tasks 16 and 17

1. **Task 16**: Decrypting a message and verifying a signature with Bob's original RSA key pair.
2. **Task 17**: Attempting to decrypt and verify a message and signature with a new RSA key pair for Bob and explaining why it fails.

### Task 16: Decrypting and Verifying with Original Primes

Bob decrypts a message (m1) and a signature (s1) using his original RSA key pair and verifies the signature provided by Alice.

#### Given Parameters

- **Alice's public key**:
  - `nA = 171024704183616109700818066925197841516671277`
  - `eA = 1571`
- **Bob's original public key**:
  - `nB = 839073542734369359260871355939062622747633109`
  - `eB = 87697`
- **Bob's original primes**:
  - `pB = 98763457697834568934613`
  - `qB = 8495789457893457345793`
- **Message and signature encrypted with Bob's public key**:
  - `m1 = 418726553997094258577980055061305150940547956`
  - `s1 = 749142649641548101520133634736865752883277237`

#### Steps to Decrypt and Verify

1. **Calculate Bob's private key**:
   - Compute φ(nB): `phi_nB = (pB - 1) * (qB - 1)`
   - Compute dB: `dB = eB^(-1) mod phi_nB`

2. **Decrypt the message and signature**:
   - Decrypt message: `m = m1^dB mod nB`
   - Decrypt signature: `s = s1^dB mod nB`

3. **Verify the signature**:
   - Verify by checking: `s^eA mod nA == m`


--------------------
--------------------

### Task 17: Decrypting and Verifying with New Primes

 Bob uses new primes to generate a new RSA key pair, then try to decrypt a message and verify a signature sent by Alice using Bob's old public key.
    (Invalid signature)

#### Given New Parameters

- **New primes for Bob**:
  - `pB_new = 7865712896579`
  - `qB_new = 8495789457893457345793`
- **Message and signature encrypted with Bob's original public key**:
  - `m2 = 14823765232498712344512418717130930`
  - `s2 = 43176121628465441340112418672065063`

#### Steps to Decrypt and Verify 

Same as above except that the private key is a different value
