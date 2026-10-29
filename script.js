(() => {
  'use strict';
  const dictionaries = window.siteTranslations;
  const languageButtons = document.querySelectorAll('[data-lang]');
  const dialog = document.querySelector('#site-menu');
  const menuButton = document.querySelector('.menu-toggle');
  const closeButton = document.querySelector('.menu-close');
  const header = document.querySelector('.site-header');
  function changeLanguage(code) {
    const lang = dictionaries[code] ? code : 'en';
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    menuButton.setAttribute('aria-label', dictionaries[lang].menu);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = dictionaries[lang][el.dataset.i18n];
      if (value) el.textContent = value;
    });
    languageButtons.forEach(button => {
      button.classList.toggle('active', button.dataset.lang === lang);
      button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
    });
    const title = dictionaries[lang][document.body.dataset.titleKey];
    document.title = title + ' | ' + dictionaries[lang].pageSuffix;
    const description = document.querySelector('meta[name="description"]');
    description.content = dictionaries[lang][document.body.dataset.descriptionKey];
    try { localStorage.setItem('preferredLanguage',lang); } catch (_) {}
  }
  languageButtons.forEach(button => button.addEventListener('click', () => changeLanguage(button.dataset.lang)));
  menuButton.addEventListener('click', () => {
    dialog.showModal();
    menuButton.setAttribute('aria-expanded','true');
    closeButton.focus();
  });
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    menuButton.setAttribute('aria-expanded','false');
    menuButton.focus();
  });
  dialog.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === location.pathname.split('/').pop() || (location.pathname.endsWith('/') && a.getAttribute('href') === 'index.html')) {
      a.setAttribute('aria-current','page');
    }
  });
  const updateHeader = () => header.classList.toggle('scrolled',scrollY > 40);
  addEventListener('scroll',updateHeader,{passive:true});
  updateHeader();
  document.querySelector('#current-year').textContent = new Date().getFullYear();
  let saved;
  try { saved = localStorage.getItem('preferredLanguage'); } catch (_) {}
  changeLanguage(saved || 'en');
})();
// Remove decorative arrows throughout the website.
function removeArrows() {
  document.querySelectorAll("a span").forEach(function (span) {
    if (/^[↗↖↘↙→←↑↓\uFE0E\uFE0F\s]+$/.test(span.textContent)) {
      span.remove();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", removeArrows);
} else {
  removeArrows();
}
