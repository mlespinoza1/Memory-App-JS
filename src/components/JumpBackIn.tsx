'use client'

import React from 'react';
import Image from 'next/image';

const JumpBackIn: React.FC = () => {
  const memories = [
    { title: 'Memory 1', description: 'Last edited: 2h ago', image: 'https://via.placeholder.com/320x144' },
    { title: 'Memory 2', description: 'Last edited: 1d ago', image: 'https://via.placeholder.com/320x144' },
    { title: 'Memory 3', description: 'Last edited: 3d ago', image: 'https://via.placeholder.com/320x144' },
    { title: 'Memory 4', description: 'Last edited: 4d ago', image: 'https://via.placeholder.com/320x144' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6 p-4">
      <h3 className="text-lg font-semibold mb-4 text-center">Jump Back In</h3>
      <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {memories.map((memory, index) => (
          <div key={index} className="relative w-80 h-36 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
            <Image 
              src={memory.image}
              alt={memory.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 flex flex-col items-center justify-center">
              <div className="text-lg font-medium">{memory.title}</div>
              <div className="text-sm mt-2">{memory.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JumpBackIn;