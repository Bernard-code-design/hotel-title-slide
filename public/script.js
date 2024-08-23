document.addEventListener("DOMContentLoaded", function () {
    const exploreButton = document.getElementById("exploreButton");

    exploreButton.addEventListener("click", function () {
        alert("Let's explore the hotel!");
    });

    const images = [
        'img/Ghana-Hotel.jpg',
        'img/hot-air-balloon.jpg',
        'img/phillipines-island.jpg',
        'img/UAE-hotel.jpg',
    ];

    let currentIndex = 0;

    function changeBackground() {
        const titleSlide = document.querySelector('.title-slide');
        titleSlide.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 4000);

    changeBackground();
});
