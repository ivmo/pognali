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
});