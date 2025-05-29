import React from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  ThumbsUp,
  MessageCircle,
  Share2,
  MoreHorizontal,
  UserCircle,
  Globe,
  MapPin,
  Bookmark
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export interface PostUser {
  name: string;
  avatarUrl: string;
}

export interface PostMapLocation {
  city: string;
  country: string;
  details: string;
}

export interface PostProps {
  id: string;
  user: PostUser;
  timestamp: string;
  locationInfo?: string; // e.g., "is in Raleigh, North Carolina."
  text?: string;
  imageUrl?: string;
  mapLocation?: PostMapLocation;
  likes: number;
  comments: number;
  shares: number;
  className?: string;
}

const PostCard: React.FC<PostProps> = ({
  id,
  user,
  timestamp,
  locationInfo,
  text,
  imageUrl,
  mapLocation,
  likes,
  comments,
  shares,
  className,
}) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [currentLikes, setCurrentLikes] = React.useState(likes);

  const handleLike = () => {
    if (isLiked) {
      setCurrentLikes(prev => prev -1);
    } else {
      setCurrentLikes(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Card className={cn('w-full shadow-sm border border-border', className)}>
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback><UserCircle className="h-10 w-10" /></AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {user.name} <span className="font-normal text-muted-foreground">{locationInfo}</span>
              </p>
              <div className="text-xs text-muted-foreground flex items-center">
                <span>{timestamp}</span>
                <Globe className="h-3 w-3 ml-1.5" />
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Save post</DropdownMenuItem>
              <DropdownMenuItem>Hide post</DropdownMenuItem>
              <DropdownMenuItem>Report post</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        {text && <p className="text-sm text-foreground mb-3 whitespace-pre-wrap">{text}</p>}
        {imageUrl && (
          <div className="aspect-video rounded-lg overflow-hidden border border-border mb-3">
            <img src={imageUrl} alt="Post content" className="w-full h-full object-cover" />
          </div>
        )}
        {mapLocation && (
            <div className="border border-border rounded-lg p-3 flex items-center justify-between bg-muted/30">
                <div>
                    <p className="font-medium text-sm text-foreground">{mapLocation.city}</p>
                    <p className="text-xs text-muted-foreground">{mapLocation.country}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{mapLocation.details}</p>
                </div>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">
                    <Bookmark className="h-3.5 w-3.5 mr-1.5" /> Save
                </Button>
            </div>
        )}
      </CardContent>

      {(likes > 0 || comments > 0 || shares > 0) && (
        <div className="px-4 pb-2 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            {currentLikes > 0 && 
              <>
                <ThumbsUp className="h-3.5 w-3.5 text-primary" /> 
                <span>{currentLikes.toLocaleString()}</span>
              </>
            }
          </div>
          <div className="space-x-3">
            {comments > 0 && <span>{comments.toLocaleString()} comments</span>}
            {shares > 0 && <span>{shares.toLocaleString()} shares</span>}
          </div>
        </div>
      )}

      <Separator className="mx-4" />

      <CardFooter className="p-2">
        <div className="flex justify-around w-full">
          <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-accent hover:text-accent-foreground data-[liked=true]:text-primary data-[liked=true]:font-semibold" onClick={handleLike} data-liked={isLiked}>
            <ThumbsUp className={cn("h-5 w-5 mr-2", isLiked && "fill-primary")} /> Like
          </Button>
          <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-accent hover:text-accent-foreground">
            <MessageCircle className="h-5 w-5 mr-2" /> Comment
          </Button>
          <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-accent hover:text-accent-foreground">
            <Share2 className="h-5 w-5 mr-2" /> Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
