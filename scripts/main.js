const mobileMenu = document.querySelector('.mobile-nav')
const mobileNavButton = document.querySelector('.nav-mobile-button')

const handleNavMobileMenuActive = () => {
   mobileMenu.classList.toggle('mobile-nav-active'); mobileNavButton.classList.toggle('nav-mobile-button-close');
}
mobileNavButton && mobileNavButton.addEventListener('click', handleNavMobileMenuActive)