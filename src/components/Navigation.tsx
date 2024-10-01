'use client'

import React from 'react';
import * as Icons from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center p-4 bg-white border-t z-20">
      <Icons.Home size={24} className="text-gray-600 cursor-pointer hover:text-gray-900" />
      <Icons.Mail size={24} className="text-gray-600 cursor-pointer hover:text-gray-900" />
      <Icons.Settings size={24} className="text-gray-600 cursor-pointer hover:text-gray-900" />
    </div>
  );
};

export default Navigation;