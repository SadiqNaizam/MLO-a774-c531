import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../NewsFeed/TopHeader';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // TopHeader is already configured with fixed positioning, height, full width, and styling.
  // We pass the className to TopHeader for any additional styling or overrides from the layout level.
  // The TopHeader component from context has a height of 60px and is fixed to the top.
  return <TopHeader className={cn(className)} />;
};

export default Header;
