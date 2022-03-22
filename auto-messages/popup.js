// var app = chrome.runtime.getBackgroundPage();

function hello() {
    chrome.tabs.executeScript({
        file: 'hello.js'
    });
}

if(document.getElementById('clickme')) {
    document.getElementById('clickme').addEventListener('click', hello);
}
