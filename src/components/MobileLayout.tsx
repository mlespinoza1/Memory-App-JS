'use client'

import React, { useState, useCallback } from 'react';
import { Search } from 'lucide-react';
import Sidebar from './Sidebar';
import SidebarToggle from './SidebarToggle';
import Navigation from './Navigation';
import ActionButtons from './ActionButtons';
import FavoriteContacts from './FavoriteContacts';
import JumpBackIn from './JumpBackIn';
import SuggestedJourneys from './SuggestedJourneys';
import FavoriteContactsOverlay from './FavoriteContactsOverlay';
import CreateNewOverlay from './CreateNewOverlay';
import GraphViewOverlay from './GraphViewOverlay';
import ReliveOverlay from './ReliveOverlay';
import TimelineOverlay from './TimelineOverlay';
import { OverlayProvider } from '../context/OverlayContext';
import ErrorBoundary from './common/ErrorBoundary';

const Header: React.FC = () => (
  <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white shadow-sm z-20">
    <div className="text-lg font-bold">Logo</div>
    <div className="flex items-center">
      <button className="p-2 bg-gray-100 rounded-full">
        <Search size={18} className="text-gray-600" />
      </button>
    </div>
  </div>
);

const MainContent: React.FC<{ sidebarOpen: boolean }> = ({ sidebarOpen }) => (
  <div className={`pt-20 pl-4 flex-grow flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0 md:ml-64'} overflow-hidden`}>
    <div className="bg-white rounded-xl p-4 flex flex-col h-full">
      <div className="flex-shrink-0">
        <ActionButtons />
        <FavoriteContacts />
        <JumpBackIn />
        <SuggestedJourneys />
      </div>
    </div>
  </div>
);

const Overlays: React.FC = () => (
  <>
    <FavoriteContactsOverlay />
    <CreateNewOverlay />
    <GraphViewOverlay />
    <ReliveOverlay />
    <TimelineOverlay />
  </>
);

const MobileLayoutContent: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = useCallback(() => {
    setSidebarOpen(prevState => !prevState);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pb-16 flex flex-col overflow-hidden">
      <Header />
      <Sidebar isOpen={sidebarOpen} />
      <MainContent sidebarOpen={sidebarOpen} />
      <SidebarToggle isOpen={sidebarOpen} onToggle={handleSidebarToggle} />
      <Navigation />
      <Overlays />
    </div>
  );
};

const MobileLayout: React.FC = () => (
  <ErrorBoundary>
    <OverlayProvider>
      <MobileLayoutContent />
    </OverlayProvider>
  </ErrorBoundary>
);

export default MobileLayout;
