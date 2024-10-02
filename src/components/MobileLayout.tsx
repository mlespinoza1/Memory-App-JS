'use client'

import React from 'react';
import { OverlayProvider } from '../context/OverlayContext';
import { SidebarProvider, useSidebar } from '../contexts/SidebarContext';
import ErrorBoundary from './common/ErrorBoundary';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import SidebarToggle from './SidebarToggle';
import Navigation from './Navigation';
import Overlays from './Overlays';

interface LayoutProps {
  className?: string;
}

const MobileLayoutContent: React.FC<LayoutProps> = ({ className = '' }) => {
  const { isOpen } = useSidebar();

  return (
    <div className={`min-h-screen bg-gray-100 pb-16 flex flex-col overflow-hidden ${className}`}>
      <Header className="w-full" />
      <div className="flex flex-1 relative">
        <Sidebar isOpen={isOpen} className="absolute inset-y-0 left-0 z-20 transition-transform duration-300 ease-in-out transform" />
        <MainContent className="flex-1 transition-all duration-300 ease-in-out" />
        <SidebarToggle className="absolute top-4 left-4 z-30" />
      </div>
      <Navigation className="fixed bottom-0 left-0 right-0 z-10" />
      <Overlays />
    </div>
  );
};

const MobileLayout: React.FC<LayoutProps> = ({ className }) => (
  <ErrorBoundary>
    <OverlayProvider>
      <SidebarProvider>
        <MobileLayoutContent className={className} />
      </SidebarProvider>
    </OverlayProvider>
  </ErrorBoundary>
);

export default MobileLayout;
