const Screen = {
    HOME: 'home',
    ABOUT: 'about',
    SKILLS: 'skills',
    MY_WORK: 'myWork',
    CONTACT: 'contact'
}

var currentScreen = 'home';

function onPageLoad() {
    jQuery('.screen-container').hide();
    jQuery('#home').show();
    showRubberAnimation(0);
}


function showRubberAnimation(initialOpacity) {
    var letters = jQuery('#' + currentScreen).find('.text-wrapper');
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
                if (currentScreen === 'home') {
                    el.removeClass('primary-text');
                }
            }, 1000);
            count++;
        } else {
            window.clearInterval(interval)
        }
    }, 100);
}

function changeScreen(screenName) {
    jQuery('.screen-container').hide();
    switch(screenName) {
        case Screen.HOME: 
            jQuery('#home').show();
            currentScreen = Screen.HOME
            break;
        case Screen.ABOUT: 
            jQuery('#about').show();
            currentScreen = Screen.ABOUT
            break;
        case Screen.SKILLS: 
            jQuery('#skills').show();
            currentScreen = Screen.SKILLS
            break;
        case Screen.MY_WORK: 
            jQuery('#my-work').show();
            currentScreen = Screen.MY_WORK
            break;
        case Screen.CONTACT: 
            jQuery('#contact').show();
            currentScreen = Screen.CONTACT
            break;
    }
    showRubberAnimation(0);
    jQuery('#menu').removeClass('close');
    jQuery('#menu').addClass('open');
    jQuery('.nav-item-wrapper').removeClass('open');
}

// function moveCursor(e) {
//     setTimeout(() => {
//         $('#cursor').css({top: e.clientY + 'px'})
//         $('#cursor').css({left: e.clientX + 'px'})
//     }, 200);
// }


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
                if (currentScreen != 'home') {
                    el.addClass('primary-text')
                }
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