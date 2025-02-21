import React from 'react';
import Navbar from '../components/Navbar';

const Team: React.FC<{ onNavigate: (section: string) => void; onWhitepaperClick: (e: React.MouseEvent) => void }> = ({ onNavigate, onWhitepaperClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black">
      <Navbar onNavigate={onNavigate} onWhitepaperClick={onWhitepaperClick} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the innovators and experts behind dcentral.finance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Chen",
              role: "Chief Executive Officer",
              bio: "Former fintech executive with 15 years of experience in blockchain and financial technologies.",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            },
            {
              name: "Michael Rodriguez",
              role: "Chief Technology Officer",
              bio: "Blockchain architect with extensive experience in XRPL and distributed systems.",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
            },
            {
              name: "David Kim",
              role: "Head of Product",
              bio: "Product strategist specializing in DeFi applications and user experience.",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            }
          ].map((member) => (
            <div key={member.name} className="bg-blue-900/20 rounded-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.role}</p>
                <p className="text-gray-300">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;