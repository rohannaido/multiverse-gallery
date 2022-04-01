const imageContainers = document.querySelectorAll('.image-container');
const displayImageBox = document.querySelector('.display-image');
const closeImageButton = document.querySelector('.close');

const imageDisplay = (imageContainer) => {
    imageContainer.addEventListener('click',() => {
            displayImageBox.style.display = 'block';
            document.querySelector('.display-one-image').src = imageContainer.querySelector('img').src;
        })
}

imageContainers.forEach(imageDisplay);

closeImageButton.addEventListener('click', () => {
    displayImageBox.style.display = 'none';
})