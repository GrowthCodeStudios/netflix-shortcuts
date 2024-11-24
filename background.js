chrome.commands.onCommand.addListener((command) => {
    if (command === "perform-action") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "perform-action" });
        });
    }
});
