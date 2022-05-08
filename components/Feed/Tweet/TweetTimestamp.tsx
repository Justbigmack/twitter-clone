import { memo, useEffect, useState } from 'react';
import { Observable } from 'rxjs';
import { getTweet } from 'stores/tweets/tweetsStore';
import { calcTimeDifferenceInSeconds } from 'utils/dates';

interface ITweetTimestamp {
  countdownObs: Observable<number>;
  id: string;
}

export const TweetTimestamp = memo(({ countdownObs, id }: ITweetTimestamp) => {
  const { timestamp } = getTweet(id);

  const [differenceInSeconds, setDifference] = useState(
    calcTimeDifferenceInSeconds(timestamp)
  );

  useEffect(() => {
    const countdownSub = countdownObs.subscribe(() =>
      setDifference(calcTimeDifferenceInSeconds(timestamp))
    );

    return () => countdownSub.unsubscribe();
  }, [countdownObs, timestamp]);

  const displayedText =
    differenceInSeconds === 0 ? 'Now' : `${differenceInSeconds}s`;

  return <span className="text-[15px] text-dark-gray">{displayedText}</span>;
});

TweetTimestamp.displayName = 'TweetTimestamp';
