$(document).ready(function () {
  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
  });

  $(".accordion-list-item .item-heading").on("click", function (e) {
    e.preventDefault();
    if ($(this).find("span").hasClass("rotate")) {
      $(this).find("span").removeClass("rotate");
    } else {
      $(".accordion-list-item span").removeClass("rotate");
      $(this).find("span").addClass("rotate");
    }
    $(".accordion-list-item").removeClass("opened");
    $(".item-body").removeClass("active");
    $(this)
      .closest(".accordion-list-item")
      .find(".item-body")
      .addClass("active");
    $(this).closest(".accordion-list-item").addClass("opened");
    $(".item-body:not(.active)").slideUp();
    $(".accordion-list-item:not(.opened)").removeClass("active");
    $(this).closest(".accordion-list-item").find(".item-body").slideToggle();
    $(this).closest(".accordion-list-item").toggleClass("active");
  });

  $(".blog-slider").slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: $(
      ".blog-slider-wrap .title-wrap .slider-navigation .slick-prev"
    ),
    nextArrow: $(
      ".blog-slider-wrap .title-wrap .slider-navigation .slick-next"
    ),
  });

  $(".blog-slider2").slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: $(
      ".blog-slider-wrap .title-wrap .slider-navigation .slick-prev"
    ),
    nextArrow: $(
      ".blog-slider-wrap .title-wrap .slider-navigation .slick-next"
    ),
    asNavFor: ".blog-slider-preview",
  });
  $(".blog-slider-preview").slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    fade: true,
  });

  $(".colleagues-slider").slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: $(
      ".colleagues-slider-wrap .title-wrap .slider-navigation .slick-prev"
    ),
    nextArrow: $(
      ".colleagues-slider-wrap .title-wrap .slider-navigation .slick-next"
    ),
  });

  $(".center-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    centerPadding: "20px",
    infinite: true,
    prevArrow: $(".certificates-slider-wrap  .slider-navigation .slick-prev"),
    nextArrow: $(".certificates-slider-wrap  .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  });

  $(".reviews-slider").slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: $(
      ".reviews-slider-wrap .title-wrap .slider-navigation .slick-prev"
    ),
    nextArrow: $(
      ".reviews-slider-wrap .title-wrap .slider-navigation .slick-next"
    ),
  });

  $(".walk-clinic-slider").slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    arrows: true,
    prevArrow: $(".walk-clinic-slider-wrap  .slider-navigation .slick-prev"),
    nextArrow: $(".walk-clinic-slider-wrap  .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".sales-slider").slick({
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    fade: true,
    prevArrow: $(".sales-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".sales-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".unique-slider").slick({
    dots: false,
    infinite: true,
    speed: 700,

    slidesToShow: 2,
    prevArrow: $(".unique-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".unique-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".unique-slider2").slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    prevArrow: $(".unique-slider-wrap2 .slider-navigation .slick-prev"),
    nextArrow: $(".unique-slider-wrap2 .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".unique-slider3").slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    prevArrow: $(".unique-slider-wrap3 .slider-navigation .slick-prev"),
    nextArrow: $(".unique-slider-wrap3 .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".unique-slider4").slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    prevArrow: $(".unique-slider-wrap4 .slider-navigation .slick-prev"),
    nextArrow: $(".unique-slider-wrap4 .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  $(".unique-slider5").slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    prevArrow: $(".unique-slider-wrap5 .slider-navigation .slick-prev"),
    nextArrow: $(".unique-slider-wrap5 .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".work-slider").slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 700,
    draggable: false,
    swipe: false,
    slidesToShow: 1,
    prevArrow: $(".work-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".work-slider-wrap .slider-navigation .slick-next"),
  });

  $(".tab-menu li a").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".tab-menu").find("li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-item").removeClass("active");
    $(".tab-content-item").eq(index).addClass("active");
  });

  $(".tab-menu2 li a").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".tab-menu2").find("li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content2 .tab-content-item").removeClass("active");
    $(".tab-content2 .tab-content-item").eq(index).addClass("active");
  });

  $(".drop-item").on("click", function (e) {
    e.stopPropagation();
    $(this).find(".drop-menu-wrap").toggleClass("open");
    $(this).find(".arrow img").toggleClass("rotate");
    if ($(window).width() >= 1025) {
      $("body").toggleClass("shadow");
    }
    if ($(window).width() <= 1025) {
      $(this).find(".arrow").toggleClass("purple");
    }
  });

  $(".drop-menu-wrap").on("click", function (e) {
    e.stopPropagation();
  });

  $(document).on("click", function () {
    $(".drop-menu-wrap").removeClass("open");
    $(this).find(".arrow img").removeClass("rotate");
    $("body").removeClass("shadow");
  });

  $(".drop-menu").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("is-active");
    $(".drop-menu-wrap").removeClass("open");
    $(".main-menu").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });

  $(".sub-menu > li > a").click(function (e) {
    e.preventDefault();
    $(this).closest("li").find(".sub-menu2").toggleClass("show");
  });

  $(".form").validate({
    rules: {
      phone: {
        required: true,
      },
      name: {
        required: true,
      },
    },
  });

  $(".sign-up").validate({
    rules: {
      phone: {
        required: true,
      },
      name: {
        required: true,
      },
    },
  });

  $(".answer-form").validate({
    rules: {
      phone: {
        required: true,
      },
      name: {
        required: true,
      },
    },
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999) 999 - 99 - 99",
  });

  $.fn.BeerSlider = function (options) {
    options = options || {};
    return this.each(function () {
      new BeerSlider(this, options);
    });
  };

  $(".beer-slider").each(function (index, el) {
    $(el).BeerSlider({
      start: $(el).data("start"),
    });
  });

  $(".order-call-wrap > .hide-info3 .order-call").on("click", function (e) {
    e.stopPropagation();
    $(".hide-info").removeClass("open");
    $(this).closest(".order-call-wrap").find(".hide-info").addClass("open");
    $("body").addClass("shadow2");
  });

  $(".order-call-wrap .hide-info3").on("click", function (e) {
    e.stopPropagation();
  });

  $(".order-call-wrap > .phone-icon").on("click", function (e) {
    e.stopPropagation();
    $(this).closest(".order-call-wrap").find(".hide-info3").toggleClass("open");
    $("body").toggleClass("shadow2");
    $(".hide-info").removeClass("open");
  });

  $(".order-call-wrap .hide-info3").on("click", function (e) {
    e.stopPropagation();
  });

  $(document).on("click", function () {
    $(".hide-info3").removeClass("open");
    $("body").removeClass("shadow2");
  });

  $(".order-call-wrap > .purple2-btn").on("click", function (e) {
    e.stopPropagation();
    $(this).closest(".order-call-wrap").find(".hide-info").toggleClass("open");
    $("body").toggleClass("shadow2");
  });

  $(".order-call-wrap .hide-info").on("click", function (e) {
    e.stopPropagation();
  });

  $(document).on("click", function () {
    $(".hide-info").removeClass("open");
    $(".hide-info2").removeClass("open");
    $("body").removeClass("shadow2");
  });

  $(".form").on("submit", function (e) {
    e.preventDefault();
    if ($(".form").valid()) {
      $(this).closest(".hide-info").removeClass("open");
      $(".hide-info2").addClass("open");
    }
  });

  $(".search-wrapper .search-icon").on("click", function (e) {
    e.stopPropagation();
    $(this).closest(".search-wrapper").find(".hide-block").addClass("open");
    $("body").toggleClass("shadow2");
  });

  $(".search-wrapper").on("click", function (e) {
    e.stopPropagation();
  });

  $(document).on("click", function () {
    $(".hide-block").removeClass("open");
    $("body").removeClass("shadow2");
  });

  $(".search-form button").on("click", function (e) {
    e.preventDefault();
    $(".hide-block").removeClass("open");
    $("body").removeClass("shadow2");
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 68) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });

  $(".search-wrapper .search-form input").on("input", function () {
    $(".hide2-block").addClass("open");
  });
});
