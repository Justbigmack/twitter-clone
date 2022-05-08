interface ITweetLikeCount {
  likedTweetsCount: number;
}

export const TweetLikeCount = ({ likedTweetsCount }: ITweetLikeCount) => {
  return (
    <div className="flex w-full items-center justify-center border-b border-gray-subtle p-5 text-light-gray">
      <p>Liked tweets count: {likedTweetsCount}</p>
    </div>
  );
};
