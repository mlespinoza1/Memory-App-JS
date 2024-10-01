import React, { createContext, useContext, useState } from 'react';

type OverlayType = 'favoriteContacts' | 'createNew' | 'graphView' | 'relive' | 'timeline';

interface OverlayContextType {
  activeOverlay: OverlayType | null;
  openOverlay: (type: OverlayType) => void;
  closeOverlay: () => void;
}

const OverlayContext = createContext<OverlayContextType | undefined>(undefined);

export const OverlayProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeOverlay, setActiveOverlay] = useState<OverlayType | null>(null);

  const openOverlay = (type: OverlayType) => setActiveOverlay(type);
  const closeOverlay = () => setActiveOverlay(null);

  return (
    <OverlayContext.Provider value={{ activeOverlay, openOverlay, closeOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  const context = useContext(OverlayContext);
  if (context === undefined) {
    throw new Error('useOverlay must be used within an OverlayProvider');
  }
  return context;
};