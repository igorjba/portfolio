const btnMobile = document.querySelector('.btn-menu-mobile');
const navMenu = document.querySelector('.menu');
const header = document.querySelector('header');

function toggeMenu(event) {
    if (event.type === 'touchstart') event.preventDefault(); {
        header.classList.toggle('menu-active');
        event.currentTarget.setAttribute('aria-expanded', event.currentTarget.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');

        if (active) {
            event.currentTarget.setAttribute('aria-label', 'Fechar menu');
        } else {
            event.currentTarget.setAttribute('aria-label', 'Abrir menu');
        }

    }
}

btnMobile.addEventListener('click', toggeMenu)
btnMobile.addEventListener('touchstart', toggeMenu)