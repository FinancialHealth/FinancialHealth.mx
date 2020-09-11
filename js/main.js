(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle svg').toggleClass('fa-times fal fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
      }
    });
  });

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio2 isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio2-container').isotope({
      itemSelector: '.portfolio2-item'
    });
    $('#portfolio2-flters li').on( 'click', function() {
      $("#portfolio2-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  });
  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on( 'click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  });
  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  //Hide & Show List
	$(document).ready(function() {
		$('#icon').toggleClass("down")  ;
		$('#showmenu').click(function() {
			$('.menu').slideToggle("fast");
			$('.menu2').hide("fast");
			$('.menu3').hide("fast");
			$('.menu4').hide("fast");

		});
	});
  //Hide & Show List 2
	$(document).ready(function() {
		$('#showmenu2').click(function() {
			$('.menu').hide("fast");
			$('#icon2').toggleClass("down")  ;
			$('.menu2').slideToggle("fast");
			$('.menu3').hide("fast");
			$('.menu4').hide("fast");

		});
	});
  //Hide & Show List 3
	$(document).ready(function() {
		$('#showmenu3').click(function() {
			$('.menu2').hide("fast");
			$('.menu').hide("fast");
			$('.menu4').hide("fast");
			$('#icon3').toggleClass("down")  ;
			$('.menu3').slideToggle("fast");

		});
	});
  //Hide & Show List 4
	$(document).ready(function() {
		$('#showmenu4').click(function() {
			$('.menu2').hide("fast");
			$('.menu3').hide("fast");
			$('.menu').hide("fast");
			$('#icon4').toggleClass("down")  ;
			$('.menu4').slideToggle("fast");

		});
	});

  //scroll header
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }

    });
    $(".modal").on('click', function(){
        $("#modal-header").text(
            $(this).attr("data-title")
        );
    })

    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('.text-light').fadeOut();
      } else {
        $('.text-light').fadeIn();
      }
    });
    
    function centerModal() {
            $(this).css('display', 'block');
            var $dialog  = $(this).find(".modal-dialog"),
            offset       = ($(window).height() - $dialog.height()) / 2,
            bottomMargin = parseInt($dialog.css('marginBottom'), 10);

            // Make sure you don't hide the top part of the modal w/ a negative margin if it's longer than the screen height, and keep the margin equal to the bottom margin of the modal
            if(offset < bottomMargin) offset = bottomMargin;
            $dialog.css("margin-top", offset);
        }

        $(document).on('show.bs.modal', '.modal', centerModal);
        $(window).on("resize", function () {
            $('.modal:visible').each(centerModal);
        });



})(jQuery);
