const swiperHotel = new Swiper('.swiper-hotel', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});

const sliderReviews = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: ' .reviews-slider__button--next',
    prevEl: ' .reviews-slider__button--prev',
  },
});