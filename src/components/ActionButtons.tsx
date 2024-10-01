'use client'

import React from 'react';
import * as Icons from 'lucide-react';

const ActionButtons: React.FC = () => {
  const buttons = [
    { icon: Icons.Book, label: 'Create New' },
    { icon: Icons.Play, label: 'Relive' },
    { icon: Icons.Calendar, label: 'Timeline' },
    { icon: Icons.BarChart2, label: 'Graph View' },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {buttons.map(({ icon: Icon, label }) => (
        <button key={label} className="flex flex-col items-center justify-center bg-white p-3 rounded-lg shadow-md">
          <Icon size={22} className="mb-2" />
          <span className="text-xs">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;