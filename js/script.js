$(function() {

    // Variables
    const
        intLinks = document.querySelectorAll("a[href^='#']"),
        getDropdown = document.querySelectorAll(".dropdown"),
        dropdownLength = getDropdown.length;

    let
        i;

    // Dropdown
    for (i = 0; i < dropdownLength; i++) {

        getDropdown[i].addEventListener("click", function(e) {
            e.stopPropagation();

            if (!this.classList.contains("drop")) {

                this.classList.add("drop");

            } else {

                this.classList.remove("drop");

            }

        });

    }

    // Hide dropdown on window click
    document.addEventListener("click", function(e) {
        // check if target is not dropdown
        if (e.target != getDropdown) {

            for (i = 0; i < dropdownLength; i++) {
                // removes class drop from dropdown
                getDropdown[i].classList.remove("drop");
            }

        }

    });

    // Smooth scroll
    for (i = 0; i < intLinks.length; i++) {
        intLinks[i].addEventListener("click", function(e) {

            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });

        });

    }

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

});
