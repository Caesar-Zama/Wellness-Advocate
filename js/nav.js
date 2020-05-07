const navToggleOpen = document.querySelector(".navbar-toggle-open");
const navToggleClose = document.querySelector(".navbar-toggle-close");
const offCanvas = document.querySelector(".navbar-nav-wrapper");
const navbarNav = document.querySelector(".navbar-nav");


// Navgation Event Listeners
navToggleOpen.addEventListener('click', (e) => {
    offCanvas.style.transform = `translateX(0%)`;
});

navToggleClose.addEventListener('click', (e) => {
    offCanvas.style.transform = `translateX(100%)`;
});

navbarNav.addEventListener("click", (e) => {
    if(e.target.className === "nav-link") {
        const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (vw < 992) {offCanvas.style.transform = `translateX(100%)`;}
    }
});

