interface ITweetLikeCount {
  likedTweetsCount: number;
}

export const TweetLikeCount = ({ likedTweetsCount }: ITweetLikeCount) => {
  return (
    <div className="flex w-full items-center justify-center border-b border-white/25 p-5">
      <p>Liked tweets count: {likedTweetsCount}</p>
    </div>
  );
};
