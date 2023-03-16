const sliderImage = document.querySelector(".card-portifolio-img-container")
const sliderTitle = document.querySelector(".card-portifolio-details h2")
const sliderDescription = document.querySelector(".card-portifolio-details p")
const sliderProjectLinkBtn = document.querySelector(".btn-project")
const sliderGitLinkBtn = document.querySelector(".btn-git")

const nextSliderBtn = document.querySelector(".btn-next")
const previewSlideButton = document.querySelector(".btn-prev")


const sliderProjectsList = [
    {
        name: "manage",
        photo: "../../assets/portfolio/image-portfolio-manage.jpg",
        about: "Esse projeto me fez criar uma landing page responsiva de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais.",
        page: "#",
        repository: "#"
    }, {
        name: "bookmark",
        photo: "../../assets/portfolio/image-portfolio-bookmark.jpg",
        about: "Esse projeto me fez criar uma landing page responsiva de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como a área de Features.",
        page: "#",
        repository: "#"
    }, {
        name: "insure",
        photo: "../../assets/portfolio/image-portfolio-insure.jpg",
        about: "Este foi um projeto pequeno que consistiu em HTML e CSS principalmente. Eu construí uma landing page totalmente responsiva. O único JavaScript que usei foi para o menu de navegação mobile.",
        page: "#",
        repository: "#"
    }, {
        name: "fylo",
        photo: "../../assets/portfolio/image-portfolio-fylo.jpg",
        about: "Este projeto foi puramente HTML e CSS. Eu recebi designs mobile e desktop para construir, então ele foi totalmente responsivo. Eu tomei um caminho mobile-first e usei CSS moderno como Flexbox e Grid para criar o layout.",
        page: "#",
        repository: "#"
    }]

window.addEventListener("load", (event) => {
    event.stopPropagation()
    event.preventDefault()
    loadSlider(sliderProjectsList, 0)
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

