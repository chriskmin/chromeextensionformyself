let blockedSites = ["*://www.youtube.com/*", "*://www.instagram.com/*", "*://www.reddit.com/*"];
let redirectUrl = "https://www.leetcode.com/";

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: redirectUrl};
  },
  {urls: blockedSites},
  ["blocking"]
);
