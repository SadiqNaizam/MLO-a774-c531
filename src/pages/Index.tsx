import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PostFeed from '../components/NewsFeed/PostFeed';
import StoriesWidget from '../components/NewsFeed/StoriesWidget';
import SuggestedGroups from '../components/NewsFeed/SuggestedGroups';

/**
 * UserDashboardPage represents the primary user dashboard view.
 * It assembles the main layout and populates it with the core features:
 * PostFeed in the main content area, and StoriesWidget and SuggestedGroups
 * in the right sidebar.
 */
const UserDashboardPage: React.FC = () => {
  // Content for the right sidebar, combining StoriesWidget and SuggestedGroups.
  // The MainAppLayout's aside element will apply flex flex-col gap-6 to these items.
  const rightSidebarContent = (
    <>
      <StoriesWidget />
      <SuggestedGroups />
    </>
  );

  return (
    <MainAppLayout rightSidebarContent={rightSidebarContent}>
      {/* PostFeed is the primary content for the main section of the dashboard */}
      <PostFeed />
    </MainAppLayout>
  );
};

export default UserDashboardPage;
