// Header scroll effect
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  
  // Mobile menu toggle
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  
  hamburgerBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");
    hamburgerBtn.classList.toggle("open");
  });
  
  // Close menu when clicking anywhere in the mobile menu
  mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
    hamburgerBtn.classList.remove("open");
  });
  