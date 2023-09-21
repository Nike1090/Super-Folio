const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-set");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function toggleSummary(id) {
    const summary = document.getElementById(id);
    if (summary.style.display === "none") {
        summary.style.display = "block";
    } else {
        summary.style.display = "none";
    }
}