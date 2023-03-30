const sliders = document.querySelectorAll('.slider');

const slider = () => {
    sliders.forEach((slider) => {
        const slides = slider.querySelectorAll('.slide');
        const totalSlides = slides.length;
        const imgCache = [];
        let currIndex = 0;
        let intervalTime = 5000;
        let sliderInterval;

        const cycleItems = () => {
            const currSlide = slides[currIndex];

            slides.forEach((slide) => {
                slide.style.visibility = 'hidden';
                slide.style.zIndex = 1;
                slide.style.opacity = 0;
            });

            currSlide.style.visibility = 'visible';
            currSlide.style.zIndex = 5;
            currSlide.style.opacity = 1;
            currSlide.style.transition = 'all 0.5s ease-in-out 0s';
        };

        const changeSlide = (direction) => {
            if (direction === 'next') {
                currIndex += 1;
                if (currIndex > totalSlides - 1) {
                    currIndex = 0;
                }
            } else if (direction === 'prev') {
                currIndex -= 1;
                if (currIndex < 0) {
                    currIndex = totalSlides - 1;
                }
            }

            cycleItems();
        };

        const startSlider = (time) => {
            clearInterval(sliderInterval);

            intervalTime = time || intervalTime;

            sliderInterval = setInterval(() => {
                changeSlide('next');
            }, intervalTime);
        };

        const preloadImages = () => {
            for (const slide of slides) {
                const imgSrc = slide.querySelector('img').src;
                const imgPromise = new Promise((resolve) => {
                    const img = new Image();
                    img.src = imgSrc;
                    img.onload = resolve;
                });
                imgCache.push(imgPromise);
            }
            return Promise.all(imgCache);
        };

        preloadImages().then(() => {
            cycleItems();
            startSlider();
        });

        const slideBtnContainer = slider.querySelector('.slider-nav');

        slideBtnContainer.addEventListener('click', (event) => {
            const btn = event.target;
            if (btn.classList.contains('next-slide')) {
                changeSlide('next');
                startSlider(8000);
            } else if (btn.classList.contains('prev-slide')) {
                changeSlide('prev');
                startSlider(8000);
            }
        });
    });
};

export {sliders, slider};
