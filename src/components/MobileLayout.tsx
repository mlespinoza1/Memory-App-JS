'use client'

import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import Image from 'next/image';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div 
      className={`
        fixed top-20 left-0
        h-[calc(100vh-9.7rem)]
        bg-white bg-opacity-90 backdrop-blur-md 
        transition-all duration-300 ease-in-out 
        overflow-y-auto shadow-lg
        z-30
        rounded-lg
        ${isOpen ? 'w-64' : 'w-0'}
        md:w-64 // Ensure sidebar is open on larger screens
      `}
    >
      {/* Plus Sign */}
      <div className="absolute top-3 left-3">
        <button className="bg-gray-300 p-1 rounded-full hover:bg-gray-400">
          <Icons.Plus size={16} />
        </button>
      </div>

      {/* Folders Section */}
      <div className={`p-4 mt-16`}>
        <h2 className="text-lg font-bold mb-4">Folders</h2>
        {['Personal', 'Work', 'Family'].map((folder) => (
          <div key={folder} className="mb-2 p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">{folder}</div>
        ))}
      </div>
    </div>
  );
};

const SidebarToggle: React.FC<{ isOpen: boolean; onToggle: () => void; }> = ({ isOpen, onToggle }) => {
  return (
    <button 
      className={`absolute top-1/2 transform -translate-y-1/2 ${isOpen ? 'left-60' : 'left-4'} bg-white p-2 rounded-full shadow-md z-40 md:hidden`} 
      onClick={onToggle}
    >
      {isOpen ? <Icons.ChevronLeft size={24} /> : <Icons.ChevronRight size={24} />}
    </button>
  );
};

const ActionButtons: React.FC = () => {
  const buttons = [
    { icon: Icons.Book, label: 'Create New' },
    { icon: Icons.Play, label: 'Relive' },
    { icon: Icons.Calendar, label: 'Timeline' },
    { icon: Icons.BarChart2, label: 'Graph View' },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {buttons.map(({ icon: Icon, label }) => (
        <button key={label} className="flex flex-col items-center justify-center bg-white p-3 rounded-lg shadow-md">
          <Icon size={22} className="mb-2" />
          <span className="text-xs">{label}</span>
        </button>
      ))}
    </div>
  );
};

const FavoriteContacts: React.FC = () => {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold mb-4 text-center">Favorite Contacts</h3>
      <div className="flex justify-between">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm">
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

const JumpBackIn: React.FC = () => {
  const memories = [
    { title: 'Memory 1', description: 'Last edited: 2h ago', image: 'https://via.placeholder.com/160x90' },
    { title: 'Memory 2', description: 'Last edited: 1d ago', image: 'https://via.placeholder.com/160x90' },
    { title: 'Memory 3', description: 'Last edited: 3d ago', image: 'https://via.placeholder.com/160x90' },
    { title: 'Memory 4', description: 'Last edited: 4d ago', image: 'https://via.placeholder.com/160x90' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6 flex-shrink-0 p-4">
      <h3 className="text-lg font-semibold mb-4 text-center">Jump Back In</h3>
      <div className="flex overflow-x-auto pb-2 space-x-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {memories.map((memory, index) => (
          <div key={index} className="flex-shrink-0 w-40 bg-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-24">
              <Image 
                src={memory.image}
                alt={memory.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-2 text-center">
              <div className="text-sm font-medium">{memory.title}</div>
              <div className="text-xs text-gray-600 mt-1">{memory.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SuggestedJourneys: React.FC = () => {
  const journeys = [
    { title: 'Journey 1', description: 'Short description' },
    { title: 'Journey 2', description: 'Short description' },
    { title: 'Journey 3', description: 'Short description' },
    { title: 'Journey 4', description: 'Short description' },
    { title: 'Journey 5', description: 'Short description' },
  ];

  return (
    <div className="flex-grow flex flex-col mt-6">
      <h3 className="text-lg font-semibold mb-4 text-center">Suggested Journeys</h3>
      <div className="flex-grow flex items-center">
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          {journeys.map(({ title, description }, index) => (
            <div key={index} className="flex-shrink-0 w-48 bg-gray-200 rounded-lg overflow-hidden">
              <div className="p-4 text-center h-32 flex flex-col justify-center">
                <div className="font-medium text-sm">{title}</div>
                <div className="text-xs text-gray-600 mt-2">{description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navigation: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center p-4 bg-white border-t z-20">
      <Icons.Home size={24} className="text-gray-600 cursor-pointer hover:text-gray-900" />
      <Icons.Mail size={24} className="text-gray-600 cursor-pointer hover:text-gray-900" />
      <Icons.Settings size={24} className="text-gray-600 cursor-pointer hover:text-gray-900" />
    </div>
  );
};

const MobileLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 pb-16 flex flex-col overflow-hidden">
      {/* Top Row */}
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white shadow-sm z-20">
        <div className="text-lg font-bold">Logo</div>
        <button className="p-2 bg-gray-100 rounded-full">
          <Icons.Search size={18} className="text-gray-600" />
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content */}
      <div className={`pt-20 px-4 flex-grow flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0 md:ml-64'} overflow-hidden`}>
        <div className="bg-white rounded-xl p-4 flex flex-col h-full">
          <div className="flex-shrink-0">
            <ActionButtons />
            <FavoriteContacts />
            <JumpBackIn />
          </div>
          <SuggestedJourneys />
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <SidebarToggle isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Navigation */}
      <Navigation />
    </div>
  );
};

export default MobileLayout;