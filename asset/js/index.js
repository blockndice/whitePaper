// Reveal on scroll
const els = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1 });
els.forEach(el => obs.observe(el));

// Hamburger menu
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  const close = () => {
    navLinks.classList.remove('mobile-open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  };
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('mobile-open');
    isOpen ? close() : (navLinks.classList.add('mobile-open'), hamburger.classList.add('open'), hamburger.setAttribute('aria-expanded', 'true'));
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}
