const profileImage = document.querySelector(".profile-img")

window.addEventListener("load", (event) => {
    event.stopPropagation()
    event.preventDefault()
    loadProfilePhoto()
})

let profileImageListIndex = 0
function loadProfilePhoto() {
    const profileImageList = [
        "image-homepage-profile0.png",
        "image-homepage-profile1.png",
        "image-homepage-profile2.png"
    ]
    const currentImage = localStorage.getItem('profileImage')
    let profileImageListIndex = currentImage

    if (profileImageListIndex < profileImageList.length - 1) {
        profileImageListIndex++
        localStorage.setItem('profileImage', `${[profileImageListIndex]}`)

    } else {
        profileImageListIndex = 0
        localStorage.setItem('profileImage', `${[profileImageListIndex]}`)

    }
    profileImage.src = `../../assets/home/${profileImageList[profileImageListIndex]}`
}

