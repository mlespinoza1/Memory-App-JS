
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ReliveOverlayProps {
  onClose: () => void;
}

const ReliveOverlay: React.FC<ReliveOverlayProps> = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState<'random' | 'ai' | null>(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Relive</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <button
            className={`p-4 border rounded-lg ${selectedOption === 'random' ? 'border-blue-500' : 'border-gray-300'}`}
            onClick={() => setSelectedOption('random')}
          >
            <Image src="/api/placeholder/100/100" alt="Random Memory" width={100} height={100} />
            <p className="mt-2">Random Memory</p>
          </button>
          <button
            className={`p-4 border rounded-lg ${selectedOption === 'ai' ? 'border-blue-500' : 'border-gray-300'}`}
            onClick={() => setSelectedOption('ai')}
          >
            <Image src="/api/placeholder/100/100" alt="AI Generated" width={100} height={100} />
            <p className="mt-2">AI Generated</p>
          </button>
        </div>

        {selectedOption && (
          <Link href="/relive" className="block w-full bg-blue-500 text-white text-center py-2 rounded-lg">
            View Memory
          </Link>
        )}
      </div>
    </div>
  );
};

export default ReliveOverlay;
        