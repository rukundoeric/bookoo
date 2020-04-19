/* eslint-disable */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
(function ($) {
  const $window = $(window);

  // :: Preloader Active Code
  $window.on('load', () => {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });

  // :: Fullscreen Active Code
  $window.on('resizeEnd', () => {
    $('.full_height').height($window.height());
  });

  $window.on('resize', function () {
    if (this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function () {
      $(this).trigger('resizeEnd');
    }, 300);
  }).trigger('resize');

  // :: Sticky Active Code
  $window.on('scroll', () => {
    if ($window.scrollTop() > 20) {
      $('.header-area').addClass('sticky');
    } else {
      $('.header-area').removeClass('sticky');
    }
  });

  // :: Tooltip Active Code
  $('[data-toggle="tooltip"]').tooltip();

  // :: Owl Carousel Active Code
  if ($.fn.owlCarousel) {
    const welcomeSlide = $('.hero-slides');

    welcomeSlide.owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 7000, // Autoplay Timeout 1s = 1000ms
      smartSpeed: 2000,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
    });

    $('.hero-post-slide').owlCarousel({
      items: 3,
      margin: 30,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3500, // Autoplay Timeout 1s = 1000ms
      smartSpeed: 1000,
      center: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
      },
    });

    $('.world-catagory-slider, .world-catagory-slider2').owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3500, // Autoplay Timeout 1s = 1000ms
      smartSpeed: 2000,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });
  }

  // :: Gallery Menu Style Active Code
  $('.portfolio-menu button.btn').on('click', function () {
    $('.portfolio-menu button.btn').removeClass('active');
    $(this).addClass('active');
  });

  // :: Masonary Gallery Active Code
  if ($.fn.imagesLoaded) {
    $('.sonar-portfolio').imagesLoaded(() => {
      // filter items on button click
      $('.portfolio-menu').on('click', 'button', function () {
        const filterValue = $(this).attr('data-filter');
        $grid.isotope({
          filter: filterValue,
        });
      });
      // init Isotope
      var $grid = $('.sonar-portfolio').isotope({
        itemSelector: '.single_gallery_item',
        percentPosition: true,
        masonry: {
          columnWidth: '.single_gallery_item',
        },
      });
    });
  }

  // :: Magnific Popup Active Code
  if ($.fn.magnificPopup) {
    $('.gallery-img').magnificPopup({
      type: 'image',
    });
    $('.video-btn').magnificPopup({
      type: 'iframe',
    });
  }

  // :: MatchHeight Active Code
  if ($.fn.matchHeight) {
    $('.equalize').matchHeight({
      byRow: true,
      property: 'height',
    });
  }

  // :: CounterUp Active Code
  if ($.fn.counterUp) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000,
    });
  }

  // :: ScrollUp Active Code
  if ($.fn.scrollUp) {
    $.scrollUp({
      scrollSpeed: 1000,
      easingType: 'easeInOutQuart',
      scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>',
    });
  }

  // :: PreventDefault a Click
  $("a[href='#']").on('click', ($) => {
    $.preventDefault();
  });

  // :: wow Active Code
  if ($window.width() > 767) {
    new WOW().init();
  }

  /* Search Area */
  const search = document.getElementById('search');
  const searchWrapper = document.getElementById('search-wrapper');
  const closeIcon = document.getElementById('close-icon');
  search.onfocus = function () {
    searchWrapper.classList.add('search-expanded');
    this.addEventListener('transitionend', () => {
      closeIcon.style.display = 'block';
    });
  };
  search.onblur = function () {
    searchWrapper.classList.remove('search-expanded');
    closeIcon.classList.add('closing');
    this.addEventListener('transitionend', () => {
      closeIcon.classList.remove('closing');
      closeIcon.style.display = 'none';
    });
  };
  closeIcon.onclick = function () {
    this.classList.add('closing');
    document.activeElement.blur();
    setTimeout(() => {
      closeIcon.classList.remove('closing');
    }, 1000);
  };
}(jQuery));
