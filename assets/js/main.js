const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');
const navLinks = [...document.querySelectorAll('#primary-nav a')];

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi');
  navigation.classList.toggle('is-open', open);
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Buka menu navigasi');
  navigation.classList.remove('is-open');
}));

document.querySelector('#copyright-year').textContent = new Date().getFullYear();

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');
document.querySelectorAll('[data-lightbox]').forEach((item) => {
  item.addEventListener('click', () => {
    lightboxImage.src = item.dataset.lightbox;
    lightboxImage.alt = item.querySelector('img').alt;
    lightboxCaption.textContent = item.dataset.caption;
    lightbox.showModal();
  });
});
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener('close', () => { lightboxImage.src = ''; });
