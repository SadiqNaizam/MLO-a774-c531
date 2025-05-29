import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  Newspaper,
  MessageSquare,
  PlaySquare,
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users2, // Using Users2 for Groups to differentiate from Users (Find Friends)
  ListChecks,
  HeartHandshake,
  ChevronDown,
  PlusCircle,
  Settings,
  UserCircle,
  MoreHorizontal
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href?: string;
  isActive?: boolean;
  isPrimary?: boolean;
  options?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, href = '#', isActive, isPrimary, options }) => {
  return (
    <a
      href={href}
      className={cn(
        'flex items-center space-x-3 px-3 py-2.5 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-150',
        isActive && 'bg-sidebar-primary/10 text-sidebar-primary font-semibold',
        isPrimary && 'text-sidebar-primary font-medium'
      )}
    >
      <Icon className={cn('h-5 w-5', isActive || isPrimary ? 'text-sidebar-primary' : 'text-sidebar-foreground/80')} />
      <span className="flex-1 text-sm truncate">{label}</span>
      {options && <MoreHorizontal className="h-4 w-4 text-sidebar-foreground/60" />}
    </a>
  );
};

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const currentUser = {
    name: 'Olenna Mason',
    avatarUrl: 'https://i.pravatar.cc/150?u=olenna.mason',
  };

  const mainNavItems: NavItemProps[] = [
    { icon: Newspaper, label: 'News Feed', isActive: true },
    { icon: MessageSquare, label: 'Messenger' },
    { icon: PlaySquare, label: 'Watch' },
    { icon: Store, label: 'Marketplace' },
  ];

  const shortcuts: NavItemProps[] = [
    { icon: Gamepad2, label: 'FarmVille 2' },
    // Add more shortcuts here
  ];

  const exploreItems: NavItemProps[] = [
    { icon: CalendarDays, label: 'Events' },
    { icon: Flag, label: 'Pages' },
    { icon: Users2, label: 'Groups' },
    { icon: ListChecks, label: 'Friend Lists' },
    { icon: HeartHandshake, label: 'Fundraisers' },
  ];

  const createItems = [
    { label: 'Ad', href: '#' },
    { label: 'Page', href: '#' },
    { label: 'Group', href: '#' },
    { label: 'Event', href: '#' },
    { label: 'Fundraiser', href: '#' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 h-screen w-60 bg-background text-foreground flex flex-col',
        'border-r border-border shadow-sm',
        className
      )}
    >
      <div className="h-[60px] flex-shrink-0"></div> {/* Spacer for TopHeader */}
      <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 p-3 space-y-2">
        <a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-md hover:bg-accent hover:text-accent-foreground mb-2">
          <Avatar className="h-7 w-7">
            <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
            <AvatarFallback><UserCircle className="h-7 w-7" /></AvatarFallback>
          </Avatar>
          <span className="font-semibold text-sm">{currentUser.name}</span>
        </a>

        {mainNavItems.map((item) => (
          <NavItem key={item.label} {...item} options={item.label === 'News Feed'}/>
        ))}

        <Separator className="my-4" />

        <h3 className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Shortcuts</h3>
        {shortcuts.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
        {/* Placeholder if no shortcuts */} 
        {shortcuts.length === 0 && <p className="px-3 text-sm text-muted-foreground">No shortcuts yet.</p>}

        <Separator className="my-4" />

        <h3 className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Explore</h3>
        {exploreItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
        <a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-150">
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">See More...</span>
        </a>

        <Separator className="my-4" />

        <h3 className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Create</h3>
        <div className="px-3 py-1 space-x-1.5">
          {createItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-primary hover:underline">
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-border flex items-center space-x-2 text-xs text-muted-foreground">
         <a href="#" className="hover:underline">Privacy</a><span>·</span>
         <a href="#" className="hover:underline">Terms</a><span>·</span>
         <a href="#" className="hover:underline">Cookies</a>
      </div>
    </nav>
  );
};

export default SidebarNav;
