function onPageLoad() {
    // setTimeout(() => {
    //     loadPage()
    // }, 3500);
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