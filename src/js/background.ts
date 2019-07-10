export {};

declare global {
    interface Window {
        answer(): void;

        hogeeee: string;
    }
}

// contents.jsで送信した値を受信
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        console.log(request);
    }
);

window.hogeeee = 'aaa';

window.answer = (): void => {
    window.alert('do answer');

    chrome.tabs.query({active: true}, (activeTab) => {
        if (!activeTab || activeTab.length !== 1) {
            return;
        }
        chrome.windows.get(activeTab[0].windowId, (tabWindow) => {
            chrome.runtime.sendMessage('XXXX', 'popup -> background -> content!');
        });
    });
};
