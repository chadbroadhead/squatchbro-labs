(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !reduced.matches) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    document.documentElement.classList.add('motion-ready');
  }
  const button = document.querySelector('#transform');
  if (!button) return;
  const output = document.querySelector('#demo-output');
  const status = document.querySelector('.demo-status');
  const initial = output.innerHTML;
  const initialStatus = status.textContent;
  const records = [
    { name: '  alex rivera  ', email: 'ALEX@EXAMPLE.COM', role: 'teacher' },
    { name: '  sam chen  ', email: 'SAM@EXAMPLE.COM', role: 'admin' },
    { name: '  jordan lee  ', email: 'JORDAN@EXAMPLE.COM', role: 'teacher' }
  ];
  let mapped = false;
  button.addEventListener('click', () => {
    mapped = !mapped;
    output.replaceChildren();
    if (mapped) {
      records.forEach(record => {
        const row = document.createElement('tr');
        const values = [record.name.trim().replace(/\b\w/g, c => c.toUpperCase()), record.email.toLowerCase(), record.role];
        values.forEach(value => { const cell = document.createElement('td'); cell.textContent = value; row.append(cell); });
        output.append(row);
      });
      button.textContent = 'Reset sample ↺';
      status.textContent = 'Done. 3 records transformed · Header renamed · Spaces trimmed · Names formatted · Emails lowercased';
    } else {
      output.innerHTML = initial;
      button.textContent = 'Transform sample ↗';
      status.textContent = initialStatus;
    }
    document.querySelector('.demo-window').classList.toggle('is-mapped', mapped);
  });
})();
