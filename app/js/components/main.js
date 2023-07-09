const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3500,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1050: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
});

const parallax = document.querySelectorAll('[data-paralax]');
const parallax1 = document.querySelector('[data-paralax1]');
const parallax2 = document.querySelector('[data-paralax2]');

if (document.documentElement.clientWidth > 1300) {
  window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    parallax1.style.transform = 'translate(-' + x * 5 + 'px, -' + y * 5 + 'px)';
    parallax2.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
    parallax.forEach(el => {
      el.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    });

  });
}