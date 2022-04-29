// var app = chrome.runtime.getBackgroundPage();

function hello() {
    chrome.tabs.executeScript({
        file: 'hello.js'
    });
}

function likeAll() {
    chrome.tabs.executeScript({
        file: 'likeAll.js'
    });
}

if(document.getElementById('clickme')) {
    document.getElementById('clickme').addEventListener('click', hello);
}

if(document.getElementById('auto-like')) {
    document.getElementById('auto-like').addEventListener('click', likeAll);
}
