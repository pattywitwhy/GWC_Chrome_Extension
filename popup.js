function actualize() {
  chrome.tabs.create({url: "https://anyonecanlearntocode.com/chicago-coding-bootcamp"});
}
function killnil() {
  chrome.tabs.create({url: "https://github.com/killnil"});
}
function github() {
  chrome.tabs.create({url: "https://github.com/"});
}
function google() {
  chrome.tabs.create({url: "https://docs.google.com/"});
}
function rubydocs() {
  chrome.tabs.create({url: "https://ruby-doc.org/"});
}
function w3schools() {
  chrome.tabs.create({url: "https://www.w3schools.com/"});
}
function htmlcolorcodes() {
  chrome.tabs.create({url: "https://htmlcolorcodes.com/"});
}
function rubygems() {
  chrome.tabs.create({url: "https://rubygems.org/"});
}

document.querySelector('.actualize').addEventListener('click', actualize);
document.querySelector('.killnil').addEventListener('click', killnil);
document.querySelector('.github').addEventListener('click', github);
document.querySelector('.google').addEventListener('click', google);
document.querySelector('.rubydocs').addEventListener('click', rubydocs);
document.querySelector('.w3schools').addEventListener('click', w3schools);
document.querySelector('.htmlcolorcodes').addEventListener('click', htmlcolorcodes);
document.querySelector('.rubygems').addEventListener('click', rubygems);
