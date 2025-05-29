import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Users, X } from 'lucide-react';

interface Group {
  id: string;
  name: string;
  members: number;
  coverImageUrl: string;
  category?: string;
}

interface SuggestedGroupsProps {
  className?: string;
}

const SuggestedGroups: React.FC<SuggestedGroupsProps> = ({ className }) => {
  const [groups, setGroups] = React.useState<Group[]>([
    {
      id: '1',
      name: 'Mad Men (MADdicts)',
      members: 6195,
      coverImageUrl: 'https://source.unsplash.com/random/300x150?sig=madmen&tvshow',
      category: 'TV Show Fanclub'
    },
    {
      id: '2',
      name: 'Dexter Morgan Fans',
      members: 6984,
      coverImageUrl: 'https://source.unsplash.com/random/300x150?sig=dexter&tvshow',
      category: 'Crime Drama Enthusiasts'
    },
    {
      id: '3',
      name: 'React Developers Community',
      members: 120450,
      coverImageUrl: 'https://source.unsplash.com/random/300x150?sig=react&programming',
      category: 'Technology'
    },
  ]);

  const handleDismiss = (groupId: string) => {
    setGroups(prevGroups => prevGroups.filter(group => group.id !== groupId));
  };

  return (
    <Card className={cn('w-full', className)}>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-foreground">Suggested Groups</h2>
          <Button variant="link" className="text-sm text-primary px-0 h-auto py-0">
            See All
          </Button>
        </div>

        <div className="space-y-4">
          {groups.map((group) => (
            <div key={group.id} className="bg-card p-3 rounded-lg border border-border">
              <div className="relative mb-2">
                <img
                  src={group.coverImageUrl}
                  alt={`${group.name} cover`}
                  className="w-full h-24 object-cover rounded-md"
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-1 right-1 h-6 w-6 bg-black/30 hover:bg-black/50 text-white rounded-full"
                  onClick={() => handleDismiss(group.id)}
                >
                  <X className="h-3.5 w-3.5" />
                </Button>
              </div>
              <h3 className="font-semibold text-sm text-foreground truncate">{group.name}</h3>
              {group.category && <p className="text-xs text-muted-foreground mb-1">{group.category}</p>}
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Users className="h-3.5 w-3.5 mr-1" />
                  {group.members.toLocaleString()} members
                </div>
                <Button variant="outline" size="sm" className="text-xs h-7 px-2.5">
                  <Plus className="h-3.5 w-3.5 mr-1" /> Join
                </Button>
              </div>
            </div>
          ))}
          {groups.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">No more suggested groups for now.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SuggestedGroups;
