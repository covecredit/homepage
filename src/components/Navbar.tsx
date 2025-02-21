import React from 'react';
import { Wallet, ChevronDown, Hexagon } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  onWhitepaperClick: (e: React.MouseEvent) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav className="fixed w-full nav-blur z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Hexagon className="h-8 w-8 text-blue-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-3 w-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  dcentral
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="relative group">
                  <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-900/50 flex items-center">
                    Products
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/90 backdrop-blur-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      <button onClick={() => onNavigate('web3-wallet')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-blue-900/50">
                        COVE Wallet
                      </button>
                      <button onClick={() => onNavigate('developer-sdk')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-blue-900/50">
                        Developer Tools
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-900/50 flex items-center">
                    Company
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/90 backdrop-blur-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      <button onClick={() => onNavigate('about')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-blue-900/50">
                        About Us
                      </button>
                      <button onClick={() => onNavigate('team')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-blue-900/50">
                        Team
                      </button>
                    </div>
                  </div>
                </div>
                <button onClick={() => onNavigate('developers')} className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-900/50">
                  Developers
                </button>
                <button onClick={() => onNavigate('blog')} className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-900/50">
                  Blog
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center">
              <Wallet className="mr-2 h-4 w-4" />
              Launch App
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;