
import React from 'react';

const GraphViewPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Memory Graph</h1>
      <div className="bg-gray-200 h-96 rounded-lg mb-4">
        {/* Add interactive graph component here */}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">People</h2>
          {/* Add people filter options */}
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Places</h2>
          {/* Add places filter options */}
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Events</h2>
          {/* Add events filter options */}
        </div>
      </div>
    </div>
  );
};

export default GraphViewPage;
        