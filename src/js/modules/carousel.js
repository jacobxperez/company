/* JavaScript Carousel
 * <https://github.com/jacobxperez/javascript-carousel>
 * Copyright (C) 2023 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/
class Carousel {
    constructor({
        carouselSelector = '[data-carousel]',
        slideSelector = '[data-slide]',
        controlsSelector = '[data-controls]',
        tabSelector = '[data-tab]',
        intervalTime = 5000,
        lazyLoadThreshold = 2,
    } = {}) {
        this.carousel = document.querySelector(carouselSelector);
        if (!this.carousel) {
            throw new Error('Carousel element not found in the DOM');
        }
        this.slides = this.carousel.querySelectorAll(slideSelector);
        this.controls =
            this.carousel.querySelector(controlsSelector) ??
            this.#createControls();
        this.tabs = Array.from(this.controls.querySelectorAll(tabSelector));
        this.button = document.createElement('button');
        this.intervalTime = intervalTime;
        this.lazyLoadThreshold = lazyLoadThreshold;
        this.currentIndex = 0;
        this.indicators = false;
        this.paused = true;
        this.#initialize();
    }

    // Initialization methods
    async #initialize() {
        await this.#preloadImages();
        this.#cycleSlides();
        this.controls.addEventListener(
            'click',
            this.#handleControls.bind(this)
        );
        this.tabs.forEach((tab, index) =>
            tab.setAttribute('data-index', index)
        );
    }

    #createControls() {
        const controls = document.createElement('nav');
        controls.setAttribute('data-controls', '');
        this.carousel.appendChild(controls);
        return controls;
    }

    async #preloadImages() {
        const promises = Array.from(this.slides)
            .slice(0, this.lazyLoadThreshold)
            .map((slide) => {
                const image = slide.querySelector('img');
                if (!image) return;
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = image.src;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });
        await Promise.all(promises);
    }

    // Slide cycling methods
    #cycleTabs() {
        const currentTab = this.controls.querySelector(
            `[data-index="${this.currentIndex}"]`
        );
        const prevTab = this.controls.querySelector(`[data-state="active"]`);
        currentTab.setAttribute('data-state', 'active');
        prevTab?.removeAttribute('data-state');
        requestAnimationFrame(() => {
            this.tabs
                .filter((tab) => ![currentTab, prevTab].includes(tab))
                .forEach((tab) => tab.removeAttribute('data-state'));
        });
    }

    #cycleSlides() {
        const currentSlide = this.slides[this.currentIndex];
        currentSlide.setAttribute('data-state', 'current');
        requestAnimationFrame(() => {
            Array.from(this.slides)
                .filter((slide) => slide !== currentSlide)
                .forEach((slide) => slide.removeAttribute('data-state'));
        });
        if (this.indicators) {
            this.#cycleTabs();
        }
    }

    #changeSlide(direction) {
        if (direction === 'next') {
            this.currentIndex++;
            if (this.currentIndex > this.slides.length - 1) {
                this.currentIndex = 0;
            }
        } else if (direction === 'prev') {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.slides.length - 1;
            }
        }
        this.#cycleSlides();
    }

    // Control and indicator methods
    #handleControls(e) {
        const target = e.target;
        if (target.matches('[data-button="next-slide"]')) {
            this.#changeSlide('next');
            this.#resume();
        } else if (target.matches('[data-button="prev-slide"]')) {
            this.#changeSlide('prev');
            this.#resume();
        } else if (target.matches('[data-index]')) {
            this.#pause();
            this.currentIndex = Number(target.getAttribute('data-index'));
            this.#cycleSlides();
        }
    }

    addControls() {
        const prev = this.button.cloneNode(true);
        const next = this.button.cloneNode(true);
        prev.setAttribute('data-button', 'prev-slide');
        next.setAttribute('data-button', 'next-slide');
        this.controls.appendChild(prev);
        this.controls.appendChild(next);

        return this;
    }

    addIndicators() {
        const indicator = document.createElement('div');
        indicator.setAttribute('data-indicator', 'tabs');

        for (let i = 0; i < this.slides.length; i++) {
            const indicatorButton = this.button.cloneNode(true);
            indicatorButton.setAttribute('data-index', i);
            indicatorButton.setAttribute('data-tab', 'indicator');
            indicator.appendChild(indicatorButton);
        }

        this.controls.appendChild(indicator);

        this.indicators = true;

        return this;
    }

    // Touch control methods
    addTouchControls() {
        this.carousel.addEventListener(
            'touchstart',
            this.#handleTouchStart.bind(this)
        );
        this.carousel.addEventListener(
            'touchmove',
            this.#handleTouchMove.bind(this)
        );
        this.carousel.addEventListener(
            'touchend',
            this.#handleTouchEnd.bind(this)
        );

        return this;
    }

    #handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
        this.touchEndX = this.touchStartX;
    }

    #handleTouchMove(e) {
        this.touchEndX = e.touches[0].clientX;
    }

    #handleTouchEnd() {
        if (
            typeof this.touchStartX !== 'undefined' &&
            typeof this.touchEndX !== 'undefined'
        ) {
            const touchDistance = this.touchEndX - this.touchStartX;

            if (touchDistance > 0) {
                this.#changeSlide('prev');
                this.#resume();
            } else if (touchDistance < 0) {
                this.#changeSlide('next');
                this.#resume();
            }
        }
    }

    // Keyboard control methods
    addKeyboardControls() {
        document.addEventListener('keydown', this.#handleKeyDown.bind(this));
        return this;
    }

    #handleKeyDown(e) {
        switch (e.key) {
            case 'ArrowLeft':
                this.#changeSlide('prev');
                this.#resume();
                break;
            case 'ArrowRight':
                this.#changeSlide('next');
                this.#resume();
                break;
            default:
                break;
        }
    }

    // Start/pause/stop methods
    start(intervalTime = this.intervalTime) {
        this.paused = false;
        this.interval = setInterval(() => {
            this.#changeSlide('next');
        }, intervalTime);

        return this;
    }

    #pause() {
        this.paused = true;
        clearInterval(this.interval);

        return this;
    }

    #resume() {
        this.#pause().start();

        return this;
    }

    // #stop() {
    //     this.#pause();
    //     this.currentIndex = 0;
    //     this.#cycleSlides();

    //     return this;
    // }
}

export {Carousel};
