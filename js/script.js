$(document).ready(function () {
  $('.mobmenu').on('click', function () {
    $('.main-nav').addClass('main-nav--open');
    $('.nav-overlay').addClass('nav-overlay--open');
    $('body').addClass('modal-open');
  });

  $('.main-nav__close, .nav-overlay, .main-nav__item').on('click', function () {
    $('.main-nav').removeClass('main-nav--open');
    $('.nav-overlay').removeClass('nav-overlay--open');
    $('body').removeClass('modal-open');
  });

  $('.seeyourself').on('click', function() {
    $(this).toggleClass('seeyourself--opened');
    $('.add-text').slideToggle();
  });

  $('.accordion__title').on('click', function(evt) {
    evt.preventDefault();
    if ($(this).hasClass('accordion__title--active')) {
      $(this).removeClass('accordion__title--active');
      $(this).siblings('.accordion__content').slideUp(200);
      $('.accordion__btn').removeClass('accordion__btn--minus').addClass('accordion__btn--plus');
    } else {
      $('.accordion__btn').removeClass('accordion__btn--minus').addClass('accordion__btn--plus');
      $(this).find('.accordion__btn').removeClass('accordion__btn--plus').addClass('accordion__btn--minus');
      $('.accordion__title').removeClass('accordion__title--active');
      $(this).addClass('accordion__title--active');
      $('.accordion__content').slideUp(200);
      $(this).siblings('.accordion__content').slideDown(200);
    }
  });
  $('.accordion .accordion__item').first().children('.accordion__title').trigger('click');
});