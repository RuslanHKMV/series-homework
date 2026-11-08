# series-homework

JavaScript functions for SeriesHub, a TV series site. They read JSON data, use array methods, and update the data without changing the original.

## How to run the check

node check.js

## Question 1: addEpisode

Writing `{ ...show }` only copies the top level of the show. The `seasons` array inside it would still be the same array as in the original, so changing it would change the original data too. That's why I made a new object for the show, a new `seasons` array with `map`, a new object for the matching season, and a new `episodes` array with the added episode. The other shows and seasons stay as the same objects, because I didn't change them.

## Question 2: Bug #3

The co-worker did make a copy with `{ ...show }`, but it's a shallow copy. The new object had its own top-level properties, but `seasons` still pointed to the same array as the original show. So `firstSeason.episodes.push(episode)` changed the episodes array that both the copy and the original share, and the original data changed too.

