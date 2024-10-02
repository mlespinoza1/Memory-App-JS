import React from 'react';
import { Search } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => (
  <div className={`fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white shadow-sm z-20 ${className}`}>
    <div className="text-lg font-bold">Logo</div>
    <div className="flex items-center">
      <button className="p-2 bg-gray-100 rounded-full">
        <Search size={18} className="text-gray-600" />
      </button>
    </div>
  </div>
);

export default Header;