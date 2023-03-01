$('.gallery__slider').slick(
  {

    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/forward.svg"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/back.svg"></button>',
  }
);

$('.gallery__item-inner').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
  },
});

$('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active');
});
