(function () {
  // ---------- Theme: system, light, dark (remembered in this browser) ----------
  var themeBtn = document.getElementById('theme-btn'), ORDER = ['system', 'light', 'dark'];
  function setTheme(t) {
    if (t === 'system') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', t);
    themeBtn.textContent = '◐ Theme: ' + t;
    try { localStorage.setItem('fde-theme', t); } catch (e) {}
  }
  var saved = 'system';
  try { saved = localStorage.getItem('fde-theme') || 'system'; } catch (e) {}
  setTheme(ORDER.indexOf(saved) === -1 ? 'system' : saved);
  themeBtn.onclick = function () {
    var cur = document.documentElement.getAttribute('data-theme') || 'system';
    setTheme(ORDER[(ORDER.indexOf(cur) + 1) % ORDER.length]);
  };

  // ---------- Table of contents: highlight where you are ----------
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      tocLinks.forEach(function (a) { a.classList.toggle('here', a.getAttribute('href') === '#' + e.target.id); });
    });
  }, { rootMargin: '0px 0px -75% 0px' });
  tocLinks.forEach(function (a) {
    var t = document.querySelector(a.getAttribute('href'));
    if (t) spy.observe(t);
  });

  // ---------- Check yourself: click to reveal, in every chapter ----------
  document.querySelectorAll('.check .qa button').forEach(function (b) {
    b.onclick = function () {
      var a = b.nextElementSibling, on = a.classList.toggle('show');
      b.textContent = on ? 'Hide answer' : 'Show answer';
    };
  });
})();
