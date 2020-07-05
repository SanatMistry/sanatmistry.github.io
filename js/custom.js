function onPageLoad() {
    setTimeout(() => {
        loadPage()
    }, 3500);
}

function loadPage() {
    $('#loader').hide()
}

window.addEventListener('wheel', function(e) {
    // scroll image here
})

function moveCursor(e) {
    setTimeout(() => {
        $('#cursor').css({top: e.clientY + 'px'})
        $('#cursor').css({left: e.clientX + 'px'})
    }, 200);
}