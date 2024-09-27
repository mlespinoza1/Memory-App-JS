
import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import CreateNewOverlay from './CreateNewOverlay';
import ReliveOverlay from './ReliveOverlay';
import TimelineOverlay from './TimelineOverlay';
import GraphViewOverlay from './GraphViewOverlay';
import FavoriteContactsOverlay from './FavoriteContactsOverlay';

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

      {/* Main Content */}
      <div className={`pt-20 px-4 flex-grow flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : ''}`}>
        <div className="bg-white rounded-xl p-4 flex flex-col justify-between h-full space-y-8">
          <div className="space-y-6 flex-shrink-0">
            <div className="grid grid-cols-4 gap-3">
              <button onClick={() => toggleOverlay('createNew')} className="flex flex-col items-center justify-center bg-white p-3 rounded-lg shadow-md">
                <Icons.Book size={22} className="mb-2" />
                <span className="text-xs">Create New</span>
              </button>
              <button onClick={() => toggleOverlay('relive')} className="flex flex-col items-center justify-center bg-white p-3 rounded-lg shadow-md">
                <Icons.Play size={22} className="mb-2" />
                <span className="text-xs">Relive</span>
              </button>
              <button onClick={() => toggleOverlay('timeline')} className="flex flex-col items-center justify-center bg-white p-3 rounded-lg shadow-md">
                <Icons.Calendar size={22} className="mb-2" />
                <span className="text-xs">Timeline</span>
              </button>
              <button onClick={() => toggleOverlay('graphView')} className="flex flex-col items-center justify-center bg-white p-3 rounded-lg shadow-md">
                <Icons.BarChart2 size={22} className="mb-2" />
                <span className="text-xs">Graph View</span>
              </button>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-semibold mb-4 text-center">Favorite Contacts</h3>
              <div className="flex justify-center gap-14">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => toggleOverlay('favoriteContacts')}
                    className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm"
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Add JumpBackIn and SuggestedJourneys components here */}
        </div>
      </div>

      {/* Overlays */}
      {activeOverlay === 'createNew' && <CreateNewOverlay onClose={() => setActiveOverlay(null)} />}
      {activeOverlay === 'relive' && <ReliveOverlay onClose={() => setActiveOverlay(null)} />}
      {activeOverlay === 'timeline' && <TimelineOverlay onClose={() => setActiveOverlay(null)} />}
      {activeOverlay === 'graphView' && <GraphViewOverlay onClose={() => setActiveOverlay(null)} />}
      {activeOverlay === 'favoriteContacts' && <FavoriteContactsOverlay onClose={() => setActiveOverlay(null)} />}

      {/* Add SidebarToggle and Navigation components here */}
    </div>
  );
};

export default MobileLayout;
        