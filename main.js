var overlay = document.getElementById("overlay");
var closeMenu = document.getElementById("close-menu");
var openMenu = document.getElementById("open-menu");

openMenu.addEventListener("click", function() {
    overlay.style.display = "block";
    overlay.className = ""; // should remove all classes from overlay
    overlay.classList.add("show-menu");

});

closeMenu.addEventListener("click", function() {
    overlay.className = ""; // should remove all classes from overlay
    overlay.classList.add("hide-menu");


});

overlay.addEventListener("animationend", function(ev) {
    if (ev.animationName === "slide-menu-right") {
        overlay.style.display = "none";
    }

});