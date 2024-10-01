import React from 'react';
import { useOverlay } from '../context/OverlayContext';
import Overlay from './common/Overlay';
import Button from "@/components/ui/Button";

const TimelineOverlay: React.FC = () => {
  const { activeOverlay, closeOverlay } = useOverlay();

  const isOpen = activeOverlay === 'timeline';

  return (
    <Overlay isOpen={isOpen} onClose={closeOverlay} title="Timeline">
      {/* Add your Timeline overlay content here */}
      <p>Add your timeline content here.</p>
      <Button
        onClick={closeOverlay}
        className="mt-4"
      >
        Close
      </Button>
    </Overlay>
  );
};

export default TimelineOverlay;