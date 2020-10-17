const Tab = {
    PROFILE: 1,
    SKILLS: 2,
    EXPERIENCE: 3,
    PROJECTS: 4,
    CONTACT: 5
}

function onPageLoad() {
    showRubberAnimation(0);
}

function showRubberAnimation(initialOpacity) {
    var letters = jQuery('.text-wrapper')
    jQuery('.text-wrapper').css({opacity: initialOpacity});
    var count = 0;
    var interval = setInterval(() => {
        if (count < letters.length) {
            let el = jQuery(letters[count])
            el.css({opacity: 1})
            el.addClass('rubberband-animation');
            el.addClass('primary-text');
            setTimeout(() => {
                el.removeClass('rubberband-animation');
                el.removeClass('primary-text');
            }, 1000);
            count++;
        } else {
            window.clearInterval(interval)
        }
    }, 100);
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


function openMenu() {
    jQuery(".navigation-menu-btn").hide();
    jQuery(".navigation-menu").css('display', 'flex');
}

function closeMenu() {
    jQuery(".navigation-menu-btn").show();
    jQuery(".navigation-menu").hide();
}

jQuery('.text-wrapper').on('mouseover', (event) => {
    var el = jQuery(event.target)
    el.addClass('rubberband-animation');
    if (el[0].classList.contains('primary-text')) {
        el.removeClass('primary-text');
    } else if (el[0].classList.contains('secondary-text')) {
        el.removeClass('secondary-text');
        el.addClass('primary-text');
    } else {    
        el.addClass('secondary-text');
    }
    setTimeout(() => {
        el.removeClass('rubberband-animation');
    }, 1000);

    setTimeout(() => {
        if (el[0].classList.contains('primary-text') || el[0].classList.contains('secondary-text')) {
            el.addClass('rubberband-animation');
            setTimeout(() => {
                el.removeClass('primary-text');
                el.removeClass('secondary-text');
                el.removeClass('rubberband-animation');
            }, 1000);
        }
    }, 5000);
})

jQuery('#menu').on('click', () => {
    var el = jQuery('#menu')
    var navBar = jQuery('.nav-item-wrapper')
    if (el[0].classList.contains('close')) {
        el.removeClass('close');
        el.addClass('open');
        navBar.removeClass('open');
    } else {
        el.addClass('close');
        el.removeClass('open');
        navBar.addClass('open')
    }
})