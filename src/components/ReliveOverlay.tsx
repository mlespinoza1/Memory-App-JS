import React from 'react';
import { useOverlay } from '../context/OverlayContext';
import Overlay from './common/Overlay';
import Button from "@/components/ui/Button";

const ReliveOverlay: React.FC = () => {
  const { activeOverlay, closeOverlay } = useOverlay();

  const isOpen = activeOverlay === 'relive';

  return (
    <Overlay isOpen={isOpen} onClose={closeOverlay} title="Relive">
      {/* Add your Relive overlay content here */}
      <p>Add your relive content here.</p>
      <Button
        onClick={closeOverlay}
        className="mt-4"
      >
        Close
      </Button>
    </Overlay>
  );
};

export default ReliveOverlay;