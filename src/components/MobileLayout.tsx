'use client'

import React, { useState } from 'react';
import * as Icons from 'lucide-react';
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

const MobileLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [favoriteContactsOverlayOpen, setFavoriteContactsOverlayOpen] = useState(false);
  const [createNewOverlayOpen, setCreateNewOverlayOpen] = useState(false);
  const [graphViewOverlayOpen, setGraphViewOverlayOpen] = useState(false);
  const [reliveOverlayOpen, setReliveOverlayOpen] = useState(false);
  const [timelineOverlayOpen, setTimelineOverlayOpen] = useState(false);

  const toggleFavoriteContactsOverlay = () => setFavoriteContactsOverlayOpen(!favoriteContactsOverlayOpen);
  const toggleCreateNewOverlay = () => setCreateNewOverlayOpen(!createNewOverlayOpen);
  const toggleGraphViewOverlay = () => setGraphViewOverlayOpen(!graphViewOverlayOpen);
  const toggleReliveOverlay = () => setReliveOverlayOpen(!reliveOverlayOpen);
  const toggleTimelineOverlay = () => setTimelineOverlayOpen(!timelineOverlayOpen);

  return (
    <div className="min-h-screen bg-gray-100 pb-16 flex flex-col overflow-hidden">
      {/* Top Row */}
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white shadow-sm z-20">
        <div className="text-lg font-bold">Logo</div>
        <div className="flex items-center">
          <button className="p-2 bg-gray-100 rounded-full">
            <Icons.Search size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content */}
      <div className={`pt-20 pl-4 flex-grow flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0 md:ml-64'} overflow-hidden`}>
        <div className="bg-white rounded-xl p-4 flex flex-col h-full">
          <div className="flex-shrink-0">
            <ActionButtons
              toggleCreateNewOverlay={toggleCreateNewOverlay}
              toggleReliveOverlay={toggleReliveOverlay}
              toggleTimelineOverlay={toggleTimelineOverlay}
              toggleGraphViewOverlay={toggleGraphViewOverlay}
            />
            <FavoriteContacts toggleFavoriteContactsOverlay={toggleFavoriteContactsOverlay} />
            <JumpBackIn />
            <SuggestedJourneys />
          </div>
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <SidebarToggle isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Navigation */}
      <Navigation />

      {/* Overlays */}
      <FavoriteContactsOverlay isOpen={favoriteContactsOverlayOpen} onClose={() => setFavoriteContactsOverlayOpen(false)} />
      <CreateNewOverlay isOpen={createNewOverlayOpen} onClose={() => setCreateNewOverlayOpen(false)} />
      <GraphViewOverlay isOpen={graphViewOverlayOpen} onClose={() => setGraphViewOverlayOpen(false)} />
      <ReliveOverlay isOpen={reliveOverlayOpen} onClose={() => setReliveOverlayOpen(false)} />
      <TimelineOverlay isOpen={timelineOverlayOpen} onClose={() => setTimelineOverlayOpen(false)} />
    </div>
  );
};

export default MobileLayout;