
import React from 'react';
import Link from 'next/link';

interface TimelineOverlayProps {
  onClose: () => void;
}

const TimelineOverlay: React.FC<TimelineOverlayProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Timeline Preview</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="h-40 bg-gray-200 rounded-lg mb-4">
          {/* Add a simple timeline preview here */}
        </div>

        <Link href="/timeline" className="block w-full bg-blue-500 text-white text-center py-2 rounded-lg">
          View Full Timeline
        </Link>
      </div>
    </div>
  );
};

export default TimelineOverlay;
        