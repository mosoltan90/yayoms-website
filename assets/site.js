/* Language is URL-scoped. No cookies, browser storage, requests or tracking. */
(() => {
  const switcher = document.querySelector('[data-language-switch]');
  const applyLanguage = () => {
    const english = new URLSearchParams(location.search).get('lang') === 'en';
    const language = english ? 'en' : 'ar';
    document.documentElement.lang = language;
    document.documentElement.dir = english ? 'ltr' : 'rtl';
    document.title = document.documentElement.dataset[`title${english ? 'En' : 'Ar'}`];
    const description = document.documentElement.dataset[`description${english ? 'En' : 'Ar'}`];
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[property="og:title"]').content = document.title;
    document.querySelector('meta[property="og:description"]').content = description;
    document.querySelector('meta[property="og:locale"]').content = english ? 'en_US' : 'ar_AR';
    switcher.textContent = english ? 'العربية' : 'EN';
    switcher.lang = english ? 'ar' : 'en';
    switcher.dir = english ? 'rtl' : 'ltr';
    switcher.setAttribute('aria-label', english ? 'التبديل إلى العربية' : 'Switch to English');
    document.querySelectorAll('a[data-internal]').forEach(link => {
      const target = new URL(link.getAttribute('href'), location.href);
      if (english) target.searchParams.set('lang', 'en');
      else target.searchParams.delete('lang');
      link.href = target.href;
    });
  };
  switcher.addEventListener('click', () => {
    const next = new URL(location.href);
    if (document.documentElement.lang === 'ar') next.searchParams.set('lang', 'en');
    else next.searchParams.delete('lang');
    history.replaceState(null, '', next);
    applyLanguage();
  });
  window.addEventListener('popstate', applyLanguage);
  applyLanguage();
})();
