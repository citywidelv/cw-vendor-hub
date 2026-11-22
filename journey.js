/* New vendor progress. Five steps to get on file.
   Kept on this device only (localStorage). Nothing is sent anywhere.
   Shared by the hub home, new-vendors.html, vendor-evaluation.html and background-check.html
   so all four pages agree on which step is done and which one is next. */
(function () {
  var KEY = 'cwv_journey_v1', RKEY = 'cwv_region_v1', FKEY = 'cwv_flash_v1', TOTAL = 5;

  /* mem keeps this page view right when the browser blocks storage */
  var mem = null;
  function load() {
    if (mem) { return mem.slice(); }
    try {
      var v = JSON.parse(localStorage.getItem(KEY) || '[]');
      return Array.isArray(v) ? v : [];
    } catch (e) { return []; }
  }
  function save(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { mem = v.slice(); } }

  window.CWJourney = {
    total: TOTAL,
    isDone: function (i) { return !!load()[i - 1]; },
    set: function (i, on) {
      if (!(i >= 1 && i <= TOTAL)) { return; }
      var v = load();
      for (var k = 0; k < TOTAL; k++) { v[k] = !!v[k]; }
      v[i - 1] = !!on; save(v);
    },
    toggle: function (i) { this.set(i, !this.isDone(i)); return this.isDone(i); },
    count: function () { return load().filter(Boolean).length; },
    /* first step that is not done, 1 to 5. 0 when all five are done. */
    next: function () {
      var v = load();
      for (var i = 1; i <= TOTAL; i++) { if (!v[i - 1]) { return i; } }
      return 0;
    },
    region: function () {
      try { var r = localStorage.getItem(RKEY) || ''; return /^(lv|nnv|both)$/.test(r) ? r : ''; } catch (e) { return ''; }
    },
    setRegion: function (r) {
      if (!/^(lv|nnv|both)$/.test(r || '')) { return; }
      try { localStorage.setItem(RKEY, r); } catch (e) {}
    },
    /* one-time note carried to the next page in this tab only */
    flash: function (o) { try { sessionStorage.setItem(FKEY, JSON.stringify(o || {})); } catch (e) {} },
    takeFlash: function () {
      try {
        var o = JSON.parse(sessionStorage.getItem(FKEY) || 'null');
        sessionStorage.removeItem(FKEY); return o;
      } catch (e) { return null; }
    }
  };
})();
