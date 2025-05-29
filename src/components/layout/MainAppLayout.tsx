import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';
import Sidebar from './Sidebar';

interface MainAppLayoutProps {
  children: React.ReactNode;
  rightSidebarContent?: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  rightSidebarContent,
  className,
}) => {
  return (
    <div className={cn('min-h-screen bg-background', className)}>
      <Header />
      <Sidebar />

      {/* Main content container pushed by fixed Sidebar and Header */}
      {/* Sidebar width is w-60 (240px), Header height is h-[60px] */}
      <div className="flex pt-[60px] ml-60">
        <main
          className={cn(
            'flex-1 overflow-y-auto p-4',
            'min-h-[calc(100vh-60px)]' // Ensures main content area can fill viewport height below header
            // Layout Requirements for mainContent: "flex flex-col gap-6 p-4"
            // The p-4 is applied. "flex flex-col gap-6" should be handled by children elements for their internal layout.
          )}
        >
          {children}
        </main>

        {rightSidebarContent && (
          <aside
            className={cn(
              'w-72 h-[calc(100vh-60px)] overflow-y-auto p-4 bg-surface border-l border-border',
              'flex-col gap-6 hidden lg:flex' // Responsive: hidden on small screens, flex column on large screens and up
              // Layout Requirements for rightSidebar: "flex flex-col gap-6 p-4 bg-surface w-72"
            )}
          >
            {rightSidebarContent}
          </aside>
        )}
      </div>
    </div>
  );
};

export default MainAppLayout;
