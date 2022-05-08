// this would obviously be configured differently, if I had a production URL
// or had to run any checks when pushing to GH, etc

describe('Tweet actions should work', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('should start the app and load items', () => {
    cy.wait(5100);

    cy.get('[data-cy=tweet]').should('have.length', 3);
  });

  it('should trigger a like correctly', () => {
    cy.wait(3100);

    cy.get('[data-cy=tweetLikeButton]').should('have.length', 1);
    cy.get('[data-cy=defaultTweet]').should('have.length', 1);
    cy.get('[data-cy=likedTweet]').should('have.length', 0);

    cy.get('[data-cy=tweetLikeButton]').click();

    cy.get('[data-cy=defaultTweet]').should('have.length', 0);
    cy.get('[data-cy=likedTweet]').should('have.length', 1);

    cy.get('[data-cy=tweetLikeButton]').click();

    cy.get('[data-cy=defaultTweet]').should('have.length', 1);
    cy.get('[data-cy=likedTweet]').should('have.length', 0);
  });

  it('should clear tweets list correctly', () => {
    cy.wait(5100);

    cy.get('[data-cy=tweet]').should('have.length', 3);

    cy.get('[data-cy=clearTweetsButton]').click();

    cy.get('[data-cy=tweet]').should('have.length', 0);
  });

  it('should filter liked tweets correctly', () => {
    cy.wait(3100);

    cy.get('[data-cy=defaultTweet]').should('have.length', 1);

    cy.get('[data-cy=tweetLikeButton]').click();

    cy.get('[data-cy=defaultTweet]').should('have.length', 0);
    cy.get('[data-cy=likedTweet]').should('have.length', 1);

    cy.wait(2000);

    cy.get('[data-cy=defaultTweet]').should('have.length', 2);
    cy.get('[data-cy=likedTweet]').should('have.length', 1);

    cy.get('[data-cy=showLikedTweetsButton]').click();

    cy.get('[data-cy=defaultTweet]').should('have.length', 0);
    cy.get('[data-cy=likedTweet]').should('have.length', 1);
  });

  it('should filter all tweets correctly', () => {
    cy.wait(3100);

    cy.get('[data-cy=defaultTweet]').should('have.length', 1);

    cy.get('[data-cy=showLikedTweetsButton]').click();

    cy.get('[data-cy=defaultTweet]').should('have.length', 0);
    cy.get('[data-cy=likedTweet]').should('have.length', 0);

    cy.get('[data-cy=showAllTweetsButton]').click();

    cy.get('[data-cy=defaultTweet]').should('have.length', 1);
    cy.get('[data-cy=likedTweet]').should('have.length', 0);
  });
});

export {};
