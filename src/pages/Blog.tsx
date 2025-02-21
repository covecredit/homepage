import React from 'react';
import { ChevronDown } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Blog & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with our latest announcements, tutorials, and insights
          </p>
        </div>

        <div className="space-y-12">
          {/* Featured Post */}
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 backdrop-blur-sm rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832"
              alt="Featured Post"
              className="w-full h-96 object-cover"
            />
            <div className="p-8">
              <span className="text-blue-400 text-sm font-semibold">ANNOUNCEMENT</span>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Introducing dcentral.finance: The Future of DeFi
              </h2>
              <p className="mt-4 text-gray-300 text-lg">
                We're excited to announce the launch of dcentral.finance, bringing next-generation DeFi solutions to everyone. Our platform combines cutting-edge blockchain technology with user-centric design to make decentralized finance accessible to all.
              </p>
              <div className="mt-6">
                <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                  Read More <ChevronDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
                </a>
              </div>
            </div>
          </div>

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 backdrop-blur-sm rounded-2xl p-6">
                <span className="text-blue-400 text-sm font-semibold">
                  {['TUTORIAL', 'DEVELOPMENT', 'SECURITY'][i % 3]}
                </span>
                <h3 className="mt-2 text-xl font-bold text-white">
                  {[
                    'Getting Started with Web3 Wallet',
                    'Building with dcentral SDK',
                    'Best Practices for DeFi Security',
                    'Understanding Smart Contracts',
                    'Advanced Wallet Features',
                    'DeFi Trading Strategies'
                  ][i]}
                </h3>
                <p className="mt-4 text-gray-300">
                  {[
                    'Learn how to set up and secure your Web3 wallet in minutes...',
                    'A comprehensive guide to integrating our SDK into your project...',
                    'Essential security tips for protecting your digital assets...',
                    'Deep dive into smart contract development and best practices...',
                    'Explore advanced features and customization options...',
                    'Master DeFi trading with our expert insights...'
                  ][i]}
                </p>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    Read More <ChevronDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;