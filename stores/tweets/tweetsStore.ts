import { Dispatch, SetStateAction } from 'react';
import { Subject } from 'rxjs';
import { ITweet, ITweetsState } from './types';
import { calcTimeDifferenceInSeconds } from 'utils/dates';

const subject = new Subject<ITweetsState>();

const initialState: ITweetsState = {};

let state = initialState;

export const tweetsStore = {
  addTweet: (tweet: ITweet) => {
    state = {
      [tweet.id]: tweet,
      ...state,
    };
    subject.next(state);
  },
  clearTweets: () => {
    state = initialState;
    subject.next(state);
  },
  getTweet: (tweetId: string) => state[tweetId],
  removeOutdatedTweets: (timeInSeconds: number) => {
    const currentTweets = { ...state };
    const filteredKeyValPairs = Object.entries(currentTweets).filter(
      ([, tweetData]) =>
        calcTimeDifferenceInSeconds(tweetData.timestamp) <= timeInSeconds
    );
    const recentTweets = Object.fromEntries(filteredKeyValPairs);
    state = recentTweets;
  },
  triggerTweetLike: (tweetId: string) => {
    const targetTweet = { ...state[tweetId] };
    state = {
      ...state,
      [tweetId]: {
        ...targetTweet,
        liked: !targetTweet.liked,
      },
    };
    subject.next(state);
  },
  initialState,
  subscribe: (setTweetsState: Dispatch<SetStateAction<ITweetsState>>) =>
    subject.subscribe(setTweetsState),
};

export const addTweet = tweetsStore.addTweet;
export const getTweet = tweetsStore.getTweet;
export const removeOutdatedTweets = tweetsStore.removeOutdatedTweets;
export const triggerTweetLike = tweetsStore.triggerTweetLike;
export const subscribe = tweetsStore.subscribe;
