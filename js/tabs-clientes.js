document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.card-modern');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tab = btn.getAttribute('data-tab');

      cards.forEach(card => {
        card.style.display = 
          tab === 'todos' ? 'block' :
          tab === 'ativos' && card.classList.contains('ativo') ? 'block' :
          tab === 'inativos' && card.classList.contains('inativo') ? 'block' :
          'none';
      });
    });
  });
});
