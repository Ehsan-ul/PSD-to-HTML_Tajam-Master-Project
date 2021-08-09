$(document).ready(function () {
  // banner slick slider
  $('.banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 3000,
  });

  // team slick slider
  $('.team-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 3000,
  });

  // team-two slider
  $('.text-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-img',
  });
  $('.slider-img').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.text-slide',
    prevArrow: '.team-arrow-left',
    nextArrow: '.team-arrow-right',
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
  });

  // venobox
  $('.venobox').venobox({
    border: '10px', // default: '0'
    bgcolor: '#377dff', // default: '#fff'
    share: ['facebook', 'twitter', 'linkedin'], // default: []
    spinner: 'rotating-plane',
    spinColor: '#377dff',
    overlayColor: '#34495e',
  });
});
