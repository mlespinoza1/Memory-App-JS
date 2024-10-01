import React from 'react'
import { X } from 'lucide-react'
import Button from "../ui/Button"
import * as Dialog from '@radix-ui/react-dialog';

interface OverlayProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export default function Overlay({ isOpen, onClose, title, children }: OverlayProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
        <Dialog.Content 
          className="fixed z-50 w-[90vw] max-w-md p-6 left-1/2 transform -translate-x-1/2 bg-gray-900 rounded-xl shadow-xl overflow-y-auto max-h-[85vh] sm:w-full sm:max-h-[90vh] md:max-h-[80vh]"
          style={{ top: 'max(2rem, env(safe-area-inset-top))', bottom: 'max(2rem, env(safe-area-inset-bottom))' }}
        >
          <Dialog.Title className="text-xl font-semibold mb-4 text-white">
            {title}
          </Dialog.Title>
          <Button onClick={onClose} className="absolute top-4 right-4">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}