function includeHTML() {
  document.querySelectorAll('[data-include]').forEach(async (el) => {
    const file = el.getAttribute('data-include');
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error('404');
      el.innerHTML = await res.text();
    } catch (err) {
      el.innerHTML = `<p style="color:red;">Include failed: ${file}</p>`;
    }
  });
}
document.addEventListener('DOMContentLoaded', includeHTML);
