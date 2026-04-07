function isInternalLink(url) {
  return url.includes(window.location.hostname);
}

function cleanText(text) {
  return text.trim().replace(/\s+/g, " ");
}
