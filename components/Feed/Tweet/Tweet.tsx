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
    <div
      className="flex w-full border-b border-gray-subtle px-4 py-3"
      data-cy="tweet"
    >
      <div className="mr-3 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-400">
        <span className="text-[15px]">
          {author.charAt(0).toUpperCase() ?? 'A'}
        </span>
      </div>
      <div className="flex w-full flex-col">
        <div className="flex">
          <span className="text-[15px] font-bold text-light-gray">
            {author}
          </span>
          <span className="ml-1 text-base font-normal text-dark-gray">{`@${author}`}</span>
          <span className="mx-2 text-dark-gray">·</span>
          <TweetTimestamp id={id} countdownObs={countdownObs} />
        </div>
        <p className="text-[15px] text-light-gray">{content}</p>
        <div>
          <TweetLike id={id} liked={liked} />
        </div>
      </div>
    </div>
  );
});

Tweet.displayName = 'Tweet';
