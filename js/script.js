$(function() {

	// 1 Dropdown Menu
	$('.dropdown').each(function() {
		$(this).on('click', function() {
			$(this)
				.children('.menu')
				.slideToggle(500);
		});
	}); // end of dropdown menu


	// 2 Hide menu on scroll
	$(window).on('scroll', function() {
		var menu = $('.menu');
		menu.slideUp(500);
	}); // end hide menu on scroll


	// 3 Slider
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


	// 4 Smooth Scrolling on internal links
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	}); // end Smooth Scrolling

});
