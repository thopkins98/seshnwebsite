/* ============================================================
   SESHN — script.js
   ============================================================ */

// ---- Nav: add background on scroll ----
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });


// ---- Scroll reveal (Intersection Observer) ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -32px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Hero elements animate in immediately on page load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-up').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 80 + i * 130);
  });
});


// ---- Form handling ----
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzXQwBbmQXkADXO91kPj9fZCvHMq3rhjjE1rFWFIISk-tOiZJF0WZpUwjWrhS6u7qB9/exec';

function handleForm(formId, onSuccess) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Collect multiple checked sports into a comma-separated string
    const sports = formData.getAll('activity');
    if (sports.length) data.activity = sports.join(', ');

    const btn = form.querySelector('.btn');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Sending…';

    fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(data)
    })
    .then(() => onSuccess(data, btn, originalText))
    .catch(() => {
      btn.disabled = false;
      btn.textContent = originalText;
      alert('Something went wrong — please try again.');
    });
  });
}

// Hero inline form
handleForm('hero-signup', (data, btn) => {
  btn.textContent = '✓ You\'re in!';
  btn.style.background = '#22C55E';
  gtag('event', 'hero_signup', {
    method: 'hero_form'
  });
});

// Beta section form
handleForm('beta-signup', (data) => {
  gtag('event', 'beta_signup', {
    sports: data.activity || 'none'
  });
  const formWrap = document.getElementById('beta-form-wrap');
  const successEl = document.getElementById('beta-success');
  if (formWrap && successEl) {
    formWrap.style.display = 'none';
    successEl.hidden = false;
  }
});


// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
