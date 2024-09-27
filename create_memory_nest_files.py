import os

def create_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content)

def main():
    components = {
        'TimelineOverlay.tsx': '''
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
        ''',
        'GraphViewOverlay.tsx': '''
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
        ''',
        'FavoriteContactsOverlay.tsx': '''
import React, { useState } from 'react';
import Link from 'next/link';

interface FavoriteContactsOverlayProps {
  onClose: () => void;
}

const FavoriteContactsOverlay: React.FC<FavoriteContactsOverlayProps> = ({ onClose }) => {
  const [editMode, setEditMode] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: 'John Doe',
    nickname: 'Johnny',
    email: 'john@example.com'
  });

  const handleEdit =import React, { useState } from 'react';
import Link from 'next/link';

interface FavoriteContactsOverlayProps {
  onClose: () => void;
}

const FavoriteContactsOverlay: React.FC<FavoriteContactsOverlayProps> = ({ onClose }) => {
  const [editMode, setEditMode] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: 'John Doe',
    nickname: 'Johnny',
    email: 'john@example.com'
  });

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    // Save contact info logic here
    setEditMode(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Favorite Contact</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-4">
          {editMode ? (
            <>
              <input
                type="text"
                value={contactInfo.name}
                onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                className="w-full p-2 border rounded mb-2"
                placeholder="Name"
              />
              <input
                type="text"
                value={contactInfo.nickname}
                onChange={(e) => setContactInfo({...contactInfo, nickname: e.target.value})}
                className="w-full p-2 border rounded mb-2"
                placeholder="Nickname"
              />
              <input
                type="email"
                value={contactInfo.email}
                onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                className="w-full p-2 border rounded mb-2"
                placeholder="Email"
              />
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {contactInfo.name}</p>
              <p><strong>Nickname:</strong> {contactInfo.nickname}</p>
              <p><strong>Email:</strong> {contactInfo.email}</p>
            </>
          )}
        </div>

        <button
          onClick={editMode ? handleSave : handleEdit}
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
        >
          {editMode ? 'Save' : 'Edit'}
        </button>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Related Memories</h3>
          {/* Add AI-suggested related memories here */}
        </div>

        <Link href="/favorite-contacts" className="block w-full bg-blue-500 text-white text-center py-2 rounded-lg">
          View All Contacts
        </Link>
      </div>
    </div>
  );
};

export default FavoriteContactsOverlay;
        '''
    }

    pages = {
        'create/[type].tsx': '''
import { useRouter } from 'next/router';
import React from 'react';

const CreatePage: React.FC = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New {type}</h1>
      {type === 'memory' && (
        <div>
          <input type="text" placeholder="Memory Title" className="w-full p-2 border rounded mb-2" />
          <textarea placeholder="Memory Description" className="w-full p-2 border rounded mb-2" rows={4} />
          <input type="file" className="mb-2" />
        </div>
      )}
      {type === 'book' && (
        <div>
          <input type="text" placeholder="Book Title" className="w-full p-2 border rounded mb-2" />
          <textarea placeholder="Book Description" className="w-full p-2 border rounded mb-2" rows={4} />
          <input type="text" placeholder="Author" className="w-full p-2 border rounded mb-2" />
        </div>
      )}
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Create {type}</button>
    </div>
  );
};

export default CreatePage;
        ''',
        'relive.tsx': '''
import React from 'react';

const RelivePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Relive Memory</h1>
      <div className="bg-gray-200 h-64 rounded-lg mb-4">
        {/* Add memory content here */}
      </div>
      <p className="text-gray-600 mb-4">This is where the selected or AI-generated memory would be displayed.</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Generate New Memory</button>
    </div>
  );
};

export default RelivePage;
        ''',
        'timeline.tsx': '''
import React from 'react';

const TimelinePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Memory Timeline</h1>
      <div className="bg-gray-200 h-96 rounded-lg">
        {/* Add interactive timeline component here */}
      </div>
    </div>
  );
};

export default TimelinePage;
        ''',
        'graph-view.tsx': '''
import React from 'react';

const GraphViewPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Memory Graph</h1>
      <div className="bg-gray-200 h-96 rounded-lg mb-4">
        {/* Add interactive graph component here */}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">People</h2>
          {/* Add people filter options */}
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Places</h2>
          {/* Add places filter options */}
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Events</h2>
          {/* Add events filter options */}
        </div>
      </div>
    </div>
  );
};

export default GraphViewPage;
        ''',
        'favorite-contacts.tsx': '''
import React from 'react';

const FavoriteContactsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Favorite Contacts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Add contact cards here */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold mb-2">John Doe</h2>
          <p className="text-gray-600">john@example.com</p>
          <button className="mt-2 bg-blue-500 text-white py-1 px-2 rounded text-sm">View Memories</button>
        </div>
        {/* Repeat for other contacts */}
      </div>
    </div>
  );
};

export default FavoriteContactsPage;
        '''
    }

    for name, content in components.items():
        create_file(f'components/{name}', content)
        print(f'Created: components/{name}')

    for name, content in pages.items():
        create_file(f'pages/{name}', content)
        print(f'Created: pages/{name}')

if __name__ == '__main__':
    main()
    print("Part 2 completed. TimelineOverlay, GraphViewOverlay, and FavoriteContactsOverlay components created.")
    print("All page components created.")
    print("Memory Nest app structure and components have been successfully generated.")