const mobileMenu = document.querySelector('.mobile-nav');
const mobileNavButton = document.querySelector('.nav-mobile-button');
const cross = document.querySelector('.nav-mobile-button nav-mobile-button-close')
const body = document.body;

const toggleMobileNav = () => {
   mobileMenu.classList.toggle('mobile-nav-active');
   mobileNavButton.classList.toggle('nav-mobile-button-close');
   body.classList.toggle('no-scroll');
}

mobileNavButton && mobileNavButton.addEventListener('click', (event) => {
   event.stopPropagation()
   toggleMobileNav()
})

window.addEventListener('click', () => body.classList.contains('no-scroll') && toggleMobileNav())

mobileMenu && mobileMenu.addEventListener('click', (event) => event.stopPropagation())