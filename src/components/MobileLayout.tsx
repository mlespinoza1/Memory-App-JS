'use client'

import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import Image from 'next/image';
import CreateNewOverlay from './CreateNewOverlay';
import ReliveOverlay from './ReliveOverlay';
import TimelineOverlay from './TimelineOverlay';
import GraphViewOverlay from './GraphViewOverlay';
import FavoriteContactsOverlay from './FavoriteContactsOverlay';

// Add the Sidebar component here
const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      {/* Add sidebar content here */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        {/* Add more sidebar items as needed */}
      </div>
    </div>
  );
};

// ... (keep all other component definitions unchanged)

const ActionButtons: React.FC<{ toggleOverlay: (overlayName: string) => void }> = ({ toggleOverlay }) => {
  const buttons = [
    { icon: Icons.Book, label: 'Create New', overlay: 'createNew' },
    { icon: Icons.Play, label: 'Relive', overlay: 'relive' },
    { icon: Icons.Calendar, label: 'Timeline', overlay: 'timeline' },
    { icon: Icons.BarChart2, label: 'Graph View', overlay: 'graphView' },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {buttons.map(({ icon: Icon, label, overlay }) => (
        <button key={label} onClick={() => toggleOverlay(overlay)} className="flex flex-col items-center justify-center bg-white p-3 rounded-lg shadow-md">
          <Icon size={22} className="mb-2" />
          <span className="text-xs">{label}</span>
        </button>
      ))}
    </div>
  );
};

const FavoriteContacts: React.FC<{ toggleOverlay: (overlayName: string) => void }> = ({ toggleOverlay }) => {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold mb-4 text-center">Favorite Contacts</h3>
      <div className="flex justify-center gap-14">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} onClick={() => toggleOverlay('favoriteContacts')} className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm cursor-pointer">
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

// ... (keep all other component definitions unchanged)

const MobileLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);

  const toggleOverlay = (overlayName: string) => {
    setActiveOverlay(activeOverlay === overlayName ? null : overlayName);
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-16 flex flex-col">
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
      <div className={`pt-20 px-4 flex-grow flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : ''}`}>
        <div className="bg-white rounded-xl p-4 flex flex-col justify-between h-full space-y-8">
          <div className="space-y-6 flex-shrink-0">
            <ActionButtons toggleOverlay={toggleOverlay} />
            <FavoriteContacts toggleOverlay={toggleOverlay} />
          </div>
          <JumpBackIn />
          <SuggestedJourneys />
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <SidebarToggle isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Navigation */}
      <Navigation />

      {/* Overlays */}
      {activeOverlay === 'createNew' && <CreateNewOverlay onClose={() => setActiveOverlay(null)} />}
      {activeOverlay === 'relive' && <ReliveOverlay onClose={() => setActiveOverlay(null)} />}
      {activeOverlay === 'timeline' && <TimelineOverlay onClose={() => setActiveOverlay(null)} />}
      {activeOverlay === 'graphView' && <GraphViewOverlay onClose={() => setActiveOverlay(null)} />}
      {activeOverlay === 'favoriteContacts' && <FavoriteContactsOverlay onClose={() => setActiveOverlay(null)} />}
    </div>
  );
};

export default MobileLayout;