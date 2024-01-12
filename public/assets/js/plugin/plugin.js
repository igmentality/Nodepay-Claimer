$(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    /* niceSelect */
    $("select").niceSelect();
  
  // counter Up
  if (document.querySelector('.counter') !== null) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  }

  // partner-carousel
  $('.partner-carousel').slick({
    infinite: true,
    autoplay: true,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icon-double-left\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icon-double-right\"  aria-hidden='true'></i></button>",
    dots: false,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });

  // card-carousel
  $('.card-carousel-index').slick({
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icon-a-left-arrow\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icon-b-right-arrow\"  aria-hidden='true'></i></button>",
    dots: true,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
      {
        breakpoint: 993,
        settings: {
          arrows: false,
          dots: false
        }
      }
    ]
  });

  // testimonials-carousel
  $('.testimonials-carousel').slick({
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icon-a-left-arrow\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icon-b-right-arrow\"  aria-hidden='true'></i></button>",
    dots: true,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
      {
        breakpoint: 993,
        settings: {
          arrows: false,
          dots: false
        }
      }
    ]
  });

  // journey-carousel
  $('.journey-carousel').slick({
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icon-a-left-arrow\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icon-b-right-arrow\"  aria-hidden='true'></i></button>",
    dots: false,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
    ]
  });

  // feature-carousel
  $('.feature-carousel').slick({
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icon-a-left-arrow\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icon-b-right-arrow\"  aria-hidden='true'></i></button>",
    dots: true,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    }
  });

  // card-carousel
  $(".card-carousel").not('.slick-initialized').slick({
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icon-a-left-arrow\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icon-b-right-arrow\"  aria-hidden='true'></i></button>",
    dots: true,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false
        }
      }
    ]
  });

  // testimonials-slider
  $(".testimonials-slider").not('.slick-initialized').slick({
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icon-a-left-arrow\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icon-b-right-arrow\"  aria-hidden='true'></i></button>",
    dots: true,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
    ]
  });

  // testimonials-slider
  $(".testimonials-slider-two").not('.slick-initialized').slick({
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icon-a-left-arrow\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icon-b-right-arrow\"  aria-hidden='true'></i></button>",
    dots: false,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
    ]
  });

  // Range Slider
  if (document.querySelector('#loan-slide') !== null) {
    $("#loan-slide").slider({
      orientation: "horizontal",
      range: "min",
      min: 1000,
      max: 80000,
      value: 45000,
      slide: function (event, ui) {
        $("#loan-amount").val(" $" + ui.value);
      }
    });
    $("#loan-amount").val(" $" + $("#loan-slide").slider("value"));
  }
  if (document.querySelector('#home-loan-slide') !== null) {
    $("#home-loan-slide").slider({
      orientation: "horizontal",
      range: "min",
      min: 60000,
      max: 500000,
      value: 250000,
      slide: function (event, ui) {
        $("#home-loan-amount").val(" $" + ui.value);
      }
    });
    $("#home-loan-amount").val(" $" + $("#home-loan-slide").slider("value"));
  }
  if (document.querySelector('#down-payment-slide') !== null) {
    $("#down-payment-slide").slider({
      orientation: "horizontal",
      range: "min",
      min: 1000,
      max: 100000,
      value: 50000,
      slide: function (event, ui) {
        $("#down-payment-amount").val(" $" + ui.value);
      }
    });
    $("#down-payment-amount").val(" $" + $("#down-payment-slide").slider("value"));
  }
  if (document.querySelector('#personal-slide') !== null) {
    $("#personal-slide").slider({
      orientation: "horizontal",
      range: "min",
      min: 1000,
      max: 30000,
      value: 12000,
      slide: function (event, ui) {
        $("#personal-amount").val(" $" + ui.value);
      }
    });
    $("#personal-amount").val(" $" + $("#personal-slide").slider("value"));
  }
  
  /* Wow js */
  new WOW().init();

  });
});



