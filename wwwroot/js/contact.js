let mainImage = document.querySelector('.main-image img');
const thumbnails = document.querySelectorAll('.thumbnail img');

thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', () => {
        let src = thumbnail.getAttribute('src');
        mainImage.setAttribute('src', src);
    });
});