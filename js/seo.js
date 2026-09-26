/**
 * SEO: kanonické URL, Open Graph a JSON-LD
 * Absolutní adresy se berou z aktuální domény po nasazení.
 */
(function () {
  'use strict';

  var DEFAULT_IMAGE = 'images/fotka_frydrysek_uvod.png';
  var PAGE = document.body && document.body.getAttribute('data-page');

  function origin() {
    if (!location || !/^https?:$/.test(location.protocol)) return '';
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') return '';
    return location.origin.replace(/\/$/, '');
  }

  function abs(path) {
    if (!path) return '';
    if (/^https?:\/\//i.test(path)) return path;
    var root = origin();
    var clean = path.replace(/^\.\//, '').replace(/^\//, '');
    if (!root) return clean;
    if (clean === 'index.html' || clean === '') return root + '/';
    return root + '/' + clean;
  }

  function currentPath() {
    var file = (location.pathname.split('/').pop() || 'index.html');
    if (file === '' || file === '/') return 'index.html';
    return file + location.search;
  }

  function upsert(selector, create) {
    var el = document.head.querySelector(selector);
    if (!el) {
      el = create();
      document.head.appendChild(el);
    }
    return el;
  }

  function setMeta(attr, key, value) {
    if (!value) return;
    var el = upsert('meta[' + attr + '="' + key + '"]', function () {
      var meta = document.createElement('meta');
      meta.setAttribute(attr, key);
      return meta;
    });
    el.setAttribute('content', value);
  }

  function setLink(rel, href) {
    if (!href) return;
    var el = upsert('link[rel="' + rel + '"]', function () {
      var link = document.createElement('link');
      link.setAttribute('rel', rel);
      return link;
    });
    el.setAttribute('href', href);
  }

  function setDocumentMeta(title, description, image) {
    if (title) document.title = title;
    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }
    if (title) {
      setMeta('property', 'og:title', title);
      setMeta('name', 'twitter:title', title);
    }
    var img = abs(image || DEFAULT_IMAGE);
    if (img) {
      setMeta('property', 'og:image', img);
      setMeta('name', 'twitter:image', img);
    }
    var url = abs(currentPath());
    if (url) {
      setLink('canonical', url.split('?')[0] === abs('index.html') ? abs('index.html') : url);
      setMeta('property', 'og:url', url);
    }
  }

  function absolutizeExisting() {
    var canonical = document.head.querySelector('link[rel="canonical"]');
    var root = origin();
    if (canonical && root) canonical.href = abs(canonical.getAttribute('href') || currentPath());

    ['og:url', 'og:image', 'og:image:url'].forEach(function (prop) {
      var el = document.head.querySelector('meta[property="' + prop + '"]');
      if (el && root) el.setAttribute('content', abs(el.getAttribute('content')));
    });
    var twImg = document.head.querySelector('meta[name="twitter:image"]');
    if (twImg && root) twImg.setAttribute('content', abs(twImg.getAttribute('content')));

    if (root) setMeta('property', 'og:url', abs(currentPath()));
  }

  function jsonLd() {
    var root = origin() || '';
    var home = root ? root + '/' : 'index.html';
    var image = abs(DEFAULT_IMAGE) || DEFAULT_IMAGE;
    var agent = {
      '@type': ['RealEstateAgent', 'Person'],
      '@id': home + '#agent',
      name: 'Tomáš Frydrýšek',
      url: home,
      image: image,
      jobTitle: 'Realitní makléř',
      telephone: '+420734168294',
      email: 'tomas.frydrysek@bidli.cz',
      taxID: '45290032',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Praha',
        addressCountry: 'CZ'
      },
      areaServed: [
        { '@type': 'City', name: 'Praha' },
        { '@type': 'AdministrativeArea', name: 'Středočeský kraj' }
      ],
      knowsAbout: [
        'prodej nemovitosti',
        'pronájem nemovitosti',
        'odhad nemovitosti',
        'realitní makléř Praha'
      ],
      memberOf: {
        '@type': 'Organization',
        name: 'Bidli',
        url: 'https://www.bidli.cz/'
      },
      sameAs: [
        'https://www.facebook.com/Frydra',
        'https://www.bidli.cz/specialista/tomas-frydrysek/13862'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+420734168294',
        contactType: 'customer service',
        areaServed: 'CZ',
        availableLanguage: 'Czech'
      }
    };

    var website = {
      '@type': 'WebSite',
      '@id': home + '#website',
      name: 'Tomáš Frydrýšek – realitní makléř Praha',
      url: home,
      inLanguage: 'cs',
      publisher: { '@id': home + '#agent' }
    };

    var titles = {
      home: 'Úvod',
      'o-mne': 'O mně',
      sluzby: 'Služby',
      nemovitosti: 'Nemovitosti',
      nemovitost: 'Detail nemovitosti',
      reference: 'Reference',
      kontakt: 'Kontakt',
      odhad: 'Odhad nemovitosti zdarma',
      cookies: 'Cookies',
      gdpr: 'Ochrana osobních údajů',
      'ochrana-osobnich-udaju': 'Ochrana osobních údajů'
    };
    var files = {
      home: 'index.html',
      'o-mne': 'o-mne.html',
      sluzby: 'sluzby.html',
      nemovitosti: 'nemovitosti.html',
      nemovitost: 'nemovitost.html',
      reference: 'reference.html',
      kontakt: 'kontakt.html',
      odhad: 'odhad.html',
      cookies: 'cookies.html',
      gdpr: 'ochrana-osobnich-udaju.html',
      'ochrana-osobnich-udaju': 'ochrana-osobnich-udaju.html'
    };
    var pageName = titles[PAGE] || document.title;
    var pageFile = files[PAGE] || currentPath().split('?')[0];
    var pageUrl = abs(pageFile) || pageFile;

    var webpage = {
      '@type': 'WebPage',
      '@id': pageUrl + '#webpage',
      url: pageUrl,
      name: document.title,
      inLanguage: 'cs',
      isPartOf: { '@id': home + '#website' },
      about: { '@id': home + '#agent' }
    };

    var desc = document.querySelector('meta[name="description"]');
    if (desc && desc.getAttribute('content')) webpage.description = desc.getAttribute('content');

    var crumbs = [
      { '@type': 'ListItem', position: 1, name: 'Úvod', item: home }
    ];
    if (PAGE && PAGE !== 'home') {
      crumbs.push({
        '@type': 'ListItem',
        position: 2,
        name: pageName,
        item: pageUrl
      });
    }

    var graph = [agent, website, webpage, {
      '@type': 'BreadcrumbList',
      itemListElement: crumbs
    }];

    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph
    });
    document.head.appendChild(script);
  }

  absolutizeExisting();
  jsonLd();

  window.TFSeo = { setDocumentMeta: setDocumentMeta, abs: abs };
})();
