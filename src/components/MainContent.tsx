import React, { memo } from 'react';
import { useSidebar } from '../contexts/SidebarContext';
import ActionButtons from './ActionButtons';
import FavoriteContacts from './FavoriteContacts';
import JumpBackIn from './JumpBackIn';
import SuggestedJourneys from './SuggestedJourneys';

interface MainContentProps {
  className?: string;
}

const MainContentArea: React.FC = memo(() => (
  <div className="flex-shrink-0">
    <ActionButtons />
    <FavoriteContacts />
    <JumpBackIn />
    <SuggestedJourneys />
  </div>
));

MainContentArea.displayName = 'MainContentArea';

const MainContent: React.FC<MainContentProps> = ({ className = '' }) => {
  const { isOpen } = useSidebar();

  return (
    <div 
      className={`main-content ${isOpen ? 'ml-64' : 'ml-0 md:ml-64'} ${className}`}
      role="main"
      aria-label="Main content area"
    >
      <div className="main-content-area">
        <MainContentArea />
      </div>
    </div>
  );
};

export default MainContent;