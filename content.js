function performAction() {
    // Detect and click the "Skip Intro" button
    const skipIntroButton = [...document.querySelectorAll("button")].find((btn) =>
        btn.innerText.includes("Skip Intro")
    );
    if (skipIntroButton) {
        skipIntroButton.click();
        return;
    }

    // Detect and click the "Skip Recap" button
    const skipRecapButton = [...document.querySelectorAll("button")].find((btn) =>
        btn.innerText.includes("Skip Recap")
    );
    if (skipRecapButton) {
        skipRecapButton.click();
        return;
    }

    // Detect and click the "Next Episode" button
    const nextEpisodeButton = document.querySelector('[data-uia="next-episode-seamless-button"]');
    if (nextEpisodeButton) {
        nextEpisodeButton.click();
        return;
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "perform-action") {
        performAction();
        sendResponse({ success: true });
    }
});
