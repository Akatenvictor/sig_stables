# Sig Stables 🔊💸

**Sig Stables** is a voice-powered stablecoin transaction system built on the Stellar network. It enables users to send and receive stablecoins (like USDC) using simple voice commands, making crypto transactions natural, accessible, and error-free.

---

## 🎯 Overview

Sig Stables bridge the gap between complex blockchain interfaces and everyday human communication. Instead of fumbling with long wallet addresses or complex UIs, users simply speak their intent.

> "Send 50 USDC to Sarah"

The system processes the voice input, verifies the intent, resolves the recipient's address, and executes the transaction on-chain instantly.

## 🚨 Problem Statement

Crypto transactions are currently:
- **Complex:** Wallet addresses and gas fees are intimidating.
- **Error-Prone:** One wrong character can lead to permanent loss of funds.
- **Inaccessible:** Non-technical users and those with visual impairments face high barriers to entry.

## 💡 The Sig Stables Solution

Sig Stables addresses these issues by:
1. **Voice-to-Intent Engine:** Converting natural speech into structured transaction data.
2. **Deterministic Identity mapping:** Mapping names or aliases to wallet addresses for seamless resolution.
3. **Soroban Smart Contracts:** Leveraging Stellar's high-speed, low-cost smart contract platform for secure execution.
4. **Transparent Confirmation:** Repeating the parsed intent to the user for safe confirmation before execution.

## 🧩 Core Features

### 🔊 Voice Command Processing
- **STT Integration:** High-accuracy speech-to-text conversion.
- **Intent Parsing:** Extracting `Amount`, `Asset`, and `Recipient` from natural language.
- **Multi-Token Support:** Supporting any Stellar-issued stablecoin (USDC, EURC, etc.).

### 👤 Contact Management
- **Name-to-Address Mapping:** Save contacts with simple names (e.g., "John", "Sarah").
- **On-Chain Storage:** Securely store your contact book within the VoxPay smart contract.

### 💸 Secure Transactions
- **Auth Verification:** Transaction signing via secure wallet integration.
- **Ledger Persistence:** Permanent record of transaction history on the Stellar ledger.
- **Low Fees:** Benefit from Stellar's industry-leading transaction costs.

## 🧠 AI-Powered Conversational Intelligence

VoxPay isn't just a voice recorder; it's an intelligent financial assistant that understands context, intent, and user behavior.

### 🔍 Advanced Intent Extraction (NLP)
At the heart of VoxPay is a sophisticated Natural Language Processing (NLP) engine that goes beyond simple keyword matching.
- **Semantic Understanding:** Recognizes variations in speech (e.g., "Send 10 bucks to Bob" vs. "Transfer 10 USDC to Robert").
- **Asset Resolution:** Automatically identifies which stablecoin is being referred to based on user portfolio or explicit mention.
- **Ambiguity Resolution:** If a user says "Send 5 to John" and has two "Johns" in their contacts, the AI asks: *"Which John? John Doe or John Smith?"*

### 🕰️ Context-Aware Operations
The AI maintains a short-term memory of recent interactions to enable follow-up commands:
- **Relative Commands:** "Send it again" or "Send the same amount to Sarah instead."
- **Temporal References:** "Send John the same amount I sent him last Tuesday."

### 🛡️ Voice Biometrics & Security
AI models analyze the unique characteristics of the user's voice to provide an additional layer of security:
- **Voiceprint Verification:** Ensuring the command is coming from the authorized owner, not a recording or an impersonator.
- **Liveness Detection:** Detecting synthetic or spoofed audio to prevent deepfake attacks.

### 📈 Predictive Fin-Ops
- **Smart Reminders:** "You usually send 100 USDC to your landlord on the 20th. Should I prepare that payment now?"
- **Spending Insights:** "You've sent 15% more in stablecoins this month compared to last. Want to see a breakdown?"

## 🏗️ System Architecture

### Frontend (User Interface)
- **Framework:** React + Vite
- **Styling:** TailwindCSS + Shadcn UI
- **Voice UI:** Interactive recording buttons and real-time processing feedback.

### Blockchain Layer (Soroban)
- **Contract:** Written in Rust for the Soroban smart contract platform.
- **Core Functions:**
    - `send_payment`: Records and facilitates token transfers.
    - `add_contact`: Maps a human-readable name to a Stellar `Address`.
    - `get_contact`: Resolves a name to an `Address` for transaction building.
    - `get_history`: Retrieves a list of past voice-triggered payments.

## 🚀 Getting Started

### Prerequisites
- [Stellar CLI](https://soroban.stellar.org/docs/getting-started/setup#install-the-stellar-cli)
- [Rust & Wasm target](https://soroban.stellar.org/docs/getting-started/setup#install-rust)
- [Node.js & npm](https://nodejs.org/)

### Smart Contract Setup
1. Navigate to the contract directory:
   ```bash
   cd sig_stables/contracts/voxpay
   ```
2. Build the contract:
   ```bash
   cargo build --target wasm32-unknown-unknown --release
   ```
3. Test the contract (skeletal tests included):
   ```bash
   cargo test
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd voxpay-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🛠️ Roadmap & Future Enhancements

- [ ] **AI Assistant:** "Send what I sent John yesterday but to Sarah instead."
- [ ] **Bio-Auth:** Fingerprint or FaceID confirmation for high-value transactions.
- [ ] **Multi-lingual Support:** Support for regional dialects and languages.
- [ ] **Offline Queuing:** Record voice notes while offline and execute once connectivity is restored.

---

Built with ❤️ for the Stellar Ecosystem.
# sig_stables
