// Toggle navbar on scroll
document.addEventListener("scroll", function () {
  const navbar = document.getElementById("ftco-navbar");
  if (window.scrollY > 250) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Listen for click events on the navbar toggler button
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    const navbar = document.getElementById("ftco-navbar");

    // Toggle the class 'navbar-open' when the navbar is toggled
    navbar.classList.toggle("navbar-open");
  });

// Initialize Swiper for the hero slider
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".hero-slider", {
    simulateTouch: true, // Enable touch interactions
    loop: true, // Infinite loop
    autoplay: {
      delay: 3000, // Auto slide every 5 seconds
    },
    effect: "fade", // Optional: Adds a fade transition
  });
});





// Play video on click
document.querySelector("#video-section .video-wrapper")?.addEventListener("click", function () {
  const iframe = this.querySelector("iframe");
  const poster = this.querySelector(".video-poster");

  // Show the iframe and autoplay the video
  iframe.classList.remove("d-none");
  iframe.src += "&autoplay=1";

  // Hide the poster and play button
  poster.style.display = "none";
  this.querySelector(".play-button").style.display = "none";
});



// for hover active tabs on desktop and click on mobile
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth >= 768) {
    const tabTriggers = document.querySelectorAll('.brand-tabs .nav-link');

    tabTriggers?.forEach((tab) => {
      tab.addEventListener('mouseenter', (event) => {
        const targetId = tab.getAttribute('data-bs-target');
        const tabContent = document.querySelector(targetId);

        // Remove active classes from all tabs and panes
        document.querySelectorAll('.nav-tabs .nav-link').forEach((t) => t.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach((pane) => pane.classList.remove('show', 'active'));

        // Add active class to the hovered tab and its content
        tab.classList.add('active');
        tabContent.classList.add('show', 'active');
      });
    });
  }
});




// design steps slider
var swiper = new Swiper(".design-steps-slider", {
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});