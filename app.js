var myNav = document.querySelector('.navbar');
window.onscroll = function () { 
    "use strict";
    console.log(window.scrollY);
    if (window.scrollY >= 20 ) {
        myNav.classList.add("navbar-colored");
        myNav.classList.remove("navbar-transparent");
    } 
    else {
        myNav.classList.add("navbar-transparent");
        myNav.classList.remove("navbar-colored");
    }
};