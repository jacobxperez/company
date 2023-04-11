/* @license
 * Rams <https://github.com/jacobxperez/rams/>
 * Copyright (C) 2023 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {Carousel} from './modules/carousel.js';
import {toggle} from './modules/toggle';

toggle();
// Example usage
const carousel = new Carousel({
    // all options for the carousel
    // carouselSelector: '[data-carousel]',
    // slideSelector: '[data-slide]',
    // controlsSelector: '[data-controls]',
    // tabSelector: '[data-tab]',
    // intervalTime: 5000,
    // lazyLoadThreshold: 2,
})
    .addControls()
    .addIndicators()
    .addTouchControls()
    .addKeyboardControls()
    .start();
