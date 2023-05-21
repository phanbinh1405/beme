var swiper = new Swiper(".top-how__slide", {
	slidesPerView: 1.22,
	centeredSlides: true,
	spaceBetween: 24,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
  autoplay: {
    delay: 5000,
  },
});


$('.top-media__list').slick({
  dots: false,
	arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

