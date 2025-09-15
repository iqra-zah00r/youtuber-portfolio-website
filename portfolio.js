const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.getElementById('nav-overlay');

// Toggle menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active'); // animate bars
  navOverlay.classList.toggle('active');
});

// Close menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
    navOverlay.classList.remove('active');
  });
});

// Close menu when clicking overlay
navOverlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  menuToggle.classList.remove('active');
  navOverlay.classList.remove('active');
});
