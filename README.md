This is a simplified version of a Twitter homepage.

I will go over the choices I made while creating this app and will do my best to explain why I made that choice.

## How to run

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Or visit [this link](https://twitter-clone-andreik.vercel.app)

## Technologies used

- [Next.js](https://nextjs.org) - this was just a matter of preference. This could easily be a react SPA, but I just like Next.js, so decided to go with it for a change.
- [rxjs](https://rxjs.dev/) - this was a task requiremnt, so a no brainer.
- [tailwindcss](https://tailwindcss.com) - once you get past the learning curve, tailwind speeds up the developmend, so I went with it. Also a matter of preference. With tailwind it is a bit of hustle to set up theming, so there is no theming (dark / light) support for this app. I just went for a darker one.
- other utility packages (like uuid, clsx, etc.)

## Thinking process

I do not have much experience with rxjs. I have used other tools to achieve the same (or similar) tasks before. I haven't used it for state management either, so it was a learning curve.

First I had to read quite a bit of documentation to understand what is going with rxjs and what it does (but mostly how one can actually manage state with it). Then I tried to replicate Twitter UI (not pixel-by-pixel, but so that it would look somewhat similar). I didn't bother too much with icons and colors.

Then I started to think how I can actually accomplish the task. The first choice I had to make was how to store the list : array of objects or object of key - value pairs. I chose the latter, because it would make CRUD operations on it a lot easier and looping / filtering could be done with keys, values or both at the same time.

### Second requirement

Second requirement was to render tweets as a list and order the list by date descending. That could be done by ensuring that you add the new tweet before you spread the existing tweets in the store. It would place the newly created tweet at the top and react would render it on top.

For the third sub-requirement of never changing the tweets observable: I am not sure, if I broke the rules, but I did add some data to the tweets themselves to make them easier to render / perform operations on.

### Third requirement

Third requirement was to not show entries older than 30 sec in the list anymore. I thought that it would be best to actually remove old entries from the list and not filter the actual list, because after a while all the invisible entries would make the tweets store bulky and difficult to loop through. That would lead to poorer performance the longer user stayed on the page. And if I removed those, filtering operations would not be expensive with so few items in the store. I decided to do that when the new item is added to the feed. That doesn't guarantee the hard 30 sec cut of outdated tweets, but that made more sense UX-wise, so I went with that approach.

### Fourth requirement

To satisfy the fourth requirement, I had to update an entry in the store, so I added a method for it to the store. Updating a tweet would rerender the whole list, so I memoized the single tweet component to not be rerendered all the time. This rerndering is not very expensive, but you do gain performance overall, because addition of tweets is fired quite frequently.

### Fifth requirement

Filter buttons is memoized section that filters the tweets one level above the component. To show the like count we still need to filter through all the items that are in the store, so that is what I did.

### Sixth requirement

To satisfy that requirement a method has been added to the store to clear out the state.

## Other challenges

Looking at twitter, they have a timestamp (like, 1 sec ago, 2m ago) of when the tweet was posted. I wanted to add the same feature, but I didn't want it to rerender on every tweet update, so this component is also memoized. But all the tweets' timestamps on Twitter actually update at the same time. I tried to achieve that by adding an observer in Feed component that would start one instance of countdown and emmit an event every 1000 miliseconds. By passing it to the timestamp component as a prop, I could make the timestamp subscribe to it and update its own state. It is not as flawless, but it very close to being synchronous.

## Testing

I added some tests to the store and also wrote some cypress tests. I didn't go for 100% test coverage, since testing practices and standards differ from company to company and I think this task is just meant to give you an impression of how I would approach something like that.

## What I would have done differently

- State management: rxjs felt a little dated in terms of state management. I don't have much experience with rxjs, so it is quite possible that I am just not aware of how to do that, but I didn't find a way to subscribe to individual item updates in the store. Instead of rxjs subjects I would go for a library like Zustand that is much more straightforward, requires way less boilerplate and provides automatic subscription. With functions written correctly, it is possible to significantly reduce propr drilling and some of the props I am passing wouldn't need passing + the components would actually rerender on their own.
- Item fetching strategy: I would avoid adding items directly each x seconds, unless it is a business requirement, because it is quite expensive to rerender the list and filter it in real time. I would steer towards adding a button showing that there are new items that the user can fetch and clicking on it would fetch the items. Or something similar.

## General notes

I did my best to do everything the rxjs way, but I was not 100% sure if that was the right way to go with it, so if you have any feedback, it will be really appreciated.
