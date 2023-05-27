const profileImage = document.querySelector(".profile-img")

window.addEventListener("load", (event) => {
    event.stopPropagation()
    event.preventDefault()
    loadProfilePhoto()
})

const profileImageList = [

    "image-homepage-profile0.jpg",
    "image-homepage-profile1.jpg",
    "image-homepage-profile2.jpg"
]
const currentImage = localStorage.getItem('profileImage')
let profileImageListIndex = currentImage

if (profileImageListIndex < profileImageList.length - 1) {
    profileImageListIndex++
    localStorage.setItem('profileImage', `${[profileImageListIndex]}`)
    profileImage.src = `../../assets/home/${profileImageList[profileImageListIndex]}`

} else {
    profileImageListIndex = 0
    localStorage.setItem('profileImage', `${[profileImageListIndex]}`)
    profileImage.src = `../../assets/home/${profileImageList[profileImageListIndex]}`
}