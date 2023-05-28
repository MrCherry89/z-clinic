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

  $(".certificates-slider").slick({
    dots: false,
    arroews: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    prevArrow: $(".certificates-slider-wrap  .slider-navigation .slick-prev"),
    nextArrow: $(".certificates-slider-wrap  .slider-navigation .slick-next"),
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

  $(".tab-menu li a").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".tab-menu").find("li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-item").removeClass("active");
    $(".tab-content-item").eq(index).addClass("active");
  });

  $(".drop-item").on("click", function (e) {
    e.stopPropagation();
    $(this).find(".drop-menu-wrap").toggleClass("open");
    $(this).find(".arrow img").toggleClass("rotate");
    $("body").toggleClass("shadow");
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
    $(".main-menu").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });

  $(".sub-menu li").click(function () {
    $(this).find(".sub-menu2").toggleClass("show");
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
});
