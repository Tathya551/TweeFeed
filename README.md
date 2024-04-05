# Twitter Reply Extension

## Overview

This is a Chrome Extension enables users to reply to tweets with the original tweet's text automatically pre-filled in the reply box.

## Features

- **Automatic Button Insertion**: Dynamically adds a custom button to Twitter's UI, allowing users to utilize the extension's functionality as they browse Twitter.
- **Easy Reply With Original Tweet**: With a single click, users can initiate a reply that includes the text of the original tweet.

## Approach

The extension utilizes a combination of DOM manipulation and event handling in JavaScript to integrate with Twitter's existing UI. By observing changes in the DOM with a `MutationObserver`, it ensures the custom button is added to all tweet reply sections, even on dynamically loaded content. The extension captures the original tweet's text and attempts to insert this text into the reply field when the user clicks the custom button.

## Shortcomings

Currently, the extension faces a limitation where only the last part of the original tweet's text is inserted into the reply field upon the first button click. Subsequent clicks function as intended, inserting the full text of the original tweet.

## Commitment to Future Improvements

I am aware of the current shortcomings and am committed to resolving this issue in the nearest future. I am actively working on a solution to ensure the full text of the original tweet is inserted upon the first interaction.
