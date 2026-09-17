# Arova

Arova is a reusable private review-eligibility layer for Stellar commerce. It allows a marketplace to accept exactly one verified review from a valid purchase without placing the buyer's wallet address in the public review record.

## Problem

Fake or unverifiable reviews are a trust problem in digital commerce. 
However, using a public Stellar wallet directly as the proof of purchase can reveal more transaction history than the review requires. Proof of purchase should not require a public financial identity.

## How Arova Works

Arova creates a verifiable separation between the private purchase identity and the public review record.

1. **Purchase:** A buyer completes a supported Stellar purchase.
2. **Prove:** The buyer prepares a zero-knowledge proof of eligibility for that specific product.
3. **Verify:** Arova verifies the proof without requiring the purchase wallet in the public review record.
4. **Publish:** The marketplace accepts the verified review.
5. **Prevent Reuse:** A product-scoped nullifier prevents the same purchase from creating another review.

## Core Properties

- **Verified Purchase:** A review must be backed by a valid supported purchase.
- **One Purchase, One Review:** A product-scoped nullifier prevents duplicate use.
- **Wallet-Minimized Review Flow:** The buyer's purchase wallet does not need to appear in the public review record.
- **Refund Aware:** A refunded or revoked purchase can no longer create a new verified review.
- **Reusable Integration:** Designed as a reusable layer for Stellar marketplace applications.
- **Evidence-Based:** Verification results can be tested through Stellar Testnet state and reference fixtures.

## Architecture

- **Stellar purchase state**
- **Soroban**
- **Proof verification**
- **Product-scoped nullifier**
- **Revocation state**
- **TypeScript integration**
- **Reference relay**

## Current Instawards Scope

This repository implements the Arova reference implementation for the Instawards program. The scope includes the eligibility contracts and proof gate, TypeScript verifier and relay, reference integration, automated functional tests, documentation, and reviewer-ready evidence on the Stellar Testnet.

## Privacy / Threat Model

Arova provides privacy with a clear boundary. It protects the buyer wallet from the public review record and buyer-originated review transaction. It **does not** promise privacy against the merchant, issuer, verifier collusion, or all forms of timing and network correlation. No production security audit is included.

## Local Development

Ensure you have Node.js and npm installed.

```bash
npm install
npm run dev
```

The landing page will be available at `http://localhost:3000`.

## Testing

_TODO: Add testing instructions once the test suite is finalized._

## Project Status

**In Development** - Currently implemented as a Testnet reference for the Stellar Instawards program.

## License

MIT License
