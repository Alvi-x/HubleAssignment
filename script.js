document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll('.accordion input[type="radio"]');
    const images = document.querySelectorAll('.right .accordion-img');

    
    function hideAllImages() {
        images.forEach((img) => {
            img.style.display = 'none';
        });
    }

    accordionItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            hideAllImages();

            const imageId = `image-${item.id}`;
            const correspondingImage = document.getElementById(imageId);
            if (correspondingImage) {
                correspondingImage.style.display = 'block';
            }
        });
    });
});
