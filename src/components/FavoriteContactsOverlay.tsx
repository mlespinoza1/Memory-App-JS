import React, { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import Button from "@/components/ui/Button";

interface VideoThumbnail {
  id: string;
  src: string;
  title: string;
}

interface FavoriteContactsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const placeholderThumbnails: VideoThumbnail[] = [
  { id: '1', src: '/placeholder.svg?height=120&width=200', title: 'Video 1' },
  { id: '2', src: '/placeholder.svg?height=120&width=200', title: 'Video 2' },
  { id: '3', src: '/placeholder.svg?height=120&width=200', title: 'Video 3' },
];

const FavoriteContactsOverlay: React.FC<FavoriteContactsOverlayProps> = ({ isOpen, onClose }) => {
  const [activeThumbIndex, setActiveThumbIndex] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: 'John Doe',
    nickname: 'Johnny',
    email: 'john@example.com'
  });

  if (!isOpen) return null;

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    // Save contact info logic here
    setEditMode(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 backdrop-blur-sm bg-black/30" onClick={onClose} />
      
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 pt-4 pr-4">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Favorite Contact
          </h2>
          
          <div className="text-gray-600 dark:text-gray-300 mb-6">
            {editMode ? (
              <>
                <input
                  type="text"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                  className="w-full p-2 border rounded mb-2"
                  placeholder="Name"
                />
                <input
                  type="text"
                  value={contactInfo.nickname}
                  onChange={(e) => setContactInfo({...contactInfo, nickname: e.target.value})}
                  className="w-full p-2 border rounded mb-2"
                  placeholder="Nickname"
                />
                <input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                  className="w-full p-2 border rounded mb-2"
                  placeholder="Email"
                />
              </>
            ) : (
              <>
                <p><strong>Name:</strong> {contactInfo.name}</p>
                <p><strong>Nickname:</strong> {contactInfo.nickname}</p>
                <p><strong>Email:</strong> {contactInfo.email}</p>
              </>
            )}
          </div>
          
          <Button
            onClick={editMode ? handleSave : handleEdit}
            className="mb-4"
          >
            {editMode ? 'Save' : 'Edit'}
          </Button>

          {/* Video player placeholder */}
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Video Player Placeholder</p>
          </div>
          
          {/* Video thumbnails */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {placeholderThumbnails.map((thumb, index) => (
              <div
                key={thumb.id}
                className={`cursor-pointer transition-all ${
                  index === activeThumbIndex ? 'ring-2 ring-blue-500' : 'opacity-60 hover:opacity-100'
                }`}
                onClick={() => setActiveThumbIndex(index)}
              >
                <img
                  src={thumb.src}
                  alt={thumb.title}
                  className="w-full h-auto object-cover rounded"
                />
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{thumb.title}</p>
              </div>
            ))}
          </div>
          
          {/* Additional content placeholder */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Related Memories</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              This is a placeholder for related memories content. You can add AI-suggested related memories here.
            </p>
          </div>

          <Link href="/favorite-contacts" className="block w-full bg-blue-500 text-white text-center py-2 rounded-lg mt-4">
            View All Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FavoriteContactsOverlay;