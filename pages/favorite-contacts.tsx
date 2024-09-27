
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
        