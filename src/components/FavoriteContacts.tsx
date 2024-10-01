'use client'

import React from 'react';

const FavoriteContacts: React.FC = () => {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold mb-4 text-center">Favorite Contacts</h3>
      <div className="flex justify-center gap-36">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm">
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteContacts;
