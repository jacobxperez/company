/* Essentials <https://github.com/jacobxperez/essentials>
 * Copyright (C) 2020 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {

    // Slider
    $(function() {

    	// Slider
    	$(".slider").each(function() {
    		var slider = $(this),
    			slides = slider.find(".slide"),
    			totalSlides = slides.length,
    			currIndex = 0,
    			imgCache = [],
    			intervalTime = 5000,
    			sliderInterval;

    		// fades in and out slides
    		function cycleItems() {
    			var currSlide = slides.eq(currIndex);

    			slides.fadeOut(500).css("z-index", 1);
    			currSlide.fadeIn(500).css("z-index", 5);
    		} // end cycleItem

    		// Changes slides
    		function changeSlide() {
    			currIndex += 1;

    			if (currIndex > totalSlides - 1) {
    				currIndex = 0;
    			}

    			cycleItems();
    		} // end changeSlide

    		// Timer for changeSlide
    		function startSlider() {
    			clearInterval(sliderInterval);

    			sliderInterval = setInterval(function() {
    				changeSlide();
    			}, intervalTime);
    		} // end startSlider

    		// preload the img before starting the Slider
    		(function preloader() {
    			if (currIndex < totalSlides) {
    				// load img
    				imgCache[currIndex] = new Image();
    				imgCache[currIndex].src = slides.eq(currIndex).find("img").attr("src");
    				imgCache[currIndex].onload = function() {
    					currIndex += 1;
    					preloader();
    				};
    			} else {
    				currIndex = 0;
    				cycleItems();
    				startSlider();
    			}
    		}()); // end preloader

    		// click on next
    		$(".next-slide").on("click", function() {
    			currIndex += 1;

    			if (currIndex > totalSlides - 1) {
    				currIndex = 0;
    			}

    			cycleItems();
    			startSlider(intervalTime = 10000);
    		}); // end click of next

    		// click on prev
    		$(".prev-slide").on("click", function() {
    			currIndex -= 1;

    			if (currIndex < 0) {
    				currIndex = totalSlides - 1;
    			}

    			cycleItems();
    			startSlider(intervalTime = 10000);
    		}); // end click on prev
    	}); // end Slider

    }); // end Slider

    // Accordion v1.0
    (function () {
        const getAccordion = document.querySelectorAll(".js-accordion");

        for (let i = 0; i < getAccordion.length; i++) {

            getAccordion[i].addEventListener("click", function(e) {

                // toggle class show
                if (this.classList.contains("accordion-active") === false) {

                    this.classList.add("accordion-active");

                } else if (this.classList.contains("accordion-active") === true) {

                    this.classList.remove("accordion-active");

                } // end if block

                e.stopPropagation();
            });
        } // end for loop
    })();
    // end Accordion


    // Dropdown v1.0
    (function () {
        const getDropdown = document.querySelectorAll(".js-dropdown");

        for (let i = 0; i < getDropdown.length; i++) {
            getDropdown[i].addEventListener("click", function(e) {

                // toggle class show
                if (this.classList.contains("dropdown-active") === false) {

                    this.classList.add("dropdown-active");

                } else if (this.classList.contains("dropdown-active") === true) {

                    this.classList.remove("dropdown-active");

                } // end if block

                e.stopPropagation();
            });
        } // end for loop

        // Hide dropdown on window click
        document.addEventListener("click", function(e) {
            // check if target is not dropdown
            if (e.target !== getDropdown) {
                for (let i = 0; i < getDropdown.length; i++) {
                    // removes class show from all dropdowns
                    getDropdown[i].classList.remove("dropdown-active");
                } // end for loop
            }
        });
    })();
    // end Dropdown


    // Smooth Scroll v1.0
    (function () {
        const intLinks = document.querySelectorAll("a[href^='#']");

        for (let i = 0; i < intLinks.length; i++) {
            intLinks[i].addEventListener("click", function(e) {

                e.preventDefault();

                document.querySelector(this.getAttribute("href")).scrollIntoView({
                    behavior: "smooth"
                });

            });
        } // end for loop
    })();
    // end Smooth Scroll

}); // end Script
