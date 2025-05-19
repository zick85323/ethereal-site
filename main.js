// Splash screen
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.classList.remove('hidden');
    }
  }, 3500); // Waits for animation to finish
});

// Floating button toggle
const settingsBtn = document.getElementById('settings-toggle');
const panel = document.getElementById('settings-panel');

if (settingsBtn && panel) {
  settingsBtn.addEventListener('click', () => {
    panel.classList.toggle('hidden');
  });
}

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
  });
}

// Slideshow logic
let slideIndex = 1;
let slideTimer;

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  // Restart timer
  clearTimeout(slideTimer);
  slideTimer = setTimeout(() => plusSlides(1), 5000); // auto move every 5s
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});

// Reveal on scroll
function revealOnScroll() {
  const elements = document.querySelectorAll('.animated-paragraph');
  const windowHeight = window.innerHeight;

  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
function revealCategoryOnScroll() {
  const catBox = document.querySelector('.category-box');
  if (!catBox) return;

  const position = catBox.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (position < screenHeight - 100) {
    catBox.classList.add('reveal');
  }
}

window.addEventListener('scroll', revealCategoryOnScroll);
window.addEventListener('load', revealCategoryOnScroll);
