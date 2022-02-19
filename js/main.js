$(".menu-hamburguer").on('click', function() {
    $(".menu-itens").toggleClass("nav-open");
});

// PUXANDO DO HTML
// var typed = new Typed('#typed', {
//   stringsElement: '#typed-strings',
//   loop: true,
//   typeSpeed: 50
// });

// COLOCANDO AS PALAVRAS AQUI
// var typedr = new Typed('.element', {
//   strings: [
//     'Essas são as palavras que irão aparecer',
//     'First sentence.',
//     'Second sentence.',
//     'Have a great day!',
//     'dsdsfgfd',
//   ],
//   stringsElement: null,
//   typeSpeed: 50,
//   loop: true
// });

var wordsfooter = new Typed('.words', {
  strings: [
    'Aqui são as palavras onde irão no footer',
    'Carinho',
    'Amor'
  ],
  loop: true,
  typeSpeed: 150,
  stringsElement: null
})

// Carroussel parceiros
const parceiros = new Swiper('.group-parceiros', {
  speed: 300,
  slidePerView: 2,
  spaceBetween: 20,
  effect: 'cards',
  centerInsufficientSlides: true,
  centeredSlides: true,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // }
});
