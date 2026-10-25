
const helloButton = document.getElementById("helloButton");
const message = document.getElementById("message");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

helloButton.addEventListener("click", function () {
  message.textContent = "Hello! 👋 Thanks for visiting my website.";
});

const revealElements = document.querySelectorAll(
  ".project-card, .skill-tag, .about h2, .projects h2, .skills h2"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
