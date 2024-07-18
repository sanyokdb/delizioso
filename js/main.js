// Бургер
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", function () {
  nav.classList.toggle("nav--active");
  burger.classList.toggle("burger--active");
  document.body.classList.toggle("no-scroll");
});

$("#clientsSays").slick({
  infinite: true,
  slidesToShow: 1,
  fade: true,
  arrows: false,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3000,
  asNavFor: '#clientsThumbs'
});

$("#clientsThumbs").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  asNavFor: '#clientsSays',
  centerMode: true,
  focusOnSelect: true
});

