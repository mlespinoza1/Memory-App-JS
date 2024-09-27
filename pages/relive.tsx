
import React from 'react';

const RelivePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Relive Memory</h1>
      <div className="bg-gray-200 h-64 rounded-lg mb-4">
        {/* Add memory content here */}
      </div>
      <p className="text-gray-600 mb-4">This is where the selected or AI-generated memory would be displayed.</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Generate New Memory</button>
    </div>
  );
};

export default RelivePage;
        