document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));

  function selectTab(tab, focus) {
    tabs.forEach(function (t) {
      var active = t === tab;
      t.setAttribute('aria-selected', active ? 'true' : 'false');
      t.tabIndex = active ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !active;
    });
    if (focus) tab.focus();
  }

  if (tabs.length) {
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        selectTab(tab);
        history.replaceState(null, '', '#' + tab.id.replace('tab-', ''));
      });
      tab.addEventListener('keydown', function (e) {
        var next = null;
        if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (next) { e.preventDefault(); selectTab(next, true); }
      });
    });

    function selectFromHash() {
      var tab = document.getElementById('tab-' + location.hash.slice(1));
      if (tab && tab.getAttribute('role') === 'tab') selectTab(tab);
    }
    selectFromHash();
    window.addEventListener('hashchange', selectFromHash);
  }

  document.querySelectorAll('.year-tag').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
