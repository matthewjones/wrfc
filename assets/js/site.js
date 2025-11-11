window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var fadeAnchor = document.getElementById('fade-anchor');
    var headNav = document.getElementById("header-nav");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        /* document.getElementById("header-nav").style.height = "4rem"; */
        headNav.classList.add('small-bar');
        fadeAnchor.classList.add('visible');
    } else {
        /* document.getElementById("header-nav").style.height = "5.6rem"; */
        headNav.classList.remove('small-bar');
        fadeAnchor.classList.remove('visible');
    }
}