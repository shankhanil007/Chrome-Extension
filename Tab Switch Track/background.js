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
        // console.log(data.count);

        // POST request using fetch()
        fetch("http://localhost:5000/", {
          // Adding method type
          method: "POST",

          // Adding body or contents to send
          body: JSON.stringify({
            count: data.count,
          }),

          // Adding headers to the request
          headers: {
            "Content-type": "application/json; charset=UTF-8 ",
          },
        })
          // Converting to JSON
          .then((response) => response.json())

          // Displaying results to console
          .then((json) => console.log(json));
      });
    });
  }

  //   console.log(localStorage.getItem("count"));
  //   chrome.storage.local.set({
  //     count: count + 1,
  //   });
  //   console.log(chrome.storage.local.get("count"));
});
