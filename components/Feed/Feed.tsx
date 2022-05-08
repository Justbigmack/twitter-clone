import { useEffect, useRef, useState } from 'react';
import { tweetsStore } from 'stores/tweets/tweetsStore';
import { ITweetsState } from 'stores/tweets/types';
import { createCountdownEvent, tweets } from 'utils/tweets';
import { Tweet } from './Tweet';
import { FeedActions } from './Actions';
import {
  addTweet,
  removeOutdatedTweets,
  subscribe as subscribeToTweetsStore,
} from 'stores/tweets';
import { TweetLikeCount } from './Tweet/TweetLikeCount';

export const Feed: React.FC = () => {
  const [allTweets, setTweetsData] = useState<ITweetsState>(
    tweetsStore.initialState
  );
  const [activeFilter, setActiveFilter] = useState(false);
  const countdownObsRef = useRef(createCountdownEvent());

  const allTweetsArr = Object.values(allTweets);
  const likedTweets = allTweetsArr.filter((tweet) => tweet.liked === true);

  const filteredTweets = activeFilter ? likedTweets : allTweetsArr;

  useEffect(() => {
    const tweetsStoreSubscription = subscribeToTweetsStore(setTweetsData);
    const tweetsSubscription = tweets.subscribe((tweetData) => {
      removeOutdatedTweets(30);
      addTweet(tweetData);
    });

    return () => {
      tweetsStoreSubscription.unsubscribe();
      tweetsSubscription.unsubscribe();
    };
  }, []);

  return (
    <div className="h-full w-full max-w-[600px] border-x border-white/25 text-white">
      <FeedActions setActiveFilter={setActiveFilter} />
      <TweetLikeCount likedTweetsCount={likedTweets.length} />
      <section data-cy="tweetFeed">
        {filteredTweets.map((tweet) => {
          const { id, liked } = tweet;
          return (
            <Tweet
              key={id}
              id={id}
              liked={liked}
              countdownObs={countdownObsRef.current}
            />
          );
        })}
      </section>
    </div>
  );
};
