const toast = document.getElementById('toast');
    document.getElementById('currentYear').textContent = String(new Date().getFullYear());
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
      const isLight = document.documentElement.dataset.theme !== 'light';
      document.documentElement.dataset.theme = isLight ? 'light' : 'dark';
      const nextTheme = isLight ? 'dark' : 'light';
      const label = `Switch to ${nextTheme} mode`;
      themeToggle.setAttribute('aria-label', label);
      themeToggle.setAttribute('title', label);
      themeToggle.setAttribute('aria-pressed', String(isLight));
      document.querySelector('meta[name="theme-color"]').content = isLight ? '#f0f5f4' : '#060e18';
    });
    let toastTimer;
    function showToast(message) {
      toast.textContent = message;
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
    }

    document.querySelectorAll('.tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach((item) => {
          item.classList.remove('selected');
          item.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('selected');
        tab.setAttribute('aria-selected', 'true');
        const filter = tab.dataset.filter;
        document.querySelectorAll('.project').forEach((project) => {
          project.hidden = filter !== 'all' && project.dataset.status !== filter;
        });
      });
    });

    document.getElementById('menuToggle').addEventListener('click', (event) => {
      const nav = document.getElementById('mainNav');
      const expanded = nav.classList.toggle('open');
      event.currentTarget.setAttribute('aria-expanded', String(expanded));
    });
    document.querySelectorAll('.nav a').forEach((link) => {
      link.addEventListener('click', () => {
        document.querySelectorAll('.nav a').forEach((item) => item.classList.remove('active'));
        link.classList.add('active');
        document.getElementById('mainNav').classList.remove('open');
        document.getElementById('menuToggle').setAttribute('aria-expanded', 'false');
      });
    });
    document.getElementById('healthDetails').addEventListener('click', () => showToast('18 on track · 4 planning · 2 at risk.'));
    document.getElementById('regionDetails').addEventListener('click', () => showToast('24 active programs across 8 Asia Pacific markets.'));
    document.getElementById('milestoneDetails').addEventListener('click', () => showToast('Illustrative milestones: UAT sign-off Nov 10 · Go-live readiness Nov 14.'));
