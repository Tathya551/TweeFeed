let buttonAdded = false;

function insertButton() {
  if (buttonAdded) return;
  const toolbarSelector = 'div[data-testid="toolBar"]';
  const toolbar = document.querySelector(toolbarSelector);

  if (!toolbar) {
    return;
  }

  const originalTweetTextSelector = 'div[data-testid="tweetText"]';
  const originalTweetTextElement = document.querySelector(
    originalTweetTextSelector
  );
  if (!originalTweetTextElement) {
    return;
  }
  const originalTweetText = originalTweetTextElement.innerText;

  const button = document.createElement("img");
  button.src = chrome.runtime.getURL("icon.png");
  button.alt = "Reply with Original Tweet";
  button.className = "custom-reply-button";
  button.style.cssText =
    "cursor: pointer; margin-right: 8px; width: 20px; height: 20px;";

  toolbar.insertBefore(button, toolbar.firstChild);

  button.addEventListener("click", function () {
    alert(originalTweetText);
    const replyFieldSelector = 'div[data-testid="tweetTextarea_0"]';
    const replyField = document.querySelector(replyFieldSelector);
    if (replyField) {
      replyField.focus();
      document.execCommand("insertText", false, originalTweetText);
    }
  });

  buttonAdded = true;
}

const observer = new MutationObserver((mutations, obs) => {
  insertButton();
  if (buttonAdded) {
    obs.disconnect();
  }
});

if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", () => {
    observer.observe(document.body, { childList: true, subtree: true });
  });
} else {
  observer.observe(document.body, { childList: true, subtree: true });
}
