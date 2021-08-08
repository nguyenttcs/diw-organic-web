
/*
FOR Sticky Navbar
*/

 $(window).scroll(function () {
    if ($(this).scrollTop() > 140) {
        $('.navbar').addClass('nav-sticky');
    } else {
        $('.navbar').removeClass('nav-sticky');
    }
});

/*
FOR Product Detail Page: Click to change image
*/

function  changeImage(number) {
    var myImage=document.getElementById("mainImg");
    myImage.src="img/product-detail/sp" + number + ".png";
}
