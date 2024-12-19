chrome.commands.onCommand.addListener((command) => {
    if (command === "copy-jira-issue") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]?.id) {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ["content.js"]
          });
        }
      });
    }
  });
