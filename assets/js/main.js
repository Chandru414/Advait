/**
* Template Name: Techie - v4.9.1
* Template URL: https://bootstrapmade.com/techie-free-skin-bootstrap-3/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 20) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  // window.addEventListener('load', () => {
    // if (window.location.hash) {
      // if (select(window.location.hash)) {
        // scrollto(window.location.hash)
      // }
    // }
  // });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Testimonials slider
   */
  // new Swiper('.testimonials-slider', {
    // speed: 600,
    // loop: true,
    // autoplay: {
      // delay: 5000,
      // disableOnInteraction: false
    // },
    // slidesPerView: 'auto',
    // pagination: {
      // el: '.swiper-pagination',
      // type: 'bullets',
      // clickable: true
    // },
    // breakpoints: {
      // 320: {
        // slidesPerView: 1,
        // spaceBetween: 40
      // },

      // 1200: {
        // slidesPerView: 3,
        // spaceBetween: 40
      // }
    // }
  // });

  /**
   * Porfolio isotope and filter
   */
  // window.addEventListener('load', () => {
    // let portfolioContainer = select('.portfolio-container');
    // if (portfolioContainer) {
      // let portfolioIsotope = new Isotope(portfolioContainer, {
        // itemSelector: '.portfolio-item'
      // });

      // let portfolioFilters = select('#portfolio-flters li', true);

      // on('click', '#portfolio-flters li', function(e) {
        // e.preventDefault();
        // portfolioFilters.forEach(function(el) {
          // el.classList.remove('filter-active');
        // });
        // this.classList.add('filter-active');

        // portfolioIsotope.arrange({
          // filter: this.getAttribute('data-filter')
        // });
        // portfolioIsotope.on('arrangeComplete', function() {
          // AOS.refresh()
        // });
      // }, true);
    // }

  // });

  /**
   * Initiate portfolio lightbox 
   */
  // const portfolioLightbox = GLightbox({
    // selector: '.portfolio-lightbox'
  // });

  /**
   * Portfolio details slider
   */
  // new Swiper('.portfolio-details-slider', {
    // speed: 400,
    // loop: true,
    // autoplay: {
      // delay: 5000,
      // disableOnInteraction: false
    // },
    // pagination: {
      // el: '.swiper-pagination',
      // type: 'bullets',
      // clickable: true
    // }
  // });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    // AOS.init({
      // duration: 0,
      // easing: 'ease',
      // once: false,
      // mirror: false
    // })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()

/*--- banner animation----*/
var items = document.getElementsByClassName("fade-item");
		for (let i = 0; i < items.length; ++i) {
      fadeIn(items[i], i * 1000)
    }
    function fadeIn (item, delay) {
      setTimeout(() => {
        item.classList.add('fadein')
      }, delay)
    }

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

