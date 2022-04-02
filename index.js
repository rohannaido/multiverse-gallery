const imageContainers = document.querySelectorAll('.image-container');
const displayImageBox = document.querySelector('.display-image-background');
const closeImageButton = document.querySelector('.close');
const mainContainer = document.querySelector('.main-container');
const navBar = document.querySelector('.nav-bar-div');

const imageDisplay = (imageContainer) => {
    imageContainer.addEventListener('click',() => {
            displayImageBox.style.display = 'block';
            document.querySelector('.display-one-image').src = imageContainer.querySelector('img').src;
            mainContainer.style.filter = 'blur(8px)';
            navBar.style.display = 'none';
        })
}

imageContainers.forEach(imageDisplay);

closeImageButton.addEventListener('click', () => {
    displayImageBox.style.display = 'none';
    mainContainer.style.filter = 'none';
    navBar.style.display = 'flex';
})