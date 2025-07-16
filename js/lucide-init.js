document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializa os ícones Lucide
  if (window.lucide) lucide.createIcons();

  // 2. Faz com que todos os links fora da sidebar abram em nova guia
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');

    // Ignora âncoras locais, javascript:void, tel, mailto, ou sem href
    const isInternal = !href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:');
    const isSidebarLink = link.closest('aside');

    if (!isInternal && !isSidebarLink) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
