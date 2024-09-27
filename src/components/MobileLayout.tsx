'use client'

import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import Image from 'next/image';
import CreateNewOverlay from './CreateNewOverlay';
import ReliveOverlay from './ReliveOverlay';
import TimelineOverlay from './TimelineOverlay';
import GraphViewOverlay from './GraphViewOverlay';
import FavoriteContactsOverlay from './FavoriteContactsOverlay';

const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Folders</h2>
        <ul>
          <li className="mb-2">Personal</li>
          <li className="mb-2">Work</li>
          <li className="mb-2">Family</li>
        </ul>
      </div>
    </div>
  );
};

const ActionButtons: React.FC<{ toggleOverlay: (overlayName: string) => void }> = ({ toggleOverlay }) => {
  const buttons = [
    { icon: Icons.FileText, label: 'Create New', overlay: 'createNew' },
    { icon: Icons.Play, label: 'Relive', overlay: 'relive' },
    { icon: Icons.Calendar, label: 'Timeline', overlay: 'timeline' },
    { icon: Icons.BarChart2, label: 'Graph View', overlay: 'graphView' },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {buttons.map(({ icon: Icon, label, overlay }) => (
        <button key={label} onClick={() => toggleOverlay(overlay)} className="flex flex-col items-center justify-center bg-gray-800 p-3 rounded-lg">
          <Icon size={22} className="mb-2 text-white" />
          <span className="text-xs text-white">{label}</span>
        </button>
      ))}
    </div>
  );
};

const FavoriteContacts: React.FC<{ toggleOverlay: (overlayName: string) => void }> = ({ toggleOverlay }) => {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold mb-4 text-center text-white">Favorite Contacts</h3>
      <div className="flex justify-center gap-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} onClick={() => toggleOverlay('favoriteContacts')} className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-sm cursor-pointer text-white">
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

const JumpBackIn: React.FC = () => {
  const memories = [
    { title: 'Memory 1', lastEdited: '2h ago' },
    { title: 'Memory 2', lastEdited: '1d ago' },
    { title: 'Memory 3', lastEdited: '3d ago' },
    { title: 'Memory 4', lastEdited: '4d ago' },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-white">Jump Back In</h3>
      <div className="grid grid-cols-2 gap-4">
        {memories.map((memory, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-white font-semibold">{memory.title}</h4>
            <p className="text-gray-400 text-sm">Last edited: {memory.lastEdited}</p>
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
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-white">Suggested Journeys</h3>
      <div className="flex space-x-4 overflow-x-auto">
        {journeys.map((journey, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg min-w-[200px]">
            <h4 className="text-white font-semibold">{journey.title}</h4>
            <p className="text-gray-400 text-sm">{journey.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SidebarToggle: React.FC<{ isOpen: boolean; onToggle: () => void }> = ({ isOpen, onToggle }) => {
  return (
    <button onClick={onToggle} className="fixed top-4 left-4 z-30 text-white">
      {isOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
    </button>
  );
};

const Navigation: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-4">
      <div className="flex justify-around">
        <Icons.Home size={24} />
        <Icons.Mail size={24} />
        <Icons.Settings size={24} />
      </div>
    </nav>
  );
};

const MobileLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);

  const toggleOverlay = (overlayName: string) => {
    setActiveOverlay(activeOverlay === overlayName ? null : overlayName);
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-16 flex flex-col relative">
      {/* Top Row */}
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-gray-800 shadow-sm z-20">
        <div className="text-lg font-bold text-white">Logo</div>
        <button className="p-2 bg-gray-700 rounded-full">
          <Icons.Search size={18} className="text-white" />
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content */}
      <div className={`pt-20 px-4 flex-grow flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : ''}`}>
        <div className="rounded-xl p-4 flex flex-col justify-between h-full space-y-8">
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

      {/* Overlays Container */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        {activeOverlay === 'createNew' && <CreateNewOverlay onClose={() => setActiveOverlay(null)} />}
        {activeOverlay === 'relive' && <ReliveOverlay onClose={() => setActiveOverlay(null)} />}
        {activeOverlay === 'timeline' && <TimelineOverlay onClose={() => setActiveOverlay(null)} />}
        {activeOverlay === 'graphView' && <GraphViewOverlay onClose={() => setActiveOverlay(null)} />}
        {activeOverlay === 'favoriteContacts' && <FavoriteContactsOverlay onClose={() => setActiveOverlay(null)} />}
      </div>
    </div>
  );
};

export default MobileLayout;