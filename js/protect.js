/* ============================================================
   Content protection — DETERRENT ONLY.
   These measures stop casual copying (right-click, drag-save,
   text selection, copy/cut). They are trivially bypassed by
   DevTools, "view source", disabling JavaScript, or reader mode,
   and they cannot stop screenshots. Do not rely on them for
   anything that truly must stay private.
   ============================================================ */
(function () {
  'use strict';

  var isField = function (el) {
    return !!(el && el.closest && el.closest('input, textarea, select, [contenteditable="true"]'));
  };

  /* 1. Disable the right-click / long-press context menu */
  document.addEventListener('contextmenu', function (e) {
    if (isField(e.target)) return;
    e.preventDefault();
  });

  /* 2. Block copy & cut of page content (form fields still work) */
  ['copy', 'cut'].forEach(function (evt) {
    document.addEventListener(evt, function (e) {
      if (isField(e.target)) return;
      e.preventDefault();
    });
  });

  /* 3. Block text selection outside form fields */
  document.addEventListener('selectstart', function (e) {
    if (isField(e.target)) return;
    e.preventDefault();
  });

  /* 4. Stop images being dragged out of the page to save them */
  document.addEventListener('dragstart', function (e) {
    if (e.target && e.target.tagName === 'IMG') e.preventDefault();
  });

  /* 5. Deter the usual DevTools / view-source shortcuts.
        (Cosmetic — the browser menu still opens them.) */
  document.addEventListener('keydown', function (e) {
    var k = (e.key || '').toLowerCase();
    var blocked =
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (k === 'i' || k === 'j' || k === 'c')) ||
      (e.ctrlKey && !e.shiftKey && k === 'u');
    if (blocked) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
})();
