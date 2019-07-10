document.getElementById('answer')!.addEventListener('click', () => {
    const backgroundPage = chrome.extension.getBackgroundPage();

    if (!backgroundPage) {
        return;
    }
    backgroundPage.answer();
});
