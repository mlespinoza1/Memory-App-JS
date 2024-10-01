'use client'

import React from 'react';

const SuggestedJourneys: React.FC = () => {
  const journeys = [
    { title: 'Journey 1', description: 'Short description' },
    { title: 'Journey 2', description: 'Short description' },
    { title: 'Journey 3', description: 'Short description' },
    { title: 'Journey 4', description: 'Short description' },
    { title: 'Journey 5', description: 'Short description' },
    { title: 'Journey 6', description: 'Short description' },
    { title: 'Journey 7', description: 'Short description' },
    { title: 'Journey 8', description: 'Short description' },
  ];

  return (
    <div className="mt-8 flex-grow">
      <h3 className="text-lg font-semibold mb-4 text-center">Suggested Journeys</h3>
      <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <div className="flex space-x-4 w-max">
          {journeys.map(({ title, description }) => (
            <div key={title} className="w-64 flex-shrink-0 bg-gray-200 p-4 rounded-lg text-center flex flex-col justify-center h-48">
              <div className="font-medium text-sm">{title}</div>
              <div className="text-xs text-gray-600 mt-1">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestedJourneys;
