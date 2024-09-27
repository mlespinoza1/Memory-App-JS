import React from 'react';

interface FavoriteContactsOverlayProps {
  onClose: () => void;
}

const FavoriteContactsOverlay: React.FC<FavoriteContactsOverlayProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Favorite Contacts</h2>
        {/* Add your Favorite Contacts overlay content here */}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FavoriteContactsOverlay;