import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { PlusCircle, Archive, Settings, UserCircle } from 'lucide-react';

interface Story {
  id: string;
  userName: string;
  userAvatarUrl: string;
  storyImageUrl: string;
}

interface StoriesWidgetProps {
  className?: string;
}

const StoriesWidget: React.FC<StoriesWidgetProps> = ({ className }) => {
  const storiesData: Story[] = [
    {
      id: '1',
      userName: 'Jane Doe',
      userAvatarUrl: 'https://i.pravatar.cc/150?u=jane.doe',
      storyImageUrl: 'https://source.unsplash.com/random/150x250?sig=1&nature',
    },
    {
      id: '2',
      userName: 'John Smith',
      userAvatarUrl: 'https://i.pravatar.cc/150?u=john.smith',
      storyImageUrl: 'https://source.unsplash.com/random/150x250?sig=2&city',
    },
    {
      id: '3',
      userName: 'Alice Brown',
      userAvatarUrl: 'https://i.pravatar.cc/150?u=alice.brown',
      storyImageUrl: 'https://source.unsplash.com/random/150x250?sig=3&people',
    },
    {
      id: '4',
      userName: 'Bob Green',
      userAvatarUrl: 'https://i.pravatar.cc/150?u=bob.green',
      storyImageUrl: 'https://source.unsplash.com/random/150x250?sig=4&food',
    },
  ];

  return (
    <Card className={cn('w-full', className)}>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-foreground">Stories</h2>
          <div className="space-x-2">
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-primary">
              <Archive className="h-3.5 w-3.5 mr-1" /> Archive
            </Button>
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-primary">
              <Settings className="h-3.5 w-3.5 mr-1" /> Settings
            </Button>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {/* Add to Your Story Card */}
          <div className="flex-shrink-0 w-28 h-48 border border-dashed border-border rounded-lg flex flex-col items-center justify-center text-center p-2 cursor-pointer hover:bg-accent transition-colors">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-2">
              <PlusCircle className="h-6 w-6 text-primary-foreground" />
            </div>
            <p className="text-xs font-medium text-foreground">Add to Your Story</p>
            <p className="text-xs text-muted-foreground mt-1">Share a photo, video or write something</p>
          </div>

          {/* Story Items */}
          {storiesData.map((story) => (
            <div
              key={story.id}
              className="relative flex-shrink-0 w-28 h-48 rounded-lg overflow-hidden cursor-pointer group shadow-sm"
            >
              <img
                src={story.storyImageUrl}
                alt={`${story.userName}'s story`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <Avatar className="absolute top-2 left-2 h-8 w-8 border-2 border-primary">
                <AvatarImage src={story.userAvatarUrl} alt={story.userName} />
                <AvatarFallback><UserCircle className="h-full w-full" /></AvatarFallback>
              </Avatar>
              <p className="absolute bottom-2 left-2 right-2 text-xs font-medium text-white truncate">
                {story.userName}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StoriesWidget;
