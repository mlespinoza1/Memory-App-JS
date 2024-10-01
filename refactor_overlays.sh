#!/bin/bash

# Update MobileLayout.tsx
cat << 'EOF' > src/components/MobileLayout.tsx
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
import { OverlayProvider, useOverlay } from '../context/OverlayContext';
import ErrorBoundary from './common/ErrorBoundary';

const MobileLayoutContent: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { overlayStates } = useOverlay();

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
            <ActionButtons />
            <FavoriteContacts />
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
      {overlayStates.favoriteContacts && <FavoriteContactsOverlay />}
      {overlayStates.createNew && <CreateNewOverlay />}
      {overlayStates.graphView && <GraphViewOverlay />}
      {overlayStates.relive && <ReliveOverlay />}
      {overlayStates.timeline && <TimelineOverlay />}
    </div>
  );
};

const MobileLayout: React.FC = () => {
  return (
    <ErrorBoundary>
      <OverlayProvider>
        <MobileLayoutContent />
      </OverlayProvider>
    </ErrorBoundary>
  );
};

export default MobileLayout;
EOF

# Update overlay components
for overlay in FavoriteContactsOverlay CreateNewOverlay GraphViewOverlay ReliveOverlay TimelineOverlay
do
cat << EOF > src/components/${overlay}.tsx
import React from 'react';
import { useOverlay } from '../context/OverlayContext';
import Overlay from './common/Overlay';

const ${overlay}: React.FC = () => {
  const { toggleOverlay } = useOverlay();

  return (
    <Overlay
      title="${overlay.replace('Overlay', '')}"
      onClose={() => toggleOverlay('${overlay.charAt(0).toLowerCase() + overlay.slice(1).replace('Overlay', '')}')}
    >
      {/* Your overlay content here */}
    </Overlay>
  );
};

export default ${overlay};
EOF
done

# Update ActionButtons component
cat << EOF > src/components/ActionButtons.tsx
import React from 'react';
import { useOverlay } from '../context/OverlayContext';
import * as Icons from 'lucide-react';

const ActionButtons: React.FC = () => {
  const { toggleOverlay } = useOverlay();

  return (
    <div className="grid grid-cols-4 gap-2 mb-3">
      <button onClick={() => toggleOverlay('createNew')} className="flex flex-col items-center justify-center p-2 bg-white rounded-xl shadow">
        <Icons.PlusSquare size={24} />
        <span className="text-xs mt-1">Create New</span>
      </button>
      <button onClick={() => toggleOverlay('relive')} className="flex flex-col items-center justify-center p-2 bg-white rounded-xl shadow">
        <Icons.Play size={24} />
        <span className="text-xs mt-1">Relive</span>
      </button>
      <button onClick={() => toggleOverlay('timeline')} className="flex flex-col items-center justify-center p-2 bg-white rounded-xl shadow">
        <Icons.Calendar size={24} />
        <span className="text-xs mt-1">Timeline</span>
      </button>
      <button onClick={() => toggleOverlay('graphView')} className="flex flex-col items-center justify-center p-2 bg-white rounded-xl shadow">
        <Icons.BarChart2 size={24} />
        <span className="text-xs mt-1">Graph View</span>
      </button>
    </div>
  );
};

export default ActionButtons;
EOF

echo "Refactoring of overlays and MobileLayout complete. Please review the changes and adjust as necessary."