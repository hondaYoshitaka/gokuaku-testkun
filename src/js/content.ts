// 送信側 contents -> background
chrome.runtime.sendMessage(
    {value: {contents: "test value from contents"}}
);

// 受信側 other tab -> contents(popup/option -> contents)
chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
    console.log(message);
    return;
});
