var isEnabled = false;

function disableBrowserAction() {
  console.log("Now disable")
}

function enableBrowserAction(tab) {
  console.log("Now enable");
  chrome.tabs.insertCSS(tab.id, {
    file: "style.css",
    allFrames: true
  });
}

function updateState(tab) {
  console.log("just clicked")
  if (!isEnabled) {
    isEnabled = true
    enableBrowserAction(tab);
  } else {
    isEnabled = false
    disableBrowserAction(tab);
  }
}

disableBrowserAction();

chrome.browserAction.onClicked.addListener(updateState);