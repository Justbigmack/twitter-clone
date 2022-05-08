import { memo, useState, Dispatch, SetStateAction } from 'react';
import { FeedActionButton } from './FeedActionButton';
import { tweetsStore } from 'stores/tweets/tweetsStore';

export enum ActiveFeedActionButtons {
  All = 'All',
  Liked = 'Liked',
}

interface IFeedActions {
  setActiveFilter: Dispatch<SetStateAction<boolean>>;
}

export const FeedActions = memo(({ setActiveFilter }: IFeedActions) => {
  const [activeButton, setActiveButton] = useState(ActiveFeedActionButtons.All);
  return (
    <div className="flex w-full items-center justify-around border-b border-gray-subtle py-9">
      <FeedActionButton
        onClick={() => {
          setActiveFilter(false);
          setActiveButton(ActiveFeedActionButtons.All);
        }}
        active={activeButton === ActiveFeedActionButtons.All}
        data-cy="showAllTweetsButton"
      >
        Show all tweets
      </FeedActionButton>
      <FeedActionButton
        onClick={() => {
          setActiveFilter(true);
          setActiveButton(ActiveFeedActionButtons.Liked);
        }}
        active={activeButton === ActiveFeedActionButtons.Liked}
        data-cy="showLikedTweetsButton"
      >
        Show liked tweets
      </FeedActionButton>
      <FeedActionButton
        onClick={tweetsStore.clearTweets}
        data-cy="clearTweetsButton"
      >
        Clear Tweets
      </FeedActionButton>
    </div>
  );
});

FeedActions.displayName = 'Tweet Actions';
