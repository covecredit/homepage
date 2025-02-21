import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, Shield, Globe2, Code2, Users } from 'lucide-react';

const About: React.FC<{ onNavigate: (section: string) => void; onWhitepaperClick: (e: React.MouseEvent) => void }> = ({ onNavigate, onWhitepaperClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black">
      <Navbar onNavigate={onNavigate} onWhitepaperClick={onWhitepaperClick} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
            Revolutionizing Decentralized Finance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combining deep expertise in cybersecurity and blockchain technology to create the next generation of DeFi solutions.
          </p>
        </div>

        {/* Timeline Section */}
        <section className="mb-20">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/20"></div>
            <div className="space-y-16">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
                <div className="ml-8 md:ml-0 md:flex md:items-center md:justify-between">
                  <div className="md:w-5/12 md:text-right md:pr-8">
                    <h3 className="text-2xl font-bold text-white">2012</h3>
                    <p className="text-gray-300">Early Blockchain Research</p>
                  </div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-300">
                      Began exploring blockchain technology and its potential for revolutionizing financial systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
                <div className="ml-8 md:ml-0 md:flex md:items-center md:justify-between">
                  <div className="md:w-5/12 md:text-right md:pr-8">
                    <h3 className="text-2xl font-bold text-white">2015-2020</h3>
                    <p className="text-gray-300">Blockchain Innovation</p>
                  </div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-300">
                      Advanced research into blockchain internals, P2P protocols, and decentralized technologies. Featured speakers at COINFEST and other major events.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
                <div className="ml-8 md:ml-0 md:flex md:items-center md:justify-between">
                  <div className="md:w-5/12 md:text-right md:pr-8">
                    <h3 className="text-2xl font-bold text-white">2023</h3>
                    <p className="text-gray-300">dcentral.finance Launch</p>
                  </div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-300">
                      Launched dcentral.finance, bringing advanced DeFi solutions powered by the XRP Ledger to the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-900/20 p-8 rounded-lg backdrop-blur-sm border border-blue-500/20">
              <Shield className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Security First</h3>
              <p className="text-gray-300">
                Industry-leading cybersecurity expertise ensuring the highest security standards in all our products.
              </p>
            </div>
            <div className="bg-blue-900/20 p-8 rounded-lg backdrop-blur-sm border border-blue-500/20">
              <Globe2 className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">XRPL Pioneers</h3>
              <p className="text-gray-300">
                Leading innovation on the XRP Ledger with advanced DeFi solutions and tools.
              </p>
            </div>
            <div className="bg-blue-900/20 p-8 rounded-lg backdrop-blur-sm border border-blue-500/20">
              <Globe2 className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Global Impact</h3>
              <p className="text-gray-300">
                Featured speakers at major blockchain events, sharing expertise and vision for decentralized finance.
              </p>
            </div>
            <div className="bg-blue-900/20 p-8 rounded-lg backdrop-blur-sm border border-blue-500/20">
              <Code2 className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Innovation Leaders</h3>
              <p className="text-gray-300">
                Pushing the boundaries of blockchain technology through research and development.
              </p>
            </div>
            <div className="bg-blue-900/20 p-8 rounded-lg backdrop-blur-sm border border-blue-500/20">
              <Users className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Community Driven</h3>
              <p className="text-gray-300">
                Building and supporting a global community of developers and traders.
              </p>
            </div>
            <div className="bg-blue-900/20 p-8 rounded-lg backdrop-blur-sm border border-blue-500/20">
              <Award className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Industry Recognition</h3>
              <p className="text-gray-300">
                Acknowledged leaders in blockchain security and DeFi innovation.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;