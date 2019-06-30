function namely() {
  chrome.tabs.create({url: "https://girlswhocode.namely.com/"});
}
function GWCportal() {
  chrome.tabs.create({url: "https://gwcportal.force.com/partnerresources/s/"});
}
function hq() {
  chrome.tabs.create({url: "https://hq.girlswhocode.com/gwc#collection/sip-u1-fundamentals"});
}

document.querySelector('.namely').addEventListener('click', namely);
document.querySelector('.GWCportal').addEventListener('click', GWCportal);
document.querySelector('.hq').addEventListener('click', hq);