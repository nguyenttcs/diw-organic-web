 // Sticky Navbar
 $(window).scroll(function () {
    if ($(this).scrollTop() > 140) {
        $('.navbar').addClass('nav-sticky');
    } else {
        $('.navbar').removeClass('nav-sticky');
    }
});