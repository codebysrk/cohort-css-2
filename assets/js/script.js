const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  const isMenuOpen = menuToggle.classList.toggle('ri-menu-line');
  menuToggle.classList.toggle('ri-close-line', !isMenuOpen);
  menuToggle.setAttribute(
    'aria-label',
    isMenuOpen ? 'Open menu' : 'Close menu'
  );
});
