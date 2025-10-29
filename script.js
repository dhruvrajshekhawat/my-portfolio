Js 

// ===== Fade-in on scroll (About Section) =====
const aboutText = document.querySelector('.about-text');

window.addEventListener('scroll', () => {
  const sectionPos = aboutText.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;
  if (sectionPos < screenPos) {
    aboutText.classList.add('visible');
  }
});

// ===== Contact Form Validation =====
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('⚠️ Please fill in all fields!');
    return;
  }

  alert(`✅ Thank you, ${name}! Your message has been sent.`);
  form.reset();
});