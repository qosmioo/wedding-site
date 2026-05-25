/**
 * Свадебный лендинг — плавное появление секций при скролле
 */

(function () {
  'use strict';

  const revealSections = document.querySelectorAll(
    '.section-padding, .site-footer, .hero'
  );

  if (
    'IntersectionObserver' in window &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    revealSections.forEach((el) => el.classList.add('reveal-section'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -32px 0px' }
    );

    revealSections.forEach((el) => observer.observe(el));
  }
})();
