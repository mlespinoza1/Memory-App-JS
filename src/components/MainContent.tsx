import React from 'react';
import { useSidebar } from '../contexts/SidebarContext';
import ActionButtons from './ActionButtons';
import FavoriteContacts from './FavoriteContacts';
import JumpBackIn from './JumpBackIn';
import SuggestedJourneys from './SuggestedJourneys';

interface MainContentProps {
  className?: string;
}

const MainContent: React.FC<MainContentProps> = ({ className = '' }) => {
  const { isOpen } = useSidebar();

  return (
    <div className={`pt-20 pl-4 flex-grow flex flex-col transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0 md:ml-64'} overflow-hidden ${className}`}>
      <div className="bg-white rounded-xl p-4 flex flex-col h-full">
        <div className="flex-shrink-0">
          <ActionButtons />
          <FavoriteContacts />
          <JumpBackIn />
          <SuggestedJourneys />
        </div>
      </div>
    </div>
  );
};

export default MainContent;