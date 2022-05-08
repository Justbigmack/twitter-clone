import { memo } from 'react';
import { Observable } from 'rxjs';
import { tweetsStore } from 'stores/tweets/tweetsStore';
import { TweetLike } from './TweetLike';
import { TweetTimestamp } from './TweetTimestamp';

interface ITweetComponent {
  countdownObs: Observable<number>;
  id: string;
  liked: boolean;
}

export const Tweet = memo(({ countdownObs, id, liked }: ITweetComponent) => {
  const { author, content } = tweetsStore.getTweet(id);

  return (
    <div className="flex w-full border-b border-white/25 px-4 py-3">
      <div className="mr-3 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-400">
        <span className="text-[15px]">
          {author.charAt(0).toUpperCase() ?? 'A'}
        </span>
      </div>
      <div className="flex w-full flex-col">
        <div className="flex">
          <span className="text-[15px] font-bold text-gray-100">{author}</span>
          <span className="ml-1 text-base font-normal text-gray-400">{`@${author}`}</span>
          <span className="mx-2 text-gray-400">·</span>
          <TweetTimestamp id={id} countdownObs={countdownObs} />
        </div>
        <p className="text-[15px]">{content}</p>
        <div>
          <TweetLike id={id} liked={liked} />
        </div>
      </div>
    </div>
  );
});

Tweet.displayName = 'Tweet';
