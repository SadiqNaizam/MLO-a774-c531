import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Facebook,
  Search,
  Home,
  Users,
  MessageCircle as MessageIcon, // Renamed to avoid conflict with PostCard
  Bell,
  HelpCircle,
  Settings,
  LogOut,
  UserCircle,
  ChevronDown
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  const currentUser = {
    name: 'Olenna Mason',
    avatarUrl: 'https://i.pravatar.cc/150?u=olenna.mason',
  };
  const notificationCount = 36;
  const messageCount = 8;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 h-[60px] bg-card text-foreground border-b border-border shadow-sm',
        'flex items-center justify-between px-4 z-50',
        className
      )}
    >
      {/* Left Section: Logo and Search */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <a href="#" aria-label="Facebook home">
          <Facebook className="h-10 w-10 text-primary fill-primary" />
        </a>
        <div className="relative w-full max-w-xs lg:w-60 hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search Facebook"
            className="pl-9 h-9 rounded-full bg-background focus-visible:ring-1 focus-visible:ring-primary"
          />
        </div>
      </div>

      {/* Middle Section: Navigation Links (Icon Buttons) */}
      <nav className="flex-1 flex justify-center items-center gap-2 lg:gap-4 px-2">
        <Button variant="ghost" className="h-12 w-20 lg:w-28 flex-col text-muted-foreground hover:bg-accent data-[active=true]:text-primary data-[active=true]:bg-primary/10 data-[active=true]:font-semibold rounded-lg" data-active={true}>
          <Home className="h-6 w-6" />
          {/* <span className="text-xs mt-0.5 hidden md:inline">Home</span> Optional text for larger screens */}
        </Button>
        <Button variant="ghost" className="h-12 w-20 lg:w-28 flex-col text-muted-foreground hover:bg-accent data-[active=true]:text-primary data-[active=true]:bg-primary/10 data-[active=true]:font-semibold rounded-lg">
          <Users className="h-6 w-6" />
          {/* <span className="text-xs mt-0.5 hidden md:inline">Find Friends</span> */}
        </Button>
        {/* Add more nav items like Watch, Marketplace if needed here, matching Facebook's new layout */}
      </nav>

      {/* Right Section: Profile Options & Notifications */}
      <div className="flex items-center gap-1.5 lg:gap-2 flex-shrink-0">
        <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 lg:h-10 lg:w-10 bg-muted/50 hover:bg-muted text-foreground relative">
          <MessageIcon className="h-5 w-5" />
          {messageCount > 0 && 
            <Badge variant="destructive" className="absolute -top-1 -right-1 h-4.5 px-1.5 text-xs leading-tight rounded-full">
              {messageCount}
            </Badge>
          }
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 lg:h-10 lg:w-10 bg-muted/50 hover:bg-muted text-foreground relative">
          <Bell className="h-5 w-5" />
          {notificationCount > 0 && 
            <Badge variant="destructive" className="absolute -top-1 -right-1 h-4.5 px-1.5 text-xs leading-tight rounded-full">
              {notificationCount}
            </Badge>
          }
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="rounded-full p-0.5 h-9 w-9 lg:h-10 lg:w-10 bg-muted/50 hover:bg-muted">
              <Avatar className="h-full w-full">
                <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
                <AvatarFallback><UserCircle className="h-full w-full" /></AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{currentUser.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  View your profile
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings & Privacy</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help & Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
