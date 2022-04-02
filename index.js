const imageContainers = document.querySelectorAll('.image-container');
const displayImageBox = document.querySelector('.display-image-background');
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

// const headerNav = document.querySelector('.header-nav');
// // const rect = headerNav.getBoundingClientRect();
// // console.log(rect.top, rect.right, rect.bottom, rect.left);