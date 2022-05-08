export interface ITweet {
  author: string;
  content: string;
  id: string;
  timestamp: number;
  liked: boolean;
}

export interface ITweetsState {
  [key: string | number]: ITweet;
}
