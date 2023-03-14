const btnMobile = document.querySelector('.btn-menu-mobile');
const navMenu = document.querySelector('.menu');
const header = document.querySelector('header');

function toggeMenu(event) {
    if (event.type === 'touchstart') event.preventDefault(); {
        header.classList.toggle('menu-active');
    }
}

btnMobile.addEventListener('click', toggeMenu)
btnMobile.addEventListener('touchstart', toggeMenu)