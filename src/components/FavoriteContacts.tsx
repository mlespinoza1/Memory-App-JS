'use client'

import React from 'react';
import { useOverlay } from '../context/OverlayContext';
import Button from "@/components/ui/Button";

const FavoriteContacts: React.FC = () => {
  const { openOverlay } = useOverlay();

  const handleClick = () => openOverlay('favoriteContacts');

  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold mb-4 text-center">Favorite Contacts</h3>
      <div className="flex justify-center gap-36">
        {[1, 2, 3, 4, 5].map((num) => (
          <Button
            key={num}
            onClick={handleClick}
            className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm"
          >
            {num}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FavoriteContacts;
