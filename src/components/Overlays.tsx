import React from 'react';
import FavoriteContactsOverlay from './FavoriteContactsOverlay';
import CreateNewOverlay from './CreateNewOverlay';
import GraphViewOverlay from './GraphViewOverlay';
import ReliveOverlay from './ReliveOverlay';
import TimelineOverlay from './TimelineOverlay';

interface OverlaysProps {
  className?: string;
}

const Overlays: React.FC<OverlaysProps> = ({ className = '' }) => (
  <div className={className}>
    <FavoriteContactsOverlay />
    <CreateNewOverlay />
    <GraphViewOverlay />
    <ReliveOverlay />
    <TimelineOverlay />
  </div>
);

export default Overlays;