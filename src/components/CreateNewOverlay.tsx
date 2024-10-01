import React from 'react';
import { useOverlay } from '../context/OverlayContext';
import Overlay from './common/Overlay';
import Button from "@/components/ui/Button";

const CreateNewOverlay: React.FC = () => {
  const { activeOverlay, closeOverlay } = useOverlay();

  const isOpen = activeOverlay === 'createNew';

  return (
    <Overlay isOpen={isOpen} onClose={closeOverlay} title="Create New">
      {/* Add your overlay content here */}
      <p>Add your create new content here.</p>
      <Button
        onClick={closeOverlay}
        className="mt-4"
      >
        Close
      </Button>
    </Overlay>
  );
};

export default CreateNewOverlay;