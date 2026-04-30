(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem('pref-theme');
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (stored === 'dark' || (!stored && prefersDark)) {
    document.body.classList.add('dark');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      document.body.classList.toggle('dark');
      var dark = document.body.classList.contains('dark');
      localStorage.setItem('pref-theme', dark ? 'dark' : 'light');
    });
  });
})();
