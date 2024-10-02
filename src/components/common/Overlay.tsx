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

const CloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <Button onClick={onClick} className="close-button">
    <X className="close-icon" />
    <span className="sr-only">Close</span>
  </Button>
);

export default function Overlay({ isOpen, onClose, title, children }: OverlayProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay" />
        <Dialog.Content className="dialog-content">
          <Dialog.Title className="dialog-title">
            {title}
          </Dialog.Title>
          <CloseButton onClick={onClose} />
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}