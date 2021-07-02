let count = 0;

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.local.clear();
//   chrome.storage.local.set({ count: 0 });
// });

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
    count = count + 1;
    chrome.storage.local.set({ count: count }, function () {
      chrome.storage.local.get(null, function (data) {
        console.log(data.count);
      });
    });
  }

  //   console.log(localStorage.getItem("count"));
  //   chrome.storage.local.set({
  //     count: count + 1,
  //   });
  //   console.log(chrome.storage.local.get("count"));
});
