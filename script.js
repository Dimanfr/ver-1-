document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('kpi')) {
          const counter = entry.target.querySelector('.counter');
          const target = parseInt(counter.dataset.target, 10);
          const prefix = counter.dataset.prefix || '';
          const suffix = counter.dataset.suffix || '';
          let current = 0;
          const duration = 2000;
          const step = target / (duration / 16);
          const update = () => {
            current += step;
            if (current >= target) {
              current = target;
            }
            counter.textContent = `${prefix}${Math.round(current)}${suffix}`;
            if (current < target) {
              requestAnimationFrame(update);
            }
          };
          requestAnimationFrame(update);
        }
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  document.querySelectorAll('.kpi').forEach(el => observer.observe(el));

  const form = document.querySelector('form[name="kontakt"]');
  form.addEventListener('submit', () => {
    alert('Vielen Dank für Ihre Anfrage!');
  });
});
