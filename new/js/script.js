/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

jQuery(function ($) {
	'use strict';

	/* ----------------------------------------------------------- */
	/*  Fixed header
	/* ----------------------------------------------------------- */
	$(window).on('scroll', function () {

		// fixedHeader on scroll
		function fixedHeader() {
			var headerTopBar = $('.header-one').outerHeight();
			var headerOneTopSpace = $('.header-one .logo-area').outerHeight();

			var headerOneELement = $('.header-one .site-navigation');
			var headerTwoELement = $('.header-two .site-navigation');

			if ($(window).scrollTop() > headerTopBar + headerOneTopSpace) {
				$(headerOneELement).addClass('navbar-fixed');
				$('.header-one').css('margin-bottom', headerOneELement.outerHeight());
			} else {
				$(headerOneELement).removeClass('navbar-fixed');
				$('.header-one').css('margin-bottom', 0);
			}
			if ($(window).scrollTop() > headerTopBar) {
				$(headerTwoELement).addClass('navbar-fixed');
				$('.header-two').css('margin-bottom', headerTwoELement.outerHeight());
			} else {
				$(headerTwoELement).removeClass('navbar-fixed');
				$('.header-two').css('margin-bottom', 0);
			}
		}
		fixedHeader();


		// Count Up
		function counter() {
			var oTop;
			if ($('.counterUp').length !== 0) {
				oTop = $('.counterUp').offset().top - window.innerHeight;
			}
			if ($(window).scrollTop() > oTop) {
				$('.counterUp').each(function () {
					var $this = $(this),
						countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
					}, {
						duration: 1000,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
						}
					});
				});
			}
		}
		counter();


		// scroll to top btn show/hide
		function scrollTopBtn() {
			var scrollToTop = $('#back-to-top'),
				scroll = $(window).scrollTop();
			if (scroll >= 50) {
				scrollToTop.fadeIn();
			} else {
				scrollToTop.fadeOut();
			}
		}
		scrollTopBtn();
	});


	$(document).ready(function () {


		// back to top
		function backToTop() {
			$('#back-to-top').on('click', function () {
				$('#back-to-top').tooltip('hide');
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		}
		backToTop();


		// banner-carousel
		function bannerCarouselOne() {
			$('.banner-carousel.banner-carousel-1').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: true,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
			$('.banner-carousel.banner-carousel-1').slickAnimation();
		}
		bannerCarouselOne();


		// banner Carousel Two
		function bannerCarouselTwo() {
			$('.banner-carousel.banner-carousel-2').slick({
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
		}
		bannerCarouselTwo();


		// pageSlider
		function pageSlider() {
			$('.page-slider').slick({
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
		}
		pageSlider();


		// Shuffle js filter and masonry
		function projectShuffle() {
			if ($('.shuffle-wrapper').length !== 0) {
				var Shuffle = window.Shuffle;
				var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
					itemSelector: '.shuffle-item',
					sizer: '.shuffle-sizer',
					buffer: 1
				});
				$('input[name="shuffle-filter"]').on('change', function (evt) {
					var input = evt.currentTarget;
					if (input.checked) {
						myShuffle.filter(input.value);
					}
				});
				$('.shuffle-btn-group label').on('click', function () {
					$('.shuffle-btn-group label').removeClass('active');
					$(this).addClass('active');
				});
			}
		}
		projectShuffle();


		// testimonial carousel
		function testimonialCarousel() {
			$('.testimonial-slide').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				speed: 600,
				arrows: false
			});
		}
		testimonialCarousel();


		// team carousel
		function teamCarousel() {
			$('.team-slide').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 4,
				slidesToScroll: 2,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
				responsive: [{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		}
		teamCarousel();


		// media popup
		function mediaPopup() {
			$('.gallery-popup').colorbox({
				rel: 'gallery-popup',
				transition: 'slideshow',
				innerHeight: '500'
			});
			$('.popup').colorbox({
				iframe: true,
				innerWidth: 600,
				innerHeight: 400
			});
		}
		mediaPopup();

	});


});

/* animation area */

$('.image_area_one').hover(hoverVideo_one, hideVideo_one);
function hoverVideo_one(e) {
  $('.isvideo')[0].play().catch(function(e) {
		console.log(e.message);
  }); 
  $('.card-top').hide();
}


function hideVideo_one(e) {
  $('.card-top')[0].pause().catch(function(e) {
		  console.log(e.message);
  }); 
  $('.isvideo').hide();
}

/*------------------- */
$('.image_area_two').hover(hoverVideo_two, hideVideo_two);
function hoverVideo_two(e) {
  $('.isvideo_two')[0].play().catch(function(e) {
		console.log(e.message);
  }); 
  $('.card_top_two').hide();
}


function hideVideo_two(e) {
  $('.card_top_two')[0].pause().catch(function(e) {
		  console.log(e.message);
  }); 
  $('.isvideo_two').hide();
}

/*------------------- */
$('.image_area_three').hover(hoverVideo_three, hideVideo_three);
function hoverVideo_three(e) {
  $('.isvideo_three')[0].play().catch(function(e) {
		console.log(e.message);
  }); 
  $('.card_top_three').hide();
}


function hideVideo_three(e) {
  $('.card_top_three')[0].pause().catch(function(e) {
		  console.log(e.message);
  }); 
  $('.isvideo_three').hide();
}

/*------------------- */
$('.image_area_four').hover(hoverVideo_four, hideVideo_four);
function hoverVideo_four(e) {
  $('.isvideo_four')[0].play().catch(function(e) {
		console.log(e.message);
  }); 
  $('.card_top_four').hide();
}


function hideVideo_four(e) {
  $('.card_top_four')[0].pause().catch(function(e) {
		  console.log(e.message);
  }); 
  $('.isvideo_four').hide();
}


/*------------------- */
$('.image_area_five').hover(hoverVideo_five, hideVideo_five);
function hoverVideo_five(e) {
  $('.isvideo_five')[0].play().catch(function(e) {
		console.log(e.message);
  }); 
  $('.card_top_five').hide();
}


function hideVideo_five(e) {
  $('.card_top_five')[0].pause().catch(function(e) {
		  console.log(e.message);
  }); 
  $('.isvideo_five').hide();
}

/*------------------- */
$('.image_area_six').hover(hoverVideo_six, hideVideo_six);
function hoverVideo_six(e) {
  $('.isvideo_six')[0].play().catch(function(e) {
		console.log(e.message);
  }); 
  $('.card_top_six').hide();
}


function hideVideo_six(e) {
  $('.card_top_six')[0].pause().catch(function(e) {
		  console.log(e.message);
  }); 
  $('.isvideo_six').hide();
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;

      });
    } // End if
  });
});

$(window).click(function(e) {

   if($(".navbar-collapse").hasClass("show")){
      $('.navbar-collapse').removeClass("show"); 
      e.preventDefault();
      }
});
 $('.navbar-collapse').click(function(event){
     event.stopPropagation();
 });

