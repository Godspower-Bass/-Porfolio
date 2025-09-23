let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections active link
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

// scroll reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

// Initialize ScrollReveal with base settings
ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true, // animations repeat on scroll
});
// scroll reveal
const sr = ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
  reset: true,
});

sr.reveal(".home-content, .heading", { origin: "top" });
sr.reveal(".services-container, .contact form", { origin: "bottom" });
sr.reveal(".home-content h1", { origin: "left" });
sr.reveal(".home-content p, .about-content", { origin: "right" });
