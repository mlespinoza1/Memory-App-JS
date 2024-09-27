
import { useRouter } from 'next/router';
import React from 'react';

const CreatePage: React.FC = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New {type}</h1>
      {type === 'memory' && (
        <div>
          <input type="text" placeholder="Memory Title" className="w-full p-2 border rounded mb-2" />
          <textarea placeholder="Memory Description" className="w-full p-2 border rounded mb-2" rows={4} />
          <input type="file" className="mb-2" />
        </div>
      )}
      {type === 'book' && (
        <div>
          <input type="text" placeholder="Book Title" className="w-full p-2 border rounded mb-2" />
          <textarea placeholder="Book Description" className="w-full p-2 border rounded mb-2" rows={4} />
          <input type="text" placeholder="Author" className="w-full p-2 border rounded mb-2" />
        </div>
      )}
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Create {type}</button>
    </div>
  );
};

export default CreatePage;
        