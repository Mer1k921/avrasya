
//! Подключаем сам слайдер! = = = = = = = = = =
$(document).ready(function () {
   $('.slider').slick({
      arrows: true, //? Включить или выключить стрелки!
      dots: true, //? Точки для слайдера!
      slidesToShow: 1, //? Показывает сколько за раз будет показываться слайдеров!
      slidesToScroll: 1, //? Показывает сколько слайдеров будет прокручиваться за раз!
      speed: 1000, //? Отвечает за скорость прокрутки слайдера!
      infinite: true, //? Бесконечность слайдера!
      autoplay: true, //? Автопроигрование слайдера!
      autoplaySpeed: 1500, //? Скорость автопроигрования слайдера!
      pauseOnFocus: false, //? Пауза автопроигрования когда слайдер активен!
      pauseOnHover: false,  //? Пауза автопроигрования когда навели мышкой на слайдер!
      pauseOnDotsHover: false, //? Пауза автопроигрования когда навели мышкой на точки под слайдером!
      draggable: true, //? Свайп слайдера мышкой на ПК!
      swipe: true, //? Свайп слайдера пальцом на Touch Screen!
      touchThreshold: 10, //? Расстояние для свайпа слайдера (усилие)!
      touchMove: true, //? Возможность дёргать слайдер на Touch Screen!
      waitForAnimate: true, //? Не дожидая завершения анимации, прокручить слайдер быстро!
      centerMode: false, //?  Делает по центру слайдер(возможность для opacity и тд)!
      wariableWidth: false, //? Адаптивная ширина слайдера!
      rows: 1, //? Возможность сделать слайдер в два и более ряда!
      slidesPerRow: 1, //? Количество слайдов в ряду!
      fade: false, //? Более другая демонстрация слайдов, по типу замена одного на другой!
   });
});
$(document).ready(function () {
   $('.spoiler__content__main__title').click(function (event) {
      if ($('spoiler__content').hasClass('one')) {
         $('.spoiler__content__main__title').not($(this)).removeClass('active');
         $('.spoiler__content__main__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});

$(document).ready(function () {
   $('a[href^="#"]').click(function () {
      var target = $(this).attr('href');
      $('html,body').animate({
         scrollTop: $(target).offset().top
      }, 700);
   });
});