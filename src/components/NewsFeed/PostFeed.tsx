import React from 'react';
import { cn } from '@/lib/utils';
import PostCard, { PostProps } from './PostCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Edit3, Image as ImageIcon, Video, List, UserCircle, Smile } from 'lucide-react';

interface PostFeedProps {
  className?: string;
}

const dummyPosts: PostProps[] = [
  {
    id: 'post1',
    user: {
      name: 'Julia Fillory',
      avatarUrl: 'https://i.pravatar.cc/150?u=julia.fillory',
    },
    timestamp: '2 hrs ago',
    locationInfo: 'is in Raleigh, North Carolina.',
    text: 'Checking out some new stores downtown!',
    imageUrl: 'https://source.unsplash.com/random/800x450?sig=raleigh&city,map',
    mapLocation: {
      city: 'Raleigh, North Carolina',
      country: 'United States',
      details: 'Bryan Durand and 2 others have been here'
    },
    likes: 125,
    comments: 18,
    shares: 7,
  },
  {
    id: 'post2',
    user: {
      name: 'Alex Johnson',
      avatarUrl: 'https://i.pravatar.cc/150?u=alex.johnson',
    },
    timestamp: '5 hrs ago',
    text: 'Just deployed a new feature for our project! Feeling accomplished. #coding #developer #react',
    imageUrl: 'https://source.unsplash.com/random/800x450?sig=coding&programming,code',
    likes: 230,
    comments: 45,
    shares: 12,
  },
  {
    id: 'post3',
    user: {
      name: 'Maria Garcia',
      avatarUrl: 'https://i.pravatar.cc/150?u=maria.garcia',
    },
    timestamp: '1 day ago',
    text: 'Beautiful sunset at the beach today! ???? Life is good.',
    imageUrl: 'https://source.unsplash.com/random/800x450?sig=beachsunset&beach,sunset',
    likes: 560,
    comments: 78,
    shares: 22,
  },
];

const currentUser = {
  name: 'Olenna Mason',
  avatarUrl: 'https://i.pravatar.cc/150?u=olenna.mason',
};

const CreatePostWidget: React.FC = () => {
  return (
    <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
      <div className="flex items-center space-x-3 mb-3 pb-3 border-b border-border">
        <Avatar className="h-10 w-10">
          <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
          <AvatarFallback><UserCircle className="h-10 w-10" /></AvatarFallback>
        </Avatar>
        <Input 
          type="text" 
          placeholder={`What's on your mind, ${currentUser.name.split(' ')[0]}?`}
          className="flex-1 bg-background hover:bg-muted/50 focus-visible:ring-1 focus-visible:ring-primary rounded-full h-10 px-4"
        />
      </div>
      <div className="flex justify-around items-center">
        <Button variant="ghost" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground">
          <Edit3 className="h-5 w-5 mr-2 text-blue-500" /> Make Post
        </Button>
        <Button variant="ghost" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground">
          <ImageIcon className="h-5 w-5 mr-2 text-green-500" /> Photo/Video
        </Button>
        <Button variant="ghost" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground">
          <Video className="h-5 w-5 mr-2 text-red-500" /> Live Video
        </Button>
        <Button variant="ghost" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground sm:hidden md:flex">
          <List className="h-5 w-5 mr-2 text-purple-500" /> List
        </Button>
        <Button variant="ghost" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground sm:hidden md:flex">
          <Smile className="h-5 w-5 mr-2 text-yellow-500" /> Feeling/Activity
        </Button>
      </div>
    </div>
  );
};

const PostFeed: React.FC<PostFeedProps> = ({ className }) => {
  const [posts, setPosts] = React.useState<PostProps[]>(dummyPosts);

  // In a real app, you might fetch posts or add new ones
  // For now, we just display the dummy posts

  return (
    <div className={cn('w-full max-w-2xl mx-auto space-y-6', className)}>
      <CreatePostWidget />
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
      {posts.length === 0 && (
         <div className="text-center py-10 text-muted-foreground">
           <p className="text-xl mb-2">No posts to show.</p>
           <p>Follow some people or groups to see updates here!</p>
         </div>
      )}
    </div>
  );
};

export default PostFeed;
