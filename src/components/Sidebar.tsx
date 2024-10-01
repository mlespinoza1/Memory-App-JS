'use client'

import React from 'react';
import * as Icons from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div 
      className={`
        fixed top-20 left-0
        h-[calc(100vh-9.7rem)]
        bg-white bg-opacity-90 backdrop-blur-md 
        transition-all duration-300 ease-in-out 
        overflow-y-auto shadow-lg
        z-30
        rounded-lg
        ${isOpen ? 'w-64' : 'w-0'}
        md:w-64 // Ensure sidebar is open on larger screens
      `}
    >
      {/* Plus Sign */}
      <div className="absolute top-3 left-3">
        <button className="bg-gray-300 p-1 rounded-full hover:bg-gray-400">
          <Icons.Plus size={16} />
        </button>
      </div>

      {/* Folders Section */}
      <div className={`p-4 mt-16 flex-grow`}>
        <h2 className="text-lg font-bold mb-4">Folders</h2>
        {['Personal', 'Work', 'Family'].map((folder) => (
          <div key={folder} className="mb-2 p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">{folder}</div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="p-4 mt-auto">
        <h2 className="text-lg font-bold mb-4">Bottom Section</h2>
        <div className="mb-2 p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">Item 1</div>
        <div className="mb-2 p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">Item 2</div>
      </div>
    </div>
  );
};

export default Sidebar;