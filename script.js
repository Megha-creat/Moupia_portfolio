// Sticky navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Barba.js page transitions
barba.init({
  transitions: [{
    name: 'fade',
    leave(data) {
      return gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
    },
    enter(data) {
      return gsap.from(data.next.container, { opacity: 0, duration: 0.5 });
    }
  }]
});
document.addEventListener("DOMContentLoaded", () => {
  const texts = ["Dancer", "Model"];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  const changingText = document.querySelector(".changing-text");

  function type() {
    if (count === texts.length) {
      count = 0;
    }
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
  }

  type();
});
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
});
