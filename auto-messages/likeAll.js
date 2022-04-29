let t;

function clickLike() {
    var els = document.querySelectorAll('.user-card__action--yes');
    els = [...els];
    els.map(el => el.click());

}

function clickNext() {
    document.querySelector("[data-qa-role='pagination-nav-next']").click();
}


function startAll() {
    t = setInterval(function () {
        clickLike();
        setTimeout(clickNext(), 5000);
    }, 5000);
}

function stopAll() {
    t = null;
}

startAll();