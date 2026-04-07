chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    function: auditLinks
  });
});

function auditLinks() {
  const links = Array.from(document.querySelectorAll("a"));
  return links.length;
}
