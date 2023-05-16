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
var swiper = new Swiper(".top-media", {
	slidesPerView: 'auto',
  loop: true,
	centeredSlides: true,
	spaceBetween: 0,
  autoplay: {
    delay: 5000,
  },
});
