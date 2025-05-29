import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../NewsFeed/SidebarNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // SidebarNav is already configured with fixed positioning, width, height, and styling.
  // We pass the className to SidebarNav for any additional styling or overrides from the layout level.
  // The SidebarNav component from context uses `w-60` which is 240px.
  // It also includes a 60px spacer div for the TopHeader.
  return <SidebarNav className={cn(className)} />;
};

export default Sidebar;
