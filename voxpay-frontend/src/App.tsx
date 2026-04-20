import React, { useState } from 'react';
import { Mic, Send, History, Users, Wallet, CreditCard, ChevronRight } from 'lucide-react';
import './index.css';

const App: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [lastIntent, setLastIntent] = useState<null | { amount: string; asset: string; to: string }>(null);

  const handleRecord = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Mock finishing recording after 3 seconds
      setTimeout(() => {
        setIsRecording(false);
        setLastIntent({ amount: '50', asset: 'USDC', to: 'Sarah' });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#050506] text-white p-6 font-sans">
      {/* Header */}
      <header className="max-w-4xl mx-auto flex justify-between items-center mb-12">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            <Mic className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">VoxPay</h1>
        </div>
        <div className="glass px-4 py-2 flex items-center gap-3">
          <Wallet className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium">G...7k2L</span>
          <div className="h-4 w-[1px] bg-white/20 mx-1"></div>
          <span className="text-sm font-bold text-blue-400">1,240.50 USDC</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        {/* Main Hero / Voice Section */}
        <div className="glass p-12 mb-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          
          <h2 className="text-4xl font-bold mb-4 gradient-text">Send money with your voice</h2>
          <p className="text-gray-400 mb-12 max-w-md">Try saying "Send 50 USDC to Sarah" or "Transfer 20 EURC to John"</p>

          <button 
            onClick={handleRecord}
            className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 ${
              isRecording 
              ? 'bg-red-500/20 border-4 border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.4)] scale-110' 
              : 'bg-white/5 border-4 border-white/10 hover:border-blue-500/50 group'
            }`}
          >
            <div className={`p-6 rounded-full transition-all ${isRecording ? 'bg-red-500' : 'bg-blue-600 group-hover:scale-110'}`}>
              <Mic className="w-8 h-8 text-white" />
            </div>
          </button>
          
          <p className="mt-6 font-medium text-sm">
            {isRecording ? (
              <span className="text-red-400 animate-pulse-subtle">Recording your command...</span>
            ) : (
              <span className="text-gray-500">Tap to start speaking</span>
            )}
          </p>
        </div>

        {/* Action Confirmation (Conditional) */}
        {lastIntent && (
          <div className="glass p-6 mb-8 border-blue-500/50 bg-blue-500/5 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-blue-400">
              <ChevronRight className="w-5 h-5" /> Confirm Transaction
            </h3>
            <div className="flex items-center justify-between p-4 bg-black/40 rounded-xl mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">S</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Recipient</p>
                  <p className="font-bold">{lastIntent.to}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Amount</p>
                <p className="text-xl font-black text-white">{lastIntent.amount} {lastIntent.asset}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => setLastIntent(null)} className="py-3 px-6 rounded-xl border border-white/10 hover:bg-white/5 font-medium transition-all">Cancel</button>
              <button className="py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                Confirm & Send <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Grid Stats/History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Quick Contacts */}
          <section className="glass p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold flex items-center gap-2"><Users className="w-4 h-4 text-blue-400" /> Recent Contacts</h3>
              <button className="text-xs text-blue-400 hover:underline">View all</button>
            </div>
            <div className="space-y-4">
              {[ { name: 'Sarah', addr: 'G...k2L' }, { name: 'John Doe', addr: 'G...b8J' }, { name: 'Alice', addr: 'G...v9X' } ].map((contact, i) => (
                <div key={i} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center font-bold">
                      {contact.name[0]}
                    </div>
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-xs text-gray-500">{contact.addr}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-all" />
                </div>
              ))}
            </div>
          </section>

          {/* Recent History */}
          <section className="glass p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold flex items-center gap-2"><History className="w-4 h-4 text-blue-400" /> History</h3>
              <button className="text-xs text-blue-400 hover:underline">Full history</button>
            </div>
            <div className="space-y-4">
              {[ { to: 'Sarah', amount: '20 USDC', date: '2 mins ago' }, { to: 'Merch. Pay', amount: '5.50 EURC', date: 'Yesterday' }, { to: 'Rent', amount: '850 USDC', date: 'Apr 18' } ].map((tx, i) => (
                <div key={i} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium">To {tx.to}</p>
                      <p className="text-xs text-gray-500">{tx.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">-{tx.amount}</p>
                    <p className="text-[10px] text-green-400 font-bold tracking-widest uppercase">Success</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="max-w-4xl mx-auto py-12 text-center text-gray-600 text-xs mt-12">
        <p>&copy; 2026 VoxPay • Voice-Powered Decentralized Payments • Built on Stellar</p>
      </footer>
    </div>
  );
};

export default App;
