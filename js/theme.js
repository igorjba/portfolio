const themeBtn = document.querySelector('.btn-theme');
const themeBtnHome = document.querySelector('.btn-theme-home');
const themeBtnPages = document.querySelector('.btn-theme-pg');

const linkedinInconHome = document.querySelector('.linkedin-icon-home');
const githubIconHome = document.querySelector('.git-icon-home');
const linkedinIcon = document.querySelector('.linkedin-icon');
const githubIcon = document.querySelector('.git-icon');

const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');

const root = document.querySelector(':root')




themeBtn.addEventListener('click', (event) => {
       event.stopPropagation()
       event.preventDefault()
       const currentTheme = localStorage.getItem('theme')
       console.log(event.target.classList[1])

       if (!currentTheme || currentTheme === 'light') {
              localStorage.setItem('theme', 'dark')

              applyCurrentTheme(event.target.classList[1])
              return
       }
       localStorage.setItem('theme', 'light')
       applyCurrentTheme(event.target.classList[1])


})

console.log(localStorage.getItem('theme'))
console.log(window.location.pathname)
function applyCurrentTheme(classButton) {
       const currentTheme = localStorage.getItem('theme')
       if (classButton === 'btn-theme-home') {
              if (!currentTheme || currentTheme === 'light') {
                     themeBtnHome.src = './assets/icons/light-mode.svg'
                     linkedinInconHome.src = './assets/icons/linkedin-light.svg'
                     githubIconHome.src = './assets/icons/github-light.svg'

                     root.style.setProperty('--color-background-linear-gradient-1', '#FFEDE6')
                     root.style.setProperty('--color-background-linear-gradient-2', '#E8D4D1')
                     root.style.setProperty('--color-background-linear-gradient-3', '#fff')
                     root.style.setProperty('--color-background-linear-gradient-4', '#E8D1DC')
                     root.style.setProperty('--color-background-linear-gradient-5', '#FFE6FF')

              } else {
                     themeBtnHome.src = './assets/icons/dark-mode.svg'
                     linkedinInconHome.src = './assets/icons/linkedin-dark.svg'
                     githubIconHome.src = './assets/icons/github-dark.svg'

                     root.style.setProperty('--color-background-linear-gradient-1', '#420301')
                     root.style.setProperty('--color-background-linear-gradient-2', '#4D0220')
                     root.style.setProperty('--color-background-linear-gradient-3', '#360431')
                     root.style.setProperty('--color-background-linear-gradient-4', '#3C024D')
                     root.style.setProperty('--color-background-linear-gradient-5', '#220142')

              }
       } else if (classButton === 'btn-theme-pg') {
              if (!currentTheme || currentTheme === 'light') {
                     themeBtnPages.src = '../../assets/icons/light-mode.svg'
                     linkedinIcon.src = '../../assets/icons/linkedin-light.svg'
                     githubIcon.src = '../../assets/icons/github-light.svg'
                     prevButton.src = '../../assets/icons/arrow-back-dark.svg'
                     nextButton.src = '../../assets/icons/arrow-forward-dark.svg'

                     root.style.setProperty('--color-background-linear-gradient-1', '#FFEDE6')
                     root.style.setProperty('--color-background-linear-gradient-2', '#E8D4D1')
                     root.style.setProperty('--color-background-linear-gradient-3', '#fff')
                     root.style.setProperty('--color-background-linear-gradient-4', '#E8D1DC')
                     root.style.setProperty('--color-background-linear-gradient-5', '#FFE6FF')

              } else {
                     themeBtnPages.src = '../../assets/icons/dark-mode.svg'
                     linkedinIcon.src = '../../assets/icons/linkedin-dark.svg'
                     githubIcon.src = '../../assets/icons/github-dark.svg'
                     prevButton.src = '../../assets/icons/arrow-back.svg'
                     nextButton.src = '../../assets/icons/arrow-forward.svg'

                     root.style.setProperty('--color-background-linear-gradient-1', '#420301')
                     root.style.setProperty('--color-background-linear-gradient-2', '#4D0220')
                     root.style.setProperty('--color-background-linear-gradient-3', '#360431')
                     root.style.setProperty('--color-background-linear-gradient-4', '#3C024D')
                     root.style.setProperty('--color-background-linear-gradient-5', '#220142')
              }
       }

}
applyCurrentTheme()

