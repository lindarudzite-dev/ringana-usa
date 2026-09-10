// ---------- Graceful image fallback ----------
// If a photo hasn't been added yet (or fails to load), show a soft
// placeholder with the label instead of a broken image icon.
document.querySelectorAll('img[data-fallback]').forEach((img) => {
  const showFallback = () => {
    img.classList.add('is-fallback');
    img.alt = img.dataset.fallback;
    img.removeAttribute('src');
    img.textContent = img.dataset.fallback;
    const span = document.createElement('span');
    span.textContent = img.dataset.fallback;
    img.replaceWith(span);
    span.className = 'is-fallback';
    span.setAttribute('role', 'img');
    span.setAttribute('aria-label', img.dataset.fallback);
  };
  img.addEventListener('error', showFallback, { once: true });
  // If the browser already failed to load it before JS attached the listener
  if (img.complete && img.naturalWidth === 0) showFallback();
});

// ---------- Animated stat counters ----------
const counters = document.querySelectorAll('[data-count-to]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseFloat(el.dataset.countTo);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = Math.round(target * eased);
      el.textContent = `${prefix}${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.6 });

counters.forEach((el) => counterObserver.observe(el));

// ---------- Timeline fill ----------
const timelineFill = document.querySelector('.timeline__fill');
if (timelineFill) {
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        timelineFill.style.width = '100%';
        timelineObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });
  timelineObserver.observe(document.getElementById('timeline'));
}
