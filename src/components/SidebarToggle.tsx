'use client'

import React from 'react';
import * as Icons from 'lucide-react';
import { useSidebar } from '../contexts/SidebarContext';

interface SidebarToggleProps {
  className?: string;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ className = '' }) => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <button 
      className={`absolute top-1/2 transform -translate-y-1/2 ${isOpen ? 'left-60' : 'left-4'} bg-white p-2 rounded-full shadow-md z-40 md:hidden ${className}`} 
      onClick={toggleSidebar}
    >
      {isOpen ? <Icons.ChevronLeft size={24} /> : <Icons.ChevronRight size={24} />}
    </button>
  );
};

export default SidebarToggle;