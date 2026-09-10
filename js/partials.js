/**
 * Shared header & footer for all pages
 */
(function (global) {
  'use strict';

  var NAV = [
    { id: 'home', href: 'index.html', label: 'Domů' },
    { id: 'o-mne', href: 'o-mne.html', label: 'O mně' },
    { id: 'sluzby', href: 'sluzby.html', label: 'Služby' },
    { id: 'nemovitosti', href: 'nemovitosti.html', label: 'Nemovitosti' },
    { id: 'reference', href: 'reference.html', label: 'Reference' },
    { id: 'kontakt', href: 'kontakt.html', label: 'Kontakt' }
  ];

  function navLinks(activePage) {
    return NAV.map(function (item) {
      var active = item.id === activePage ? ' active' : '';
      return '<li><a href="' + item.href + '" class="nav__link' + active + '"' +
        (active ? ' aria-current="page"' : '') + '>' + item.label + '</a></li>';
    }).join('');
  }

  function header(activePage) {
    return '<header class="header" id="header">' +
      '<div class="container header__inner">' +
        '<a href="index.html" class="header__logo" aria-label="Tomáš Frydrýšek - domovská stránka">' +
          '<span class="header__logo-text">Tomáš Frydrýšek</span>' +
        '</a>' +
        '<nav class="nav" id="nav" aria-label="Hlavní navigace">' +
          '<ul class="nav__list">' + navLinks(activePage) + '</ul>' +
        '</nav>' +
        '<div class="header__actions">' +
          '<a href="tel:+420734168294" class="header__phone" aria-label="Zavolat na +420 734 168 294">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
            '<span>734 168 294</span>' +
          '</a>' +
          '<a href="odhad.html" class="btn btn--accent btn--sm header__estimate">Odhad nemovitosti zdarma</a>' +
          '<button class="header__burger" id="burger" aria-label="Otevřít menu" aria-expanded="false" aria-controls="nav">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</header>';
  }

  function footer() {
    return '<footer class="footer" id="footer">' +
      '<div class="container">' +
        '<div class="footer__grid">' +
          '<div class="footer__brand">' +
            '<a href="index.html" class="footer__logo">' +
              '<span class="footer__logo-name">Tomáš Frydrýšek</span>' +
              '<span class="footer__logo-sub">Realitní makléř · Bidli</span>' +
            '</a>' +
            '<p class="footer__desc">Realitní makléř a průvodce nemovitostmi. Osobní přístup ke každému klientovi a každé nemovitosti. Praha a okolí.</p>' +
            '<div class="footer__social">' +
              '<a href="https://www.facebook.com/Frydra" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>' +
            '</div>' +
          '</div>' +
          '<div class="footer__col">' +
            '<h3 class="footer__heading">Kontakt</h3>' +
            '<ul class="footer__links">' +
              '<li><a href="tel:+420734168294">+420 734 168 294</a></li>' +
              '<li><a href="https://wa.me/420734168294" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>' +
              '<li><a href="mailto:tomas.frydrysek@bidli.cz">tomas.frydrysek@bidli.cz</a></li>' +
              '<li>Praha a okolí</li>' +
            '</ul>' +
          '</div>' +
          '<div class="footer__col">' +
            '<h3 class="footer__heading">Stránky</h3>' +
            '<ul class="footer__links">' +
              '<li><a href="o-mne.html">O mně</a></li>' +
              '<li><a href="sluzby.html">Služby</a></li>' +
              '<li><a href="odhad.html">Odhad zdarma</a></li>' +
              '<li><a href="nemovitosti.html">Nemovitosti</a></li>' +
              '<li><a href="reference.html">Reference</a></li>' +
              '<li><a href="kontakt.html">Kontakt</a></li>' +
              '<li><a href="ochrana-osobnich-udaju.html">Ochrana osobních údajů</a></li>' +
              '<li><a href="cookies.html">Cookies</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="footer__col">' +
            '<h3 class="footer__heading">Partner</h3>' +
            '<a href="https://www.bidli.cz/" target="_blank" rel="noopener noreferrer" class="footer__partner">' +
              '<img src="images/logo-bidli-black.svg" alt="Bidli" class="footer__partner-img" width="180" height="50" loading="lazy">' +
            '</a>' +
          '</div>' +
        '</div>' +
        '<div class="footer__bottom">' +
          '<p>&copy; 2026 Tomáš Frydrýšek - Realitní makléř Bidli. Všechna práva vyhrazena.</p>' +
          '<p><button type="button" class="footer__cookie-settings" data-cookie-settings>Nastavení cookies</button></p>' +
          '<p class="footer__credit">Web vytvořil <a href="https://simondrapal.cz/" target="_blank" rel="noopener noreferrer" class="footer__credit-link">Šimon Drápal</a></p>' +
        '</div>' +
      '</div>' +
    '</footer>';
  }

  function inject(activePage) {
    var headerSlot = document.getElementById('site-header');
    var footerSlot = document.getElementById('site-footer');
    if (headerSlot) headerSlot.innerHTML = header(activePage);
    if (footerSlot) footerSlot.innerHTML = footer();
  }

  global.SitePartials = { inject: inject };
})(window);
