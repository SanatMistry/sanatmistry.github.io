const Tab = {
    PROFILE: 1,
    SKILLS: 2,
    EXPERIENCE: 3,
    PROJECTS: 4,
    CONTACT: 5
}

function onPageLoad() {
    var letters = jQuery('.text-wrapper')
    for (let i = 0; i < letters.length; i++) {
        let el = jQuery(letters[i])
        el.addClass('rubberband-animation');
        setTimeout(() => {
            el.removeClass('rubberband-animation');
        }, 1000);
    }
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

// function switchTab(tab) {
//     switch(tab) {
//         case TAB.PROFILE
//     }
// } 

function navigateHome() {
    jQuery('html,body').animate({scrollTop: 0}, 'fast');
    jQuery('.nav-item').removeClass('nav-item-selected');
    jQuery('#home-nav').addClass('nav-item-selected');
}

function navigateProfile() {
    closeMenu();
    jQuery('html,body').animate({scrollTop: jQuery("#profile").offset().top}, 'fast');
    jQuery('.nav-item').removeClass('nav-item-selected');
    jQuery('#profile-nav').addClass('nav-item-selected');
}

function navigateSkills() {
    closeMenu();
    jQuery('html,body').animate({scrollTop: jQuery('#skills').offset().top}, 'fast');
    jQuery('.nav-item').removeClass('nav-item-selected');
    jQuery('#skills-nav').addClass('nav-item-selected');
}
function navigateExp() {
    closeMenu();
    jQuery('html,body').animate({scrollTop: jQuery('#experience').offset().top}, 'fast');
    jQuery('.nav-item').removeClass('nav-item-selected');
    jQuery('#exp-nav').addClass('nav-item-selected');
}
function navigateProjects() {
    closeMenu();
    jQuery('html,body').animate({scrollTop: jQuery('#projects').offset().top}, 'fast');
    jQuery('.nav-item').removeClass('nav-item-selected');
    jQuery('#projects-nav').addClass('nav-item-selected');
}
function navigateHireMe() {
    closeMenu();
    jQuery('html,body').animate({scrollTop: jQuery('#hireMe').offset().top}, 'fast');
    jQuery('.nav-item').removeClass('nav-item-selected');
    jQuery('#comtact-nav').addClass('nav-item-selected');
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
    setTimeout(() => {
        el.removeClass('rubberband-animation');
    }, 1000);
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