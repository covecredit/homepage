import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import HexBackground from './components/HexBackground';
import Blog from './pages/Blog';
import About from './pages/About';
import Team from './pages/Team';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import xrplLogo from './assets/xrpl-logo.svg';
import coveWalletImage from './assets/cove.png';

function App() {
  const [email, setEmail] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    if (section === 'blog' || section === 'about' || section === 'team') {
      return;
    }
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhitepaperClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('/HH_whitepaper.pdf', '_blank');
  };

  const terminalCode = `#include <ripple/core/Config.h>
#include <ripple/protocol/TxFlags.h>

class XRPLWallet {
    ripple::STTx createPayment(
        std::string_view dest, 
        uint64_t amount
    ) {
        ripple::STTx tx;
        tx.setFieldU16(sfTransactionType, ttPAYMENT);
        tx.setFieldAmount(sfAmount, amount);
        return tx;
    }

    void submitToNetwork(ripple::STTx const& tx) {
        // Sign and submit to XRPL network
        auto const result = submitTransaction(tx);
        std::cout << "TX: " << result.txid << std::endl;
    }
};`;

  if (activeSection === 'blog') {
    return (
      <>
        <Navbar onNavigate={handleNavigation} onWhitepaperClick={handleWhitepaperClick} />
        <Blog />
        <Footer />
      </>
    );
  }

  if (activeSection === 'about') {
    return <About onNavigate={handleNavigation} onWhitepaperClick={handleWhitepaperClick} />;
  }

  if (activeSection === 'team') {
    return <Team onNavigate={handleNavigation} onWhitepaperClick={handleWhitepaperClick} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar onNavigate={handleNavigation} onWhitepaperClick={handleWhitepaperClick} />

      {/* Main Content */}
      <main className="relative">
        <HexBackground />
        <div className="relative z-10">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Next Generation
                </span>
                <br />
                DeFi Platform
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Experience the future of decentralized finance with our comprehensive suite of DeFi tools, smart contracts, and secure wallet solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button onClick={handleWhitepaperClick} className="px-8 py-3 bg-transparent border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500/10 transition-colors duration-200 flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Read Whitepaper
                </button>
              </div>
            </div>
          </section>

          {/* COVE Wallet Section */}
          <section id="web3-wallet" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    COVE Wallet
                  </h2>
                  <p className="text-gray-300 text-lg mb-8">
                    A modern, interactive wallet interface for the XRP Ledger (XRPL). Experience real-time price tracking, transaction visualization, integrated DEX trading platform, and advanced trading tools.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-300">
                      <div className="h-6 w-6 mr-3 text-blue-500">✓</div>
                      Real-time XRP/USD tracking
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="h-6 w-6 mr-3 text-blue-500">✓</div>
                      Interactive transaction graphs
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="h-6 w-6 mr-3 text-blue-500">✓</div>
                      Built-in DEX trading platform
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="h-6 w-6 mr-3 text-blue-500">✓</div>
                      Advanced trading tools
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="h-6 w-6 mr-3 text-blue-500">✓</div>
                      NFT marketplace integration
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="h-6 w-6 mr-3 text-blue-500">✓</div>
                      Decentralized exchange support
                    </li>
                  </ul>
                </div>
                <div className="relative animate-float">
                  <img 
                    src={coveWalletImage} 
                    alt="COVE Wallet Interface" 
                    className="rounded-lg shadow-2xl border border-blue-500/20"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Developer Tools Section */}
          <section id="developer-sdk" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-900/20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative animate-float">
                  <div className="terminal-window w-full max-w-xl mx-auto">
                    <div className="terminal-header">
                      <div className="terminal-dot bg-red-500"></div>
                      <div className="terminal-dot bg-yellow-500"></div>
                      <div className="terminal-dot bg-green-500"></div>
                    </div>
                    <div className="terminal-content text-sm">
                      <pre className="font-mono">
                        <code className="text-green-400">{terminalCode}</code>
                      </pre>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    Developer Tools
                  </h2>
                  <p className="text-gray-300 text-lg mb-8">
                    Command-line utilities for working with the XRPL blockchain. xrpl-cli is to the XRPL blockchain what curl / wget are to the web.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-300">
                      <div className="h-6 w-6 mr-3 text-blue-500">✓</div>
                      Create wallets & manage accounts
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="h-6 w-6 mr-3 text-blue-500">✓</div>
                      Mint & trade NFTs
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="h-6 w-6 mr-3 text-blue-500">✓</div>
                      Query nodes & manage signatures
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Trusted By Section */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-900/10">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-2xl font-semibold text-white mb-8">Trusted by Industry Leaders</h2>
              <div className="flex justify-center items-center">
                <img src={xrplLogo} alt="XRPL Logo" className="h-16 w-16 opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-900/20">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest updates, features, and news about dcentral.finance.
              </p>
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-black/50 border border-blue-500/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;