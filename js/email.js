/**
 * EmailJS – odesílání formulářů odhadu a kontaktu
 */
(function (global) {
  'use strict';

  var PUBLIC_KEY = 'TkdiZvSRTaw7LVCVu';
  var SERVICE_ID = 'service_jkr4159';
  var TEMPLATE_ESTIMATE = 'template_fp6zx1r';
  var TEMPLATE_CONTACT = 'template_wymr23d';
  var inited = false;

  var INTENT_LABELS = {
    prodat: 'Chci prodat',
    odhad: 'Chci odhad',
    koupit: 'Chci koupit',
    pronajmout: 'Chci pronajmout'
  };

  function ready() {
    return typeof global.emailjs !== 'undefined' && typeof global.emailjs.send === 'function';
  }

  function ensureInit() {
    if (!ready()) return false;
    if (!inited) {
      global.emailjs.init({ publicKey: PUBLIC_KEY });
      inited = true;
    }
    return true;
  }

  function stamp() {
    try {
      return new Date().toLocaleString('cs-CZ');
    } catch (err) {
      return new Date().toISOString();
    }
  }

  function send(templateId, params) {
    if (!ensureInit()) {
      return Promise.reject(new Error('EmailJS není načtený.'));
    }

    params.submitted_at = params.submitted_at || stamp();
    params.page_url = params.page_url || global.location.href;
    return global.emailjs.send(SERVICE_ID, templateId, params);
  }

  global.TFEmail = {
    sendEstimate: function (data) {
      return send(TEMPLATE_ESTIMATE, {
        form_label: 'Odhad nemovitosti',
        property_type: data.type || '',
        city: data.city || '',
        street: data.street || '',
        owner_role: data.ownerRole || '',
        disposition: data.disposition || '',
        area: data.area || '',
        ownership: data.ownership || '',
        from_name: data.name || '',
        reply_to: data.email || '',
        phone: data.phone || '',
        message: data.message || '',
        consent: data.consent ? 'ano' : 'ne'
      });
    },
    sendContact: function (data) {
      return send(TEMPLATE_CONTACT, {
        form_label: 'Kontakt',
        from_name: data.name || '',
        reply_to: data.email || '',
        phone: data.phone || '',
        intent: INTENT_LABELS[data.intent] || data.intent || '',
        consent: data.consent === 'ano' || data.consent === true ? 'ano' : 'ne'
      });
    }
  };
})(window);
