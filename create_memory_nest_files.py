import os

def create_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content)

def main():
    components = {
        'MobileLayout.tsx': '''
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
        ''',
        'CreateNewOverlay.tsx': '''
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CreateNewOverlayProps {
  onClose: () => void;
}

const CreateNewOverlay: React.FC<CreateNewOverlayProps> = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState<'memory' | 'book' | null>(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Create New</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <button
            className={`p-4 border rounded-lg ${selectedOption === 'memory' ? 'border-blue-500' : 'border-gray-300'}`}
            onClick={() => setSelectedOption('memory')}
          >
            <Image src="/api/placeholder/100/100" alt="Create Memory" width={100} height={100} />
            <p className="mt-2">Create Memory</p>
          </button>
          <button
            className={`p-4 border rounded-lg ${selectedOption === 'book' ? 'border-blue-500' : 'border-gray-300'}`}
            onClick={() => setSelectedOption('book')}
          >
            <Image src="/api/placeholder/100/100" alt="Create Book" width={100} height={100} />
            <p className="mt-2">Create Book</p>
          </button>
        </div>

        {selectedOption && (
          <Link href={`/create/${selectedOption}`} className="block w-full bg-blue-500 text-white text-center py-2 rounded-lg">
            Continue
          </Link>
        )}
      </div>
    </div>
  );
};

export default CreateNewOverlay;
        ''',
        'ReliveOverlay.tsx': '''
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
        '''
    }

    for name, content in components.items():
        create_file(f'components/{name}', content)
        print(f'Created: components/{name}')

if __name__ == '__main__':
    main()
    print("Part 1 completed. MobileLayout, CreateNewOverlay, and ReliveOverlay components created.")