const hamburgerBtn = document.querySelector(".hamburger-container");
const hamburgerLinks = document.querySelector(".hamburger-links")

hamburgerBtn.addEventListener("click", () => {
    hamburgerLinks.classList.toggle("hidden");
})