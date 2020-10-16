$(document).ready(() => {
  $('#slider_1 .slick').slick({
    autoplay: false,
    fade: false,
    autoplaySpeed: 0,
    speed: 500,
    dots: true,
  });
});

$(document).ready(() => {
  $('#slider_2 .slick').slick({
    autoplay: false,
    fade: false,
    autoplaySpeed: 0,
    speed: 500,
    dots: true,
  });
});

$(document).ready(() => {
  $('#slider_1 .slick').slick({
    autoplay: false,
    fade: false,
    autoplaySpeed: 0,
    speed: 500,
    dots: true,
  });
});

document.querySelectorAll('.con').forEach(el => {
  el.style.width = `${el.children.length * 100}%`;
  Array.from(el.children).forEach(img => {
    img.style.width = `${100 / el.children.length}%`
  })
})

$('#slider_1').slick('500px');

var $featuredNewsItemsList = $(this).find('.js-c-news-items__list');
$featuredNewsItemsList.on('init', function(event, slick, currentSlide, nextSlide) {
     $(window).trigger('resize');
});
$featuredNewsItemsList.slick({
     //settings
});
