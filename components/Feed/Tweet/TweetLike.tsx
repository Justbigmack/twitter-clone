import React from 'react';
import clsx from 'clsx';
import { HeartIcon } from '@heroicons/react/outline';
import { HeartIcon as HearIconFilled } from '@heroicons/react/solid';
import { triggerTweetLike } from 'stores/tweets/tweetsStore';

interface ITweetLike {
  id: string;
  liked: boolean;
}

export const TweetLike = ({ id, liked }: ITweetLike) => {
  const LikeIcon = liked ? HearIconFilled : HeartIcon;

  const iconClasses = clsx('h-6 w-6 duration-200', {
    'group-hover:text-red-600': !liked,
    'text-red-600': liked,
  });

  const textClasses = clsx('text-[13px] duration-200', {
    'group-hover:text-red-600': !liked,
    'text-red-600': liked,
  });

  const likeText = liked ? 'Remove like' : 'Like that tweet';

  return (
    <div
      className="group -ml-2 mt-3 flex w-auto select-none items-center text-gray-400 hover:cursor-pointer"
      aria-label="likes"
      data-cy={'tweetLikeButton'}
      role="button"
      onClick={() => triggerTweetLike(id)}
    >
      <div className="mr-1 flex items-center justify-center rounded-full p-2 duration-200 group-hover:bg-red-900/25">
        <LikeIcon
          className={iconClasses}
          data-cy={liked ? 'likedTweet' : 'defaultTweet'}
        />
      </div>
      <span className={textClasses}>{likeText}</span>
    </div>
  );
};
