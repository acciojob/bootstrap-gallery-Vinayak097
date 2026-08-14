const gallaryImages = document.querySelectorAll('.card-img-top');

const carouselElement =
    document.getElementById("galleryCarousel");

gallaryImages.forEach((e, index) => {

    e.addEventListener('click', () => {

        const carousel =
            bootstrap.Carousel.getOrCreateInstance(
                carouselElement
            );

        carousel.to(index);

    });

});