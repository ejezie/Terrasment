const swiper = new Swiper(".swiper-one", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  autoplay: 
  {
    delay: 30000,
  },

  pagination: {
    el: ".page",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".next-one",
    prevEl: ".prev-one",
  },
});

const swiperTwo = new Swiper(".swiper-two", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed:1000,
  autoplay: 
  {
    delay: 1000,
  },

  // If we need pagination
  pagination: {
    el: ".pagination",
  },
});
