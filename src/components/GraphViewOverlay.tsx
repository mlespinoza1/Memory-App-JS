import React from 'react';
import { useOverlay } from '../context/OverlayContext';
import Overlay from './common/Overlay';
import Button from "@/components/ui/Button";

const GraphViewOverlay: React.FC = () => {
  const { activeOverlay, closeOverlay } = useOverlay();

  const isOpen = activeOverlay === 'graphView';

  return (
    <Overlay isOpen={isOpen} onClose={closeOverlay} title="Graph View">
      {/* Add your Graph View overlay content here */}
      <p>Add your graph view content here.</p>
      <Button
        onClick={closeOverlay}
        className="mt-4"
      >
        Close
      </Button>
    </Overlay>
  );
};

export default GraphViewOverlay;