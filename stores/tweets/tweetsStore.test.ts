import { tweetsStore } from './tweetsStore';

const testTweet = {
  author: 'John',
  content: `something`,
  id: '123',
  timestamp: Date.now(),
  liked: false,
};

const testTweet2 = {
  author: 'John2',
  content: `something2`,
  id: '1234',
  timestamp: Date.now(),
  liked: false,
};

describe('tweetsStore should work properly', () => {
  test('Initial state is correct', () => {
    expect(tweetsStore.initialState).toEqual({});
  });

  test('Adding and getting an item works', () => {
    expect(tweetsStore.getTweet(testTweet.id)).toEqual(undefined);
    tweetsStore.addTweet(testTweet);
    expect(tweetsStore.getTweet(testTweet.id)).toEqual(testTweet);
  });

  test('Liking a tweet works', () => {
    tweetsStore.addTweet(testTweet);
    expect(tweetsStore.getTweet(testTweet.id).liked).toEqual(false);
    tweetsStore.triggerTweetLike(testTweet.id);
    expect(tweetsStore.getTweet(testTweet.id).liked).toEqual(true);
    tweetsStore.triggerTweetLike(testTweet.id);
    expect(tweetsStore.getTweet(testTweet.id).liked).toEqual(false);
  });

  test('Clearing outdated tweets works', async () => {
    tweetsStore.addTweet(testTweet);
    tweetsStore.addTweet(testTweet2);
    expect(tweetsStore.getTweet(testTweet.id)).toEqual(testTweet);
    expect(tweetsStore.getTweet(testTweet2.id)).toEqual(testTweet2);
    await new Promise((r) => setTimeout(r, 1500));
    tweetsStore.removeOutdatedTweets(1);
    expect(tweetsStore.getTweet(testTweet.id)).toEqual(undefined);
    expect(tweetsStore.getTweet(testTweet2.id)).toEqual(undefined);
  });

  test('Clearing tweets works', async () => {
    tweetsStore.addTweet(testTweet);
    expect(tweetsStore.getTweet(testTweet.id)).toEqual(testTweet);
    tweetsStore.clearTweets();
    expect(tweetsStore.getTweet(testTweet.id)).toEqual(undefined);
  });
});
