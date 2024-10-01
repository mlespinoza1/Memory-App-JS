'use client'

import React from 'react';
import * as Icons from 'lucide-react';

interface ActionButtonsProps {
  toggleCreateNewOverlay: () => void;
  toggleReliveOverlay: () => void;
  toggleTimelineOverlay: () => void;
  toggleGraphViewOverlay: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  toggleCreateNewOverlay,
  toggleReliveOverlay,
  toggleTimelineOverlay,
  toggleGraphViewOverlay
}) => {
  const buttons = [
    { icon: Icons.Book, label: 'Create New', onClick: toggleCreateNewOverlay },
    { icon: Icons.Play, label: 'Relive', onClick: toggleReliveOverlay },
    { icon: Icons.Calendar, label: 'Timeline', onClick: toggleTimelineOverlay },
    { icon: Icons.BarChart2, label: 'Graph View', onClick: toggleGraphViewOverlay },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {buttons.map(({ icon: Icon, label, onClick }) => (
        <button
          key={label}
          className="flex flex-col items-center justify-center bg-white p-3 rounded-lg shadow-md"
          onClick={onClick}
        >
          <Icon size={22} className="mb-2" />
          <span className="text-xs">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;