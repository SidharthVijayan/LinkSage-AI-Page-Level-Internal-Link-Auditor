document.getElementById("analyzeBtn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const results = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const links = Array.from(document.querySelectorAll("a"));
      return links.length;
    }
  });

  document.getElementById("totalLinks").innerText = results[0].result;
});
