function changebg() {

    let menu_fix = document.querySelector(".header");
    let current = window.scrollY;

    if (current > 0) {
        menu_fix.classList.add("header-fix");


    } else {
        menu_fix.classList.remove("header-fix");

    }
}
window.addEventListener("scroll", changebg);


