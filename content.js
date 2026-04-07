const links = Array.from(document.querySelectorAll("a"));

const internalLinks = links.filter(link => {
  return link.href.includes(window.location.hostname);
});

const data = internalLinks.map(link => ({
  url: link.href,
  anchor: link.innerText.trim(),
  isNav: link.closest("nav") !== null,
  isFooter: link.closest("footer") !== null
}));

console.log(data);
