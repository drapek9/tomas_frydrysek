/**
 * Tomáš Frydrýšek - Realitní makléř
 * Main JavaScript
 */

(function () {
  'use strict';

  /* ==========================================================================
     DATA
     ========================================================================== */

  const LISTINGS = [
    {
      id: 1,
      title: 'Moderní prostor 1+kk se zimní zahradou',
      price: '4 490 000 Kč',
      location: 'Praha 3, Žižkov',
      type: 'byt',
      typeLabel: 'Byt',
      disposition: '1+kk',
      area: '29 m²',
      ownership: 'Osobní vlastnictví',
      status: 'available',
      statusLabel: 'V nabídce',
      image: 'images/listing-zizkov.jpg',
      url: 'https://www.bidli.cz/reality-detail/prodej-moderniho-prostoru-1kkov23-m2-se-zimni-zahradou-praha-3-zizkov/236913',
      description: 'Prodej moderního prostoru 1+kk se zimní zahradou na Praze 3 - Žižkově. Kompaktní bydlení v oblíbené městské lokalitě.',
      detailText: 'Podle veřejné nabídky jde o prostor 1+kk o 23 m² se zimní zahradou, v kartě je uvedena plocha 29 m². Vlastnictví je osobní.',
      highlights: [
        'Dispozice 1+kk',
        'Zimní zahrada',
        'Osobní vlastnictví',
        'Praha 3 - Žižkov'
      ]
    },
    {
      id: 2,
      title: 'Pražská chalupa kousek od Prahy',
      price: '10 800 000 Kč',
      location: 'Choteč u Prahy',
      type: 'dum',
      typeLabel: 'Dům',
      disposition: 'Chalupa',
      area: '150 m²',
      landArea: '315 m²',
      ownership: 'Osobní vlastnictví',
      status: 'available',
      statusLabel: 'V nabídce',
      image: 'images/listing-chotec.jpg',
      url: 'https://www.bidli.cz/reality-detail/prazska-chalupa-kousek-od-prahy-ov-pozemek-315-m2-chotec-u-prahy/236785',
      description: 'Pražská chalupa kousek od Prahy v Chotči u Prahy. Osobní vlastnictví, pozemek 315 m².',
      detailText: 'Nemovitost spojuje bydlení mimo město s dostupností Prahy. V nabídce je uvedena plocha 150 m² a pozemek 315 m².',
      highlights: [
        'Plocha 150 m²',
        'Pozemek 315 m²',
        'Osobní vlastnictví',
        'Choteč u Prahy'
      ]
    },
    {
      id: 3,
      title: 'Novostavba rodinného domu 5+1',
      price: '16 990 000 Kč',
      location: 'Jeneč, ul. Unhošťská',
      type: 'dum',
      typeLabel: 'Rodinný dům',
      disposition: '5+1',
      area: '160 m²',
      landArea: '591 m²',
      ownership: 'Osobní vlastnictví',
      status: 'available',
      statusLabel: 'V nabídce',
      image: 'images/listing-jenec.jpg',
      url: 'https://www.bidli.cz/reality-detail/prodej-novostavby-rd-51terasagaraz-160m2-pozemek-591m2-jenec-ul-unhostska/228812',
      description: 'Prodej novostavby rodinného domu 5+1 s terasou a garáží v Jenči. Užitná plocha 160 m², pozemek 591 m².',
      detailText: 'Novostavba v Jenči, ulice Unhošťská. Dispozice 5+1, terasa a garáž. Vhodné pro rodinné bydlení v dosahu Prahy.',
      highlights: [
        'Novostavba 5+1',
        'Terasa a garáž',
        'Pozemek 591 m²',
        'Jeneč u Prahy'
      ]
    }
  ];

  const DEALS = [
    {
      id: 1,
      location: 'Praha 6, Dejvice',
      type: 'Pronájem bytu 2+1, 76 m²',
      typeLabel: 'Byt',
      area: '76 m²',
      result: 'Realizováno',
      category: ['prodano', 'byty'],
      image: 'images/realized-dejvice.jpg',
      description: 'Pronájem stylového zařízeného bytu 2+1 o 76 m², Eliášova, Praha 6 u metra Hradčanská.',
      detailText: 'Realizovaná zakázka z veřejného profilu. Cena ani další parametry nad rámec názvu a lokality nejsou na webu uvedeny.',
      highlights: [
        'Dispozice 2+1',
        '76 m²',
        'Praha 6 - Dejvice',
        'U metra Hradčanská'
      ]
    },
    {
      id: 2,
      location: 'Velké Přílepy',
      type: 'Pronájem domu 4+kk',
      typeLabel: 'Dům',
      result: 'Realizováno',
      category: ['prodano', 'domy'],
      image: 'images/realized-prilepy.jpg',
      description: 'Pronájem domu 4+kk ve Velkých Přílepech v okrese Praha-západ.',
      detailText: 'Realizovaná zakázka z veřejného profilu. Konkrétní cena ani výsledek nad rámec označení realizace nejsou zveřejněny.',
      highlights: [
        'Dispozice 4+kk',
        'Velké Přílepy',
        'Okres Praha-západ'
      ]
    },
    {
      id: 3,
      location: 'Praha 7, Bubeneč',
      type: 'Pronájem bytu 3+kk, 77 m²',
      typeLabel: 'Byt',
      area: '77 m²',
      result: 'Realizováno',
      category: ['prodano', 'byty'],
      image: 'images/realized-bubenec.jpg',
      description: 'Pronájem bytu 3+kk o 77 m² po kompletní rekonstrukci, Malířská ulice u Stromovky, Praha 7.',
      detailText: 'Realizovaná zakázka z veřejného profilu. Uvedené údaje vycházejí z názvu nabídky a lokality.',
      highlights: [
        'Dispozice 3+kk',
        '77 m²',
        'Po rekonstrukci',
        'U Stromovky'
      ]
    }
  ];

  const VIDEOS = [
    { title: 'PLACEHOLDER - video k doplnění', poster: 'images/placeholder-social-video.svg', videoSrc: '' },
    { title: 'PLACEHOLDER - video k doplnění', poster: 'images/placeholder-social-video.svg', videoSrc: '' },
    { title: 'PLACEHOLDER - video k doplnění', poster: 'images/placeholder-social-video.svg', videoSrc: '' }
  ];

  const TESTIMONIALS = [
    {
      name: 'Jméno klienta',
      role: 'Typ zakázky, lokalita',
      quote: 'Sem doplníme reálnou referenci.',
      rating: 5
    },
    {
      name: 'Jméno klienta',
      role: 'Typ zakázky, lokalita',
      quote: 'Sem doplníme reálnou referenci.',
      rating: 5
    },
    {
      name: 'Jméno klienta',
      role: 'Typ zakázky, lokalita',
      quote: 'Sem doplníme reálnou referenci.',
      rating: 5
    },
    {
      name: 'Jméno klienta',
      role: 'Typ zakázky, lokalita',
      quote: 'Sem doplníme reálnou referenci.',
      rating: 5
    },
    {
      name: 'Jméno klienta',
      role: 'Typ zakázky, lokalita',
      quote: 'Sem doplníme reálnou referenci.',
      rating: 5
    },
    {
      name: 'Jméno klienta',
      role: 'Typ zakázky, lokalita',
      quote: 'Sem doplníme reálnou referenci.',
      rating: 5
    },
    {
      name: 'Jméno klienta',
      role: 'Typ zakázky, lokalita',
      quote: 'Sem doplníme reálnou referenci.',
      rating: 5
    },
    {
      name: 'Jméno klienta',
      role: 'Typ zakázky, lokalita',
      quote: 'Sem doplníme reálnou referenci.',
      rating: 5
    },
    {
      name: 'Jméno klienta',
      role: 'Typ zakázky, lokalita',
      quote: 'Sem doplníme reálnou referenci.',
      rating: 5
    }
  ];

  /* ==========================================================================
     DOM REFERENCES
     ========================================================================== */

  let header;
  let burger;
  let nav;
  const toast = document.getElementById('toast');
  const estimateForm = document.getElementById('estimate-form');
  const currentPage = document.body.dataset.page || 'home';
  const contactUrl = 'kontakt.html';
  const estimateUrl = 'odhad.html';

  function cacheDomRefs() {
    header = document.getElementById('header');
    burger = document.getElementById('burger');
    nav = document.getElementById('nav');
  }

  /* ==========================================================================
     HEADER & NAVIGATION
     ========================================================================== */

  function initHeader() {
    if (!header) return;
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    updateActiveNavLink();
  }

  function onScroll() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 60);
  }

  function initMobileMenu() {
    if (!burger || !nav) return;

    burger.addEventListener('click', toggleMenu);

    nav.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function (e) {
        // U aktuální stránky nechceme reload, ale plynule scroll na začátek.
        // Porovnání děláme přes URL, aby fungovalo i při různém hostování/paths.
        var href = link.getAttribute('href') || '';
        var clickedUrl;
        try {
          clickedUrl = new URL(href, window.location.href);
        } catch (err) {
          clickedUrl = null;
        }

        var samePage = clickedUrl && clickedUrl.pathname === window.location.pathname;

        if (samePage) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        closeMenu();
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  function toggleMenu() {
    var isOpen = nav.classList.toggle('open');
    burger.classList.toggle('active', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    nav.classList.remove('open');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function updateActiveNavLink() {
    if (!nav) return;
    var path = window.location.pathname.split('/').pop() || 'index.html';
    if (path === '') path = 'index.html';

    nav.querySelectorAll('.nav__link').forEach(function (link) {
      var href = link.getAttribute('href');
      var isActive = href === path || (path === 'index.html' && href === 'index.html');
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function initSmoothScroll() {
    if (!header) return;

    document.querySelectorAll('a[href*="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        var hash = targetId.indexOf('#') !== -1 ? targetId.substring(targetId.indexOf('#')) : targetId;
        if (hash === '#') return;

        var target = document.querySelector(hash);
        if (!target) return;

        e.preventDefault();
        var offset = header ? header.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* ==========================================================================
     SCROLL REVEAL
     ========================================================================== */

  function initScrollReveal() {
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ==========================================================================
     ANIMATED COUNTERS
     ========================================================================== */

  function initCounters() {
    var counters = document.querySelectorAll('.stats__number');
    var animated = false;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !animated) {
            animated = true;
            counters.forEach(animateCounter);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    var statsSection = document.getElementById('statistiky');
    if (statsSection) observer.observe(statsSection);
  }

  function animateCounter(el) {
    if (el.dataset.target == null || el.dataset.target === '') return;
    var target = parseInt(el.dataset.target, 10);
    if (isNaN(target)) return;
    var suffix = el.dataset.suffix || '';
    var duration = 2000;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(eased * target);

      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  /* ==========================================================================
     LISTINGS
     ========================================================================== */

  function initPropertyViews() {
    var tabs = document.querySelectorAll('[data-property-view]');
    var panelNabidka = document.getElementById('panel-nabidka');
    var panelProdano = document.getElementById('panel-prodano');
    if (!tabs.length || !panelNabidka || !panelProdano) return;

    function applyView(view) {
      var isNabidka = view !== 'prodano';

      tabs.forEach(function (tab) {
        var active = tab.dataset.propertyView === (isNabidka ? 'nabidka' : 'prodano');
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
      });

      panelNabidka.classList.toggle('property-panel--active', isNabidka);
      panelProdano.classList.toggle('property-panel--active', !isNabidka);
      panelNabidka.hidden = !isNabidka;
      panelProdano.hidden = isNabidka;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var view = tab.dataset.propertyView;
        applyView(view);
        if (history.replaceState) {
          history.replaceState(null, '', '#' + view);
        }
      });
    });

    applyView((location.hash || '').replace('#', ''));
  }

  function propertyDetailUrl(item, sold) {
    var url = 'nemovitost.html?id=' + item.id;
    if (sold) url += '&prodano=1';
    return url;
  }

  function findProperty(id, sold) {
    var list = sold ? DEALS : LISTINGS;
    return list.find(function (item) { return item.id === id; }) || null;
  }

  function initListings(limit) {
    var grid = document.getElementById('listings-grid');
    if (!grid) return;

    var loading = document.getElementById('listings-loading');
    var filters = document.querySelectorAll('.listings__filters .filter-btn');
    var previewLimit = limit || parseInt(grid.dataset.limit, 10) || 0;

    if (loading) loading.classList.add('active');

    setTimeout(function () {
      var items = previewLimit > 0 ? LISTINGS.slice(0, previewLimit) : LISTINGS;
      renderListings(items);
      if (loading) loading.classList.remove('active');
    }, previewLimit > 0 ? 300 : 800);

    if (!filters.length) return;

    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filters.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        var filter = btn.dataset.filter;
        var filtered = filter === 'all'
          ? LISTINGS
          : LISTINGS.filter(function (item) { return item.type === filter; });

        renderListings(filtered);
      });
    });
  }

  function renderListings(items) {
    var grid = document.getElementById('listings-grid');
    if (!grid) return;
    grid.innerHTML = '';

    items.forEach(function (item, index) {
      var card = createPropertyCard(item);
      card.style.transitionDelay = index * 0.08 + 's';
      grid.appendChild(card);
    });

  }

  function createPropertyCard(item) {
    var badgeClass = item.status === 'reserved' ? 'property-card__badge--reserved' : '';

    var card = document.createElement('a');
    card.className = 'property-card reveal visible';
    card.href = propertyDetailUrl(item, false);
    card.setAttribute('aria-label', item.title + ', ' + item.price);

    card.innerHTML =
      '<div class="property-card__image-wrap">' +
        '<img class="property-card__image" src="' + item.image + '" alt="' + item.title + '" loading="lazy" width="600" height="450">' +
        '<span class="property-card__badge ' + badgeClass + '">' + item.statusLabel + '</span>' +
      '</div>' +
      '<div class="property-card__body">' +
        '<p class="property-card__price">' + item.price + '</p>' +
        '<p class="property-card__location">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
          item.location +
        '</p>' +
        '<div class="property-card__meta">' +
          '<span>' + item.disposition + '</span>' +
          '<span>' + item.area + '</span>' +
        '</div>' +
      '</div>';

    return card;
  }

  /* ==========================================================================
     DEALS
     ========================================================================== */

  function initDeals(options) {
    options = options || {};
    var grid = document.getElementById('deals-grid');
    if (!grid) return;

    var previewLimit = options.limit || parseInt(grid.dataset.limit, 10) || 0;
    var source = options.soldOnly
      ? DEALS.filter(function (deal) { return deal.category.indexOf('prodano') !== -1; })
      : DEALS;
    var items = previewLimit > 0 ? source.slice(0, previewLimit) : source;
    renderDeals(items);

    var filters = document.querySelectorAll('.deals__filters .filter-btn');
    if (!filters.length) return;

    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filters.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var filter = btn.dataset.dealFilter;
        if (filter === 'all') {
          renderDeals(DEALS);
        } else {
          var filtered = DEALS.filter(function (deal) {
            return deal.category.indexOf(filter) !== -1;
          });
          renderDeals(filtered);
        }
      });
    });
  }

  function renderDeals(items) {
    var grid = document.getElementById('deals-grid');
    if (!grid) return;
    grid.innerHTML = '';

    items.forEach(function (item, index) {
      // "Realizováno" nesmí být rozkliknutelné (jen vizuální karta s hoverem).
      // Používáme div místo odkazu, aby se neotevíral detail a nezobrazoval se kurzor pointer.
      var card = document.createElement('div');
      card.className = 'deal-card deal-card--sold reveal visible';
      card.setAttribute('aria-label', item.location + ' - ' + item.type + ', ' + item.result);
      card.style.transitionDelay = index * 0.06 + 's';
      card.tabIndex = -1;

      card.innerHTML =
        '<img class="deal-card__image" src="' + item.image + '" alt="' + item.location + ' - ' + item.type + '" loading="lazy" width="500" height="650">' +
        '<div class="deal-card__overlay">' +
          '<span class="deal-card__result">' + item.result + '</span>' +
          '<h3 class="deal-card__location">' + item.location + '</h3>' +
          '<p class="deal-card__type">' + item.type + '</p>' +
        '</div>';

      grid.appendChild(card);
    });
  }

  /* ==========================================================================
     PROPERTY DETAIL PAGE
     ========================================================================== */

  function propertyDetailSpec(label, value) {
    return '<div class="property-detail__spec">' +
      '<p class="property-detail__spec-label">' + label + '</p>' +
      '<p class="property-detail__spec-value">' + value + '</p>' +
    '</div>';
  }

  function buildPropertySpecs(item, sold) {
    var rows = [];

    if (sold) {
      if (item.typeLabel) rows.push(['Typ nemovitosti', item.typeLabel]);
      if (item.type) rows.push(['Dispozice / typ', item.type]);
      if (item.area) rows.push(['Užitná plocha', item.area]);
      if (item.landArea) rows.push(['Pozemek', item.landArea]);
      rows.push(['Výsledek', item.result]);
      if (item.location) rows.push(['Lokalita', item.location]);
    } else {
      if (item.typeLabel) rows.push(['Typ nemovitosti', item.typeLabel]);
      rows.push(['Dispozice', item.disposition]);
      rows.push(['Užitná plocha', item.area]);
      if (item.landArea) rows.push(['Pozemek', item.landArea]);
      if (item.condition) rows.push(['Stav', item.condition]);
      if (item.building) rows.push(['Konstrukce', item.building]);
      if (item.ownership) rows.push(['Vlastnictví', item.ownership]);
      rows.push(['Stav nabídky', item.statusLabel]);
    }

    return rows.map(function (row) {
      return propertyDetailSpec(row[0], row[1]);
    }).join('');
  }

  function renderPropertyHighlights(item) {
    var wrap = document.getElementById('property-highlights');
    var list = document.getElementById('property-highlights-list');
    if (!wrap || !list || !item.highlights || !item.highlights.length) {
      if (wrap) wrap.hidden = true;
      return;
    }

    list.innerHTML = item.highlights.map(function (text) {
      return '<li>' + text + '</li>';
    }).join('');
    wrap.hidden = false;
  }

  function initPropertyDetail() {
    var content = document.getElementById('property-detail-content');
    var empty = document.getElementById('property-detail-empty');
    if (!content || !empty) return;

    var params = new URLSearchParams(window.location.search);
    var id = parseInt(params.get('id'), 10);
    var sold = params.get('prodano') === '1';
    var item = findProperty(id, sold);

    if (!item) {
      content.hidden = true;
      empty.hidden = false;
      document.title = 'Nemovitost nenalezena | Tomáš Frydrýšek';
      return;
    }

    var image = document.getElementById('property-image');
    var status = document.getElementById('property-status');
    var location = document.getElementById('property-location');
    var title = document.getElementById('property-title');
    var price = document.getElementById('property-price');
    var specs = document.getElementById('property-specs');
    var desc = document.getElementById('property-desc');
    var detailText = document.getElementById('property-detail-text');
    var hvLink = document.getElementById('property-hv-link');
    var ctaPrimary = document.getElementById('property-cta-primary');
    var backLink = document.getElementById('property-back');

    if (sold) {
      var pageTitle = item.location + ' - ' + item.type;
      document.title = pageTitle + ' | Tomáš Frydrýšek';
      if (image) {
        image.src = item.image;
        image.alt = pageTitle;
      }
      if (status) status.textContent = item.result;
      if (location) location.textContent = item.location;
      if (title) title.textContent = pageTitle;
      if (price) price.textContent = item.result;
      if (specs) specs.innerHTML = buildPropertySpecs(item, true);
      if (desc) desc.textContent = item.description;
      if (detailText) {
        if (item.detailText) {
          detailText.textContent = item.detailText;
          detailText.hidden = false;
        } else {
          detailText.hidden = true;
        }
      }
      renderPropertyHighlights(item);
      if (ctaPrimary) {
        ctaPrimary.href = contactUrl;
        ctaPrimary.textContent = 'Chci prodat podobně';
      }
    } else {
      document.title = item.title + ' | Tomáš Frydrýšek';
      if (image) {
        image.src = item.image;
        image.alt = item.title;
      }
      if (status) status.textContent = item.statusLabel;
      if (location) location.textContent = item.location;
      if (title) title.textContent = item.title;
      if (price) price.textContent = item.price;
      if (specs) specs.innerHTML = buildPropertySpecs(item, false);
      if (desc) desc.textContent = item.description;
      if (detailText) {
        if (item.detailText) {
          detailText.textContent = item.detailText;
          detailText.hidden = false;
        } else {
          detailText.hidden = true;
        }
      }
      renderPropertyHighlights(item);
      if (ctaPrimary) {
        ctaPrimary.href = contactUrl;
        ctaPrimary.textContent = 'Mám zájem - kontaktujte mě';
      }
    }

    if (hvLink) {
      if (item.url) {
        hvLink.href = item.url;
        hvLink.hidden = false;
      } else {
        hvLink.hidden = true;
      }
    }

    if (backLink) backLink.href = 'nemovitosti.html';

    empty.hidden = true;
    content.hidden = false;
  }

  /* ==========================================================================
     CAROUSEL
     ========================================================================== */

  function initCarousels() {
    if (document.getElementById('testimonials-track')) {
      initTestimonialsCarousel();
    }
  }

  function initSocialVideos() {
    var row = document.getElementById('social-videos-row');
    if (!row) return;

    row.innerHTML = '';
    VIDEOS.forEach(function (video) {
      var item = document.createElement('div');
      item.className = 'social-video';

      if (video.videoSrc) {
        item.innerHTML =
          '<video controls playsinline preload="metadata" src="' + video.videoSrc + '" title="' + video.title + '"></video>';
      } else {
        var poster = video.poster ? ' style="background-image:url(' + video.poster + ')"' : '';
        item.innerHTML =
          '<div class="social-video__placeholder" role="img" aria-label="' + video.title + '"' + poster + '>' +
            '<span class="social-video__play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></span>' +
          '</div>';
      }

      row.appendChild(item);
    });

    initSocialVideosCarousel();
  }

  function initSocialVideosCarousel() {
    var viewport = document.getElementById('social-videos-viewport');
    var prevBtn = document.getElementById('social-v-prev');
    var nextBtn = document.getElementById('social-v-next');
    if (!viewport) return;

    var row = viewport.querySelector('.social-videos-row');
    if (!row) return;

    function getItems() {
      return Array.prototype.slice.call(row.querySelectorAll('.social-video'));
    }

    function syncEndPadding() {
      var items = getItems();
      if (!items.length) {
        row.style.removeProperty('padding-right');
        return;
      }
      var last = items[items.length - 1];
      var pad = Math.max(0, viewport.clientWidth - last.offsetWidth);
      row.style.paddingRight = pad + 'px';
    }

    function maxScrollLeft() {
      return Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    }

    function lastFullyVisibleIndex(scrollLeft) {
      var items = getItems();
      var vw = viewport.clientWidth;
      var eps = 2;
      var last = -1;

      for (var i = 0; i < items.length; i++) {
        var relLeft = items[i].offsetLeft - scrollLeft;
        var relRight = relLeft + items[i].offsetWidth;
        if (relLeft < -eps) continue;
        if (relRight <= vw + eps) last = i;
        else break;
      }

      return last;
    }

    function getPageScrollTargets() {
      var items = getItems();
      var maxSL = maxScrollLeft();
      if (!items.length) return [0];
      if (maxSL <= 0) return [0];

      var targets = [0];
      var scrollLeft = 0;
      var eps = 6;

      while (scrollLeft < maxSL - eps) {
        var last = lastFullyVisibleIndex(scrollLeft);

        if (last < 0) {
          if (maxSL > scrollLeft + eps && targets[targets.length - 1] !== maxSL) {
            targets.push(maxSL);
          }
          break;
        }

        var nextIdx = last + 1;
        if (nextIdx >= items.length) break;

        if (nextIdx >= items.length - 1) {
          if (targets[targets.length - 1] !== maxSL) targets.push(maxSL);
          break;
        }

        var nextLeft = items[nextIdx].offsetLeft;
        if (nextLeft <= scrollLeft + eps) break;

        targets.push(nextLeft);
        scrollLeft = nextLeft;
      }

      if (targets[targets.length - 1] !== maxSL) {
        targets.push(maxSL);
      }

      return targets;
    }

    function anchorPage() {
      var targets = getPageScrollTargets();
      var sl = viewport.scrollLeft;
      var best = 0;
      var bestDist = Infinity;

      for (var i = 0; i < targets.length; i++) {
        var dist = Math.abs(sl - targets[i]);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      }

      return best;
    }

    function scrollToPage(page) {
      var targets = getPageScrollTargets();
      if (!targets.length) return;
      var left = Math.round(targets[Math.min(targets.length - 1, Math.max(0, page))]);
      viewport.scrollTo({ left: left, behavior: 'auto' });
      updateNavState();
    }

    function isAtStart() {
      return viewport.scrollLeft <= 6;
    }

    function isAtEnd() {
      var eps = 6;
      var targets = getPageScrollTargets();
      if (viewport.scrollWidth <= viewport.clientWidth + eps) return true;
      if (targets.length <= 1) return true;
      return viewport.scrollLeft >= targets[targets.length - 1] - eps;
    }

    function updateNavState() {
      if (prevBtn) prevBtn.disabled = isAtStart();
      if (nextBtn) nextBtn.disabled = isAtEnd();
    }

    function go(delta) {
      if (delta < 0 && isAtStart()) return;
      if (delta > 0 && isAtEnd()) return;
      var targets = getPageScrollTargets();
      if (!targets.length) return;
      var page = anchorPage();
      scrollToPage(Math.min(targets.length - 1, Math.max(0, page + delta)));
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { go(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { go(1); });

    function snapToNearestPage() {
      var targets = getPageScrollTargets();
      var page = anchorPage();
      var target = targets[page];
      if (target == null) return;
      if (Math.abs(viewport.scrollLeft - target) > 2) {
        viewport.scrollTo({ left: Math.round(target), behavior: 'auto' });
      }
      updateNavState();
    }

    viewport.addEventListener('scroll', updateNavState, { passive: true });
    viewport.addEventListener('scrollend', snapToNearestPage);

    if (typeof ResizeObserver !== 'undefined') {
      var ro = new ResizeObserver(function () {
        syncEndPadding();
        scrollToPage(anchorPage());
      });
      ro.observe(viewport);
    } else {
      window.addEventListener('resize', function () {
        syncEndPadding();
        scrollToPage(anchorPage());
      });
    }

    viewport.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
    });

    getItems().forEach(function (item) {
      var video = item.querySelector('video');
      if (video) {
        video.addEventListener('loadedmetadata', function () {
          syncEndPadding();
          scrollToPage(anchorPage());
        });
      }
    });

    syncEndPadding();
    updateNavState();
  }

  function getTestimonialsVisibleCount() {
    return window.matchMedia('(min-width: 768px)').matches ? 3 : 1;
  }

  function initTestimonialsCarousel() {
    var track = document.getElementById('testimonials-track');
    var dotsContainer = document.getElementById('testimonials-dots');
    var prevBtn = document.querySelector('[data-carousel-prev="testimonials"]');
    var nextBtn = document.querySelector('[data-carousel-next="testimonials"]');
    var carousel = document.getElementById('testimonials-carousel');
    if (!track) return;

    var items = TESTIMONIALS;
    if (!items.length) {
      if (carousel) carousel.hidden = true;
      return;
    }
    var visible = getTestimonialsVisibleCount();
    var current = 0;
    var isTransitioning = false;
    var autoplayTimer = null;
    var resizeTimer = null;

    function buildSlidesData() {
      var slides = [];
      var i;
      var n = items.length;

      function wrap(index) {
        return items[((index % n) + n) % n];
      }

      for (i = n - visible; i < n; i++) {
        slides.push(wrap(i));
      }
      items.forEach(function (item) {
        slides.push(item);
      });
      for (i = 0; i < visible; i++) {
        slides.push(wrap(i));
      }
      return slides;
    }

    function renderTrack() {
      visible = getTestimonialsVisibleCount();
      track.innerHTML = '';
      track.style.transition = 'none';

      buildSlidesData().forEach(function (item) {
        track.appendChild(renderTestimonialSlide(item));
      });

      current = visible;
      updateSlideWidths();
      applyTransform(false);
      buildDots();
    }

    function updateSlideWidths() {
      var pct = 100 / visible;
      track.querySelectorAll('.testimonial-slide').forEach(function (slide) {
        slide.style.flex = '0 0 ' + pct + '%';
      });
    }

    function applyTransform(animate) {
      track.style.transition = animate
        ? 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)'
        : 'none';
      track.style.transform = 'translateX(-' + (current * (100 / visible)) + '%)';
    }

    function getLogicalIndex() {
      var idx = current - visible;
      return ((idx % items.length) + items.length) % items.length;
    }

    function updateDots() {
      if (!dotsContainer) return;
      var logical = getLogicalIndex();
      dotsContainer.querySelectorAll('.carousel__dot').forEach(function (dot, i) {
        dot.classList.toggle('active', i === logical);
      });
    }

    function buildDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      items.forEach(function (_, i) {
        var dot = document.createElement('button');
        dot.className = 'carousel__dot' + (i === getLogicalIndex() ? ' active' : '');
        dot.setAttribute('aria-label', 'Reference ' + (i + 1));
        dot.addEventListener('click', function () {
          goTo(visible + i, true);
          restartAutoplay();
        });
        dotsContainer.appendChild(dot);
      });
    }

    function handleLoopReset() {
      if (current >= items.length + visible) {
        current = visible;
        applyTransform(false);
      } else if (current < visible) {
        current = items.length + visible - 1;
        applyTransform(false);
      }
      updateDots();
    }

    function goTo(index, animate) {
      if (isTransitioning && animate) return;

      current = index;
      applyTransform(animate);
      updateDots();

      if (!animate) return;

      isTransitioning = true;

      function onEnd(e) {
        if (e.propertyName !== 'transform') return;
        track.removeEventListener('transitionend', onEnd);
        isTransitioning = false;
        handleLoopReset();
      }

      track.addEventListener('transitionend', onEnd);
    }

    function next() {
      goTo(current + 1, true);
    }

    function prev() {
      goTo(current - 1, true);
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(next, 6000);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    function restartAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        prev();
        restartAutoplay();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        next();
        restartAutoplay();
      });
    }

    var touchStartX = 0;
    track.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', function (e) {
      var diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
        restartAutoplay();
      }
    }, { passive: true });

    if (carousel) {
      carousel.addEventListener('mouseenter', stopAutoplay);
      carousel.addEventListener('mouseleave', startAutoplay);
    }

    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        var newVisible = getTestimonialsVisibleCount();
        if (newVisible !== visible) {
          renderTrack();
        } else {
          updateSlideWidths();
          applyTransform(false);
        }
      }, 200);
    });

    renderTrack();
    startAutoplay();
  }

  function initCarousel(name, items, renderFn) {
    var track = document.getElementById(name + '-track');
    var dotsContainer = document.getElementById(name + '-dots');
    var prevBtn = document.querySelector('[data-carousel-prev="' + name + '"]');
    var nextBtn = document.querySelector('[data-carousel-next="' + name + '"]');

    if (!track) return;

    track.innerHTML = '';
    if (dotsContainer) dotsContainer.innerHTML = '';

    items.forEach(function (item, i) {
      track.appendChild(renderFn(item, i));
      if (dotsContainer) {
        var dot = document.createElement('button');
        dot.className = 'carousel__dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Slide ' + (i + 1));
        dot.dataset.index = i;
        dotsContainer.appendChild(dot);
      }
    });

    var current = 0;
    var total = items.length;

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = 'translateX(-' + current * 100 + '%)';

      if (dotsContainer) {
        dotsContainer.querySelectorAll('.carousel__dot').forEach(function (dot, i) {
          dot.classList.toggle('active', i === current);
        });
      }
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });

    if (dotsContainer) {
      dotsContainer.querySelectorAll('.carousel__dot').forEach(function (dot) {
        dot.addEventListener('click', function () {
          goTo(parseInt(dot.dataset.index, 10));
        });
      });
    }

    var touchStartX = 0;
    track.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', function (e) {
      var diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        goTo(diff > 0 ? current + 1 : current - 1);
      }
    }, { passive: true });
  }

  function renderVideoSlide(video) {
    var slide = document.createElement('div');
    slide.className = 'video-slide';

    if (video.embedUrl) {
      slide.innerHTML =
        '<div class="video-slide__wrap">' +
          '<iframe src="' + video.embedUrl + '" title="' + video.title + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>' +
        '</div>';
    } else {
      slide.innerHTML =
        '<div class="video-slide__wrap">' +
          '<div class="video-slide__placeholder" style="background: url(' + video.thumbnail + ') center/cover no-repeat;">' +
            '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>' +
            '<span class="video-slide__label">' + video.platform + ': ' + video.title + '</span>' +
          '</div>' +
        '</div>';
    }

    return slide;
  }

  function buildTestimonialCardMarkup(item) {
    var stars = '';
    var i;

    for (i = 0; i < item.rating; i++) {
      stars += '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
    }

    return (
      '<div class="testimonial-card__stars" aria-label="Hodnocení ' + item.rating + ' z 5">' + stars + '</div>' +
      '<blockquote class="testimonial-card__quote">„' + item.quote + '"</blockquote>' +
      '<p class="testimonial-card__author">' + item.name + '</p>' +
      '<p class="testimonial-card__role">' + item.role + '</p>'
    );
  }

  function renderTestimonialSlide(item) {
    var slide = document.createElement('div');
    slide.className = 'testimonial-slide';
    slide.innerHTML = '<div class="testimonial-card">' + buildTestimonialCardMarkup(item) + '</div>';
    return slide;
  }

  function initTestimonialsGrid() {
    var grid = document.getElementById('testimonials-grid');
    var item;
    var card;
    var i;

    if (!grid) return;

    grid.innerHTML = '';

    for (i = 0; i < TESTIMONIALS.length; i++) {
      item = TESTIMONIALS[i];
      card = document.createElement('article');
      card.className = 'testimonial-card';
      card.innerHTML = buildTestimonialCardMarkup(item);
      grid.appendChild(card);
    }
  }

  function initTestimonialsPreview() {
    var container = document.getElementById('about-testimonials-preview');
    var count;
    var preview;
    var item;
    var card;
    var i;

    if (!container) return;

    if (!TESTIMONIALS.length) {
      container.innerHTML = '';
      return;
    }

    count = window.matchMedia('(min-width: 768px)').matches ? 3 : 1;
    preview = TESTIMONIALS.slice(0, count);
    container.innerHTML = '';

    for (i = 0; i < preview.length; i++) {
      item = preview[i];
      card = document.createElement('article');
      card.className = 'testimonial-card';
      card.innerHTML = buildTestimonialCardMarkup(item);
      container.appendChild(card);
    }
  }

  /* ==========================================================================
     FAQ ACCORDION
     ========================================================================== */

  function initFAQ() {
    var items = document.querySelectorAll('.faq__item');

    items.forEach(function (item) {
      var question = item.querySelector('.faq__question');
      var answer = item.querySelector('.faq__answer');

      question.addEventListener('click', function () {
        var isActive = item.classList.contains('active');

        items.forEach(function (other) {
          other.classList.remove('active');
          other.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq__answer').hidden = true;
        });

        if (!isActive) {
          item.classList.add('active');
          question.setAttribute('aria-expanded', 'true');
          answer.hidden = false;
        }
      });
    });
  }

  /* ==========================================================================
     FORM
     ========================================================================== */

  function initEstimateWizard() {
    var formRoot = document.getElementById('estimate-wizard');
    if (!formRoot) return;

    var steps = Array.prototype.slice.call(formRoot.querySelectorAll('.estimate-wizard__step'));
    var navItems = Array.prototype.slice.call(formRoot.querySelectorAll('.estimate-wizard__nav-item'));
    var step = 0;

    var data = {
      type: '',
      city: '',
      street: '',
      ownerRole: '',
      disposition: '',
      area: '',
      ownership: '',
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false
    };

    function setStep(i) {
      step = Math.max(0, Math.min(i, steps.length - 1));
      steps.forEach(function (s, idx) {
        s.classList.toggle('is-active', idx === step);
      });
      navItems.forEach(function (item, idx) {
        item.classList.toggle('is-active', idx === step);
        item.classList.toggle('is-done', idx < step);
      });
      var progressBar = document.getElementById('estimate-progress-bar');
      if (progressBar) {
        progressBar.style.width = ((step + 1) / steps.length * 100) + '%';
      }
      var feedback = document.getElementById('estimate-feedback');
      if (feedback) {
        feedback.innerHTML = step === steps.length - 1
          ? '<strong>Téměř hotovo.</strong> Zkontrolujte údaje a odešlete žádost o odhad.'
          : 'Krok <strong>' + (step + 1) + '</strong> ze ' + steps.length;
      }
    }

    formRoot.querySelectorAll('[data-estimate-choice]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        formRoot.querySelectorAll('[data-estimate-choice]').forEach(function (b) {
          b.classList.remove('is-selected');
        });
        btn.classList.add('is-selected');
        data.type = btn.getAttribute('data-estimate-choice') || '';
        setTimeout(function () { setStep(1); }, 280);
      });
    });

    var next1 = document.getElementById('estimate-next-1');
    if (next1) {
      next1.addEventListener('click', function () {
        var cityInp = document.getElementById('estimate-city');
        var streetInp = document.getElementById('estimate-street');
        data.city = cityInp && cityInp.value.trim() || '';
        data.street = streetInp && streetInp.value.trim() || '';
        if (cityInp) cityInp.classList.toggle('error', data.city.length < 2);
        if (streetInp) streetInp.classList.toggle('error', data.street.length < 2);
        if (data.city.length < 2) {
          if (cityInp) cityInp.focus();
          return;
        }
        if (data.street.length < 2) {
          if (streetInp) streetInp.focus();
          return;
        }
        setStep(2);
      });
    }

    var nextOwner = document.getElementById('estimate-next-owner');
    if (nextOwner) {
      nextOwner.addEventListener('click', function () {
        var sel = formRoot.querySelector('input[name="estimate-owner-role"]:checked');
        data.ownerRole = sel && sel.value || '';
        if (!data.ownerRole) return;
        setStep(3);
      });
    }

    var next2 = document.getElementById('estimate-next-2');
    if (next2) {
      next2.addEventListener('click', function () {
        var dispositionEl = document.getElementById('estimate-disposition');
        var areaEl = document.getElementById('estimate-area');
        var ownershipSel = formRoot.querySelector('input[name="estimate-ownership"]:checked');

        data.disposition = dispositionEl && dispositionEl.value || '';
        data.area = areaEl && areaEl.value.trim() || '';
        data.ownership = ownershipSel && ownershipSel.value || '';

        if (!data.disposition) {
          if (dispositionEl) dispositionEl.focus();
          return;
        }
        var areaNum = Number(data.area);
        if (!data.area || isNaN(areaNum) || areaNum < 1) {
          if (areaEl) areaEl.focus();
          return;
        }
        if (!data.ownership) return;
        setStep(4);
      });
    }

    formRoot.querySelectorAll('.estimate-back').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setStep(step - 1);
      });
    });

    var submitBtn = document.getElementById('estimate-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        data.name = document.getElementById('estimate-name') && document.getElementById('estimate-name').value.trim() || '';
        data.email = document.getElementById('estimate-email') && document.getElementById('estimate-email').value.trim() || '';
        data.phone = document.getElementById('estimate-phone') && document.getElementById('estimate-phone').value.trim() || '';
        data.message = document.getElementById('estimate-message') && document.getElementById('estimate-message').value.trim() || '';
        data.consent = document.getElementById('estimate-consent') && document.getElementById('estimate-consent').checked === true;

        var nameEl = document.getElementById('estimate-name');
        var emailEl = document.getElementById('estimate-email');
        var phoneEl = document.getElementById('estimate-phone');
        if (nameEl) nameEl.classList.toggle('error', data.name.length < 2);
        if (emailEl) emailEl.classList.toggle('error', !isValidEmail(data.email));
        var phoneDigits = data.phone.replace(/\D/g, '');
        if (phoneEl) phoneEl.classList.toggle('error', phoneDigits.length < 9);
        if (data.name.length < 2) {
          nameEl.focus();
          return;
        }
        if (!isValidEmail(data.email)) {
          emailEl.focus();
          return;
        }
        if (phoneDigits.length < 9) {
          phoneEl.focus();
          return;
        }
        if (!data.consent) {
          document.getElementById('estimate-consent').focus();
          showToast('Potvrďte prosím souhlas se zpracováním údajů.');
          return;
        }

        console.log('Estimate wizard submitted:', data);

        var summary = document.getElementById('estimate-summary');
        if (summary) {
          summary.hidden = false;
          summary.innerHTML =
            '<p><strong>Typ:</strong> ' + data.type + '</p>' +
            '<p><strong>Adresa:</strong> ' + (data.street ? data.street + ', ' : '') + data.city + '</p>' +
            '<p><strong>Vlastník:</strong> ' + data.ownerRole + '</p>' +
            '<p><strong>Dispozice:</strong> ' + data.disposition + ' · <strong>Plocha:</strong> ' + data.area + ' m²</p>' +
            '<p><strong>Druh vlastnictví:</strong> ' + data.ownership + '</p>' +
            '<p><strong>Kontakt:</strong> ' + data.name + ', ' + data.email + ', ' + data.phone + '</p>' +
            (data.message ? '<p><strong>Zpráva:</strong> ' + data.message + '</p>' : '');
        }

        var feedback = document.getElementById('estimate-feedback');
        if (feedback) {
          feedback.innerHTML = '<strong>Děkuji.</strong> Ozvu se co nejdříve s nezávazným odhadem.';
        }

        showToast('Děkujeme! Brzy vás budeme kontaktovat.');
        submitBtn.disabled = true;
      });
    }

    setStep(0);
  }

  function initContactForm() {
    var form = document.getElementById('contact-form');
    var nameField;
    var emailField;
    var phoneField;
    var msgField;
    var fields;
    var valid;
    var phoneDigits;
    var data;
    var key;

    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      nameField = form.querySelector('#cf-name');
      emailField = form.querySelector('#cf-email');
      phoneField = form.querySelector('#cf-phone');
      msgField = form.querySelector('#cf-msg');
      fields = [nameField, emailField, phoneField, msgField];
      valid = true;

      fields.forEach(function (field) {
        field.classList.remove('error');
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        }
      });

      if (emailField.value && !isValidEmail(emailField.value)) {
        emailField.classList.add('error');
        valid = false;
      }

      phoneDigits = (phoneField.value || '').replace(/\D/g, '');
      if (phoneDigits.length < 9) {
        phoneField.classList.add('error');
        valid = false;
      }

      if (!valid) {
        showToast('Vyplňte prosím všechna pole správně.');
        return;
      }

      data = {};
      new FormData(form).forEach(function (value, formKey) {
        data[formKey] = value;
      });

      console.log('Contact form submitted:', data);
      showToast('Děkujeme! Brzy vás budeme kontaktovat.');
      form.reset();
    });
  }

  function initForm() {
    if (!estimateForm) return;

    estimateForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var valid = true;
      var fields = estimateForm.querySelectorAll('input[required], select[required]');

      fields.forEach(function (field) {
        field.classList.remove('error');
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        }
      });

      var emailField = estimateForm.querySelector('#email');
      if (emailField.value && !isValidEmail(emailField.value)) {
        emailField.classList.add('error');
        valid = false;
      }

      if (!valid) {
        showToast('Vyplňte prosím všechna povinná pole.');
        return;
      }

      var formData = new FormData(estimateForm);
      var data = {};
      formData.forEach(function (value, key) { data[key] = value; });

      /* Replace with actual form submission endpoint */
      console.log('Form submitted:', data);

      showToast('Děkujeme! Brzy vás budeme kontaktovat.');
      estimateForm.reset();
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* ==========================================================================
     TOAST
     ========================================================================== */

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    toast.classList.add('show');

    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () { toast.hidden = true; }, 400);
    }, 4000);
  }

  /* ==========================================================================
     PROCESS TIMELINE INTERACTIVITY
     ========================================================================== */

  function initProcessTimeline() {
    var steps = document.querySelectorAll('.process__step');

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    steps.forEach(function (step) {
      observer.observe(step);
    });
  }

  /* ==========================================================================
     HERO VIDEO FALLBACK
     ========================================================================== */

  function initHeroVideo() {
    var video = document.querySelector('video.hero__video');
    if (!video) return;

    video.addEventListener('error', function () {
      video.style.display = 'none';
    });

    var playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(function () {
        /* Autoplay blocked - poster image will show */
      });
    }
  }

  /* ==========================================================================
     INIT
     ========================================================================== */

  function init() {
    initHeader();
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();

    switch (currentPage) {
      case 'home':
        initCounters();
        initListings(3);
        initDeals({ soldOnly: true, limit: 3 });
        initSocialVideos();
        initCarousels();
        initHeroVideo();
        break;
      case 'nemovitosti':
        initPropertyViews();
        initListings();
        initDeals({ soldOnly: true });
        break;
      case 'nemovitost':
        initPropertyDetail();
        break;
      case 'o-mne':
        initTestimonialsPreview();
        initProcessTimeline();
        break;
      case 'sluzby':
        break;
      case 'reference':
        initTestimonialsGrid();
        break;
      case 'kontakt':
        initContactForm();
        break;
      case 'odhad':
        initEstimateWizard();
        initFAQ();
        break;
      default:
        break;
    }
  }

  function bootstrap() {
    if (window.SitePartials) {
      SitePartials.inject(currentPage);
    }
    cacheDomRefs();
    init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }
})();
