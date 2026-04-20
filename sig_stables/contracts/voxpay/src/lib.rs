#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Address, Env, Symbol, Vec};

#[contracttype]
#[derive(Clone)]
pub enum DataKey {
    Contact(Symbol),
    History(Address),
}

#[contracttype]
#[derive(Clone, Debug)]
pub struct Transaction {
    pub from: Address,
    pub to: Address,
    pub amount: i128,
    pub symbol: Symbol,
    pub timestamp: u64,
}

#[contract]
pub struct VoxPay;

#[contractimpl]
impl VoxPay {
    /// Send a payment (skeletal logic, assuming token transfer happens via SDK in full version)
    pub fn send_payment(env: Env, from: Address, to: Address, amount: i128, symbol: Symbol) -> Transaction {
        from.require_auth();

        let tx = Transaction {
            from: from.clone(),
            to,
            amount,
            symbol,
            timestamp: env.ledger().timestamp(),
        };

        // Record history
        let mut history: Vec<Transaction> = env
            .storage()
            .persistent()
            .get(&DataKey::History(from.clone()))
            .unwrap_or(Vec::new(&env));
        
        history.push_back(tx.clone());
        env.storage().persistent().set(&DataKey::History(from), &history);

        tx
    }

    /// Add a contact mapping a name to an address
    pub fn add_contact(env: Env, owner: Address, name: Symbol, address: Address) {
        owner.require_auth();
        env.storage().persistent().set(&DataKey::Contact(name), &address);
    }

    /// Retrieve contact address by name
    pub fn get_contact(env: Env, name: Symbol) -> Address {
        env.storage().persistent().get(&DataKey::Contact(name)).expect("Contact not found")
    }

    /// Get transaction history for an address
    pub fn get_history(env: Env, account: Address) -> Vec<Transaction> {
        env.storage().persistent().get(&DataKey::History(account)).unwrap_or(Vec::new(&env))
    }
}
