'use client'

import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import Image from 'next/image';
import CreateNewOverlay from './CreateNewOverlay';
import ReliveOverlay from './ReliveOverlay';
import TimelineOverlay from './TimelineOverlay';
import GraphViewOverlay from './GraphViewOverlay';
import FavoriteContactsOverlay from './FavoriteContactsOverlay';

// ... (keep all other component definitions unchanged)

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
      {activeOverlay && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          {activeOverlay === 'createNew' && <CreateNewOverlay onClose={() => setActiveOverlay(null)} />}
          {activeOverlay === 'relive' && <ReliveOverlay onClose={() => setActiveOverlay(null)} />}
          {activeOverlay === 'timeline' && <TimelineOverlay onClose={() => setActiveOverlay(null)} />}
          {activeOverlay === 'graphView' && <GraphViewOverlay onClose={() => setActiveOverlay(null)} />}
          {activeOverlay === 'favoriteContacts' && <FavoriteContactsOverlay onClose={() => setActiveOverlay(null)} />}
        </div>
      )}
    </div>
  );
};

export default MobileLayout;