const sliderImage = document.querySelector(".card-portifolio-img-container")
const sliderTitle = document.querySelector(".card-portifolio-details h2")
const sliderDescription = document.querySelector(".card-portifolio-details p")
const sliderProjectLinkBtn = document.querySelector(".btn-project")
const sliderGitLinkBtn = document.querySelector(".btn-git")
const nextSliderBtn = document.querySelector(".btn-next")
const previewSlideButton = document.querySelector(".btn-prev")
const projectImageDiv = document.querySelector(".card-portifolio-img-container")


const sliderProjectsList = [{
    name: "Music Player",
    photo: "../../assets/portfolio/image-portfolio-music-player.jpg",
    about: "Este projeto é um player de música, desenvolvido com HTML, CSS, JavaScript (utilizando a interface de programação DOM) e ReactJS. Ele permite reproduzir, pausar, avançar e retroceder músicas, além de visualizar o progresso de cada uma delas. Embora ofereça uma experiência interativa e envolvente, o projeto ainda não possui uma implementação responsiva.",
    page: "https://music-player-igorjba.vercel.app/",
    repository: "https://github.com/igorjba/music-player"
},
{
    name: "portfólio",
    photo: "../../assets/portfolio/image-portfolio-portfolio.jpg",
    about: "O portfólio web apresenta quatro projetos: Manage, Bookmark, Insure e Fylo, com a estrutura e design construídos em HTML e CSS, seguindo o layout disponível no Figma. Apesar de oferecer uma apresentação visual atrativa, a página ainda não é responsiva",
    page: "https://igorjba.github.io/desafio-frontend-M02-2023/",
    repository: "https://github.com/igorjba/desafio-frontend-M02-2023"

}, {
    name: "cubos-flix",
    photo: "../../assets/portfolio/image-portfolio-cubos-flix.jpg",
    about: "Projeto em Javascript, HTML e CSS que utiliza a API do TMDb com Axios para fornecer informações sobre filmes e séries populares e bem avaliados em cartaz. O design e estrutura da página foram planejados para oferecer uma navegação intuitiva, no entanto, o layout ainda não é responsivo.",
    page: "https://igorjba.github.io/cubos-flix/",
    repository: "https://github.com/igorjba/cubos-flix"
},
{
    name: "jogo da memoria",
    photo: "../../assets/portfolio/image-portfolio-jogo-da-memoria.jpg",
    about: "Projeto responsivo utilizando ReactJS. Este projeto é um jogo da memória onde o usuário deve encontrar os pares de cartas iguais. O jogo possui um contador de movimentos e um botão para reiniciar o jogo.",
    page: "https://jogo-da-memoria-chi.vercel.app",
    repository: "https://github.com/igorjba/jogo-da-memoria"
},
{
    name: "calçados masculinos",
    photo: "../../assets/portfolio/image-portfolio-calcados.jpg",
    about: "Este projeto é uma página de exposição de sapatos com modais interativos. Desenvolvido com HTML, CSS, JavaScript e ReactJS, oferece uma visualização detalhada dos produtos. No entanto, ainda não é responsivo.",
    page: "https://moda-masculina.vercel.app/",
    repository: "https://github.com/igorjba/moda-masculina"
}


]

window.addEventListener("load", (event) => {
    event.stopPropagation()
    event.preventDefault()

    loadSlider(sliderProjectsList, 0)
})

projectImageDiv.addEventListener("click", (event) => {
    event.stopPropagation()
    event.preventDefault()

    window.open(`${(sliderProjectsList[sliderIndex].page)}`, "_blank")
})


function loadSlider(projectsList, sliderProjectsListIndex = 0) {

    sliderImage.style.backgroundImage = `url(${projectsList[sliderProjectsListIndex].photo})`
    sliderTitle.textContent = `${(projectsList[sliderProjectsListIndex].name)}`
    sliderDescription.textContent = `${(projectsList[sliderProjectsListIndex].about)}`
    sliderProjectLinkBtn.href = `${(projectsList[sliderProjectsListIndex].page)}`
    sliderGitLinkBtn.href = `${(projectsList[sliderProjectsListIndex].repository)}`
}

let sliderIndex = 0
previewSlideButton.addEventListener("click", (event) => {
    event.stopPropagation()
    event.preventDefault()

    if (sliderIndex === 0) {
        sliderIndex = sliderProjectsList.length - 1
        loadSlider(sliderProjectsList, sliderIndex)

    } else {
        sliderIndex--
        loadSlider(sliderProjectsList, sliderIndex)
    }
})

nextSliderBtn.addEventListener("click", (event) => {
    event.stopPropagation()
    event.preventDefault()

    if (sliderIndex === sliderProjectsList.length - 1) {
        sliderIndex = 0
        loadSlider(sliderProjectsList, sliderIndex)

    } else {
        sliderIndex++
        loadSlider(sliderProjectsList, sliderIndex)
    }
})

