const themeBtn = document.querySelector('.btn-theme');

const linkedinIcon = document.querySelector('.linkedin-icon');
const githubIcon = document.querySelector('.git-icon');

const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');

const title = document.querySelector('h2');

const root = document.querySelector(':root')




themeBtn.addEventListener('click', (event) => {
       event.stopPropagation()
       event.preventDefault()
       const currentTheme = localStorage.getItem('theme')

       if (!currentTheme || currentTheme === 'light') {
              localStorage.setItem('theme', 'dark')
              applyCurrentTheme()
              return
       }
       localStorage.setItem('theme', 'light')
       applyCurrentTheme()
})

console.log(localStorage.getItem('theme'))
console.log(window.location.pathname)
function applyCurrentTheme() {
       const currentTheme = localStorage.getItem('theme')

       if (!currentTheme || currentTheme === 'light') {
              themeBtn.src = '../../assets/icons/light-mode.svg'
              linkedinIcon.src = '../../assets/icons/linkedin-light.svg'
              githubIcon.src = '../../assets/icons/github-light.svg'
              prevButton.src = '../../assets/icons/arrow-back-dark.svg'
              nextButton.src = '../../assets/icons/arrow-forward-dark.svg'

              root.style.setProperty('--color-link', '#33323d')
              root.style.setProperty('--color-link-active', '#9C0B8F')

              root.style.setProperty('--color-text', '#33323D')
              root.style.setProperty('--color-title', '#fff')

              root.style.setProperty('--color-background-linear-gradient-1', '#FFEDE6')
              root.style.setProperty('--color-background-linear-gradient-2', '#E8D4D1')
              root.style.setProperty('--color-background-linear-gradient-3', '#fff')
              root.style.setProperty('--color-background-linear-gradient-4', '#E8D1DC')
              root.style.setProperty('--color-background-linear-gradient-5', '#FFE6FF')

              root.style.setProperty('--color-btn-border', '#50064a')
              root.style.setProperty('--color-btn-text', '#50064a')

              root.style.setProperty('--color-primary', '#50064a')
              title.style.textShadow = "rgb(0 0 0 / 50%) 0px 1px 3px;"

       } else {
              themeBtn.src = '../../assets/icons/dark-mode.svg'
              linkedinIcon.src = '../../assets/icons/linkedin-dark.svg'
              githubIcon.src = '../../assets/icons/github-dark.svg'
              prevButton.src = '../../assets/icons/arrow-back.svg'
              nextButton.src = '../../assets/icons/arrow-forward.svg'

              root.style.setProperty('--color-link', '#fff')
              root.style.setProperty('--color-link-active', '#ba18ac')

              root.style.setProperty('--color-text', '#fff')
              root.style.setProperty('--color-title', '#86397e')

              root.style.setProperty('--color-background-linear-gradient-1', '#420301')
              root.style.setProperty('--color-background-linear-gradient-2', '#4D0220')
              root.style.setProperty('--color-background-linear-gradient-3', '#360431')
              root.style.setProperty('--color-background-linear-gradient-4', '#3C024D')
              root.style.setProperty('--color-background-linear-gradient-5', '#220142')

              root.style.setProperty('--color-btn-border', '#FFC0CB')
              root.style.setProperty('--color-btn-text', '#FFC0CB')


              root.style.setProperty('--color-primary', '#FFC0CB')
              title.style.textShadow = "rgb(0 0 0 / 50%) 0px 0px 2px;"
              //rgb(0 0 0 / 50%) 0px 1px 3px;

       }




}
applyCurrentTheme()

