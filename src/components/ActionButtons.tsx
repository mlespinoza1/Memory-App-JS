import React from 'react';
import { useOverlay } from '../context/OverlayContext';
import * as Icons from 'lucide-react';
import Button from "@/components/ui/Button";

const ActionButtons: React.FC = () => {
  const { openOverlay } = useOverlay();

  return (
    <div className="grid grid-cols-4 gap-2 mb-3">
      <Button onClick={() => openOverlay('createNew')} className="flex flex-col items-center justify-center p-2 bg-white rounded-xl shadow">
        <Icons.PlusSquare size={24} />
        <span className="text-xs mt-1">Create New</span>
      </Button>
      <Button onClick={() => openOverlay('relive')} className="flex flex-col items-center justify-center p-2 bg-white rounded-xl shadow">
        <Icons.Play size={24} />
        <span className="text-xs mt-1">Relive</span>
      </Button>
      <Button onClick={() => openOverlay('timeline')} className="flex flex-col items-center justify-center p-2 bg-white rounded-xl shadow">
        <Icons.Calendar size={24} />
        <span className="text-xs mt-1">Timeline</span>
      </Button>
      <Button onClick={() => openOverlay('graphView')} className="flex flex-col items-center justify-center p-2 bg-white rounded-xl shadow">
        <Icons.BarChart2 size={24} />
        <span className="text-xs mt-1">Graph View</span>
      </Button>
    </div>
  );
};

export default ActionButtons;
