
import React, { useState } from 'react';
import Link from 'next/link';

interface GraphViewOverlayProps {
  onClose: () => void;
}

const GraphViewOverlay: React.FC<GraphViewOverlayProps> = ({ onClose }) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filters = ['People', 'Places', 'Events'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Graph View</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="h-64 bg-gray-200 rounded-lg mb-4">
          {/* Add a simple graph visualization here */}
        </div>

        <div className="flex space-x-2 mb-4">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-lg ${activeFilter === filter ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="h-20 bg-gray-100 rounded-lg mb-4 overflow-x-auto whitespace-nowrap">
          {/* Add scrollable video ribbon here */}
        </div>

        <Link href="/graph-view" className="block w-full bg-blue-500 text-white text-center py-2 rounded-lg">
          Full Graph View
        </Link>
      </div>
    </div>
  );
};

export default GraphViewOverlay;
        