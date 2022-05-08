import { interval, map, merge } from 'rxjs';
import { ITweet } from 'stores/tweets/types';
import { v4 as uuidv4 } from 'uuid';

export const createTweetSource = (
  frequency: number,
  author: string,
  attribute: string
) => {
  return interval(frequency).pipe(
    map(
      (i): ITweet => ({
        author,
        content: `${attribute} Tweet number ${i + 1}`,
        id: uuidv4(),
        timestamp: Date.now(),
        liked: false,
      })
    )
  );
};

export const createCountdownEvent = () => {
  return interval(1000).pipe();
};

export const tweets = merge(
  createTweetSource(5000, 'AwardsDarwin', 'Facepalm'),
  createTweetSource(3000, 'iamdevloper', 'Expert'),
  createTweetSource(5000, 'CommitStrip', 'Funny')
);
