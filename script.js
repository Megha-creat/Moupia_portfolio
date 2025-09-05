// Sticky navbar + Scroll-to-top button
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  if (scrollBtn) {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  }
});

// Barba.js page transitions (safe check)
if (window.barba && window.gsap) {
  barba.init({
    transitions: [
      {
        name: "fade",
        leave(data) {
          return gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
        },
        enter(data) {
          return gsap.from(data.next.container, { opacity: 0, duration: 0.5 });
        }
      }
    ]
  });
}

// Typewriter effect
document.addEventListener("DOMContentLoaded", () => {
  const texts = ["Dancer", "Model"];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  const changingText = document.querySelector(".changing-text");

  if (!changingText) return;

  const type = () => {
    if (count === texts.length) count = 0;

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    changingText.textContent = letter;

    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 2000); // pause before next word
    } else {
      setTimeout(type, 150); // typing speed
    }
  };

  type();
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Dark mode toggle
const toggleDark = document.getElementById("toggle-dark");
if (toggleDark) {
  toggleDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Scroll-to-top button click
const scrollBtn = document.getElementById("scrollTopBtn");
if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
