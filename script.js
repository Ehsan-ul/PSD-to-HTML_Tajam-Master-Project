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

  // venobox
  $('.venobox').venobox({
    border: '10px', // default: '0'
    bgcolor: '#377dff', // default: '#fff'
    share: ['facebook', 'twitter', 'linkedin'], // default: []
    spinner: 'rotating-plane',
    spinColor: '#377dff',
    overlayColor: '#34495e',
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
});
