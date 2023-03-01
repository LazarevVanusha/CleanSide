// const sliderContainer = document.querySelector('.slider-container')
// const slideRight = document.querySelector('.right-slide')
// const slideLeft = document.querySelector('.left-slide')
// const upButton = document.querySelector('.up-button')
// const downButton = document.querySelector('.down-button')
// const slidesLenght = slideRight.querySelectorAll('div').length


// let activeSlideIndex = 0

// slideLeft.style.top = `-${(slidesLenght - 1) * 100}vh`

// upButton.addEventListener('click', () => changeSlide('up'))
// downButton.addEventListener('click', () => changeSlide('down'))

// const changeSlide = (direction) => {
//     const sliderHeight = sliderContainer.clientHeight
//     if(direction === 'up') {
//         activeSlideIndex++
//         if (activeSlideIndex > slidesLenght - 1) {
//             activeSlideIndex = 0
//         }
//     } else if(direction === 'down') {
//         activeSlideIndex--
//         if(activeSlideIndex < 0) {
//             activeSlideIndex = slidesLenght - 1
//         }
        
//     }

//     slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight
//     }px)`

//     slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight
//     }px)`

// }

(function($) {
    // получаем доступ к элементу слайдера на странице
    var $dragMe = $(".dragme"),
    // к слайдеру
    $container = $(".sl-container"),
    // и картинке слева
    $viewAfter = $(".view-after");
    // используем свойство draggable из библиотеки с интерфейсом, чтобы получить координаты сдвига слайдера
    $dragMe.draggable({
        containment:".sl-container" ,
        drag: function() {
            // при перемещении слайдера меняем ширину картинки слева в стилях
            $viewAfter.css({
                width : parseFloat($(this).css('left')) + 5
                
            });
        }
    });
    (function($) {
        var $dragMe = $(".dragme"),
            $container = $(".sl-container"),
            $viewAfter = $(".view-after");
      
        $dragMe.draggable({
          containment: "parent",
          drag: function() {
            // получаем текущую позицию слайдера и ширину контейнера
            var sliderLeft = parseFloat($(this).css('left')),
                containerWidth = $container.width();
      
            // вычислите максимальное положение, в которое можно перетащить слайдер
            var maxSliderLeft = containerWidth * 0.6;
      
            // если слайдер находится за пределами максимального положения, ограничьте его
            if (sliderLeft > maxSliderLeft) {
              $(this).css('left', maxSliderLeft);
            }
      
            // обновляем ширину изображения слева в зависимости от положения слайдера
            $viewAfter.css({
              width: sliderLeft + 5
            });
          }
        });
      }) (jQuery);
    // добавляем реакцию на клик по картинке
    // $container.on("click", function(event) {
    //     // получаем координаты клика, чтобы сместить туда слайдер
    //     var eventLeft = event.pageX - $container.offset().left - 15;
    //     // плавно сдвигаем слайдер
    //     animateTo(eventLeft);
    // });
    // функция сдвига слайдера при клике, на входе получаем новые координаты границы картинок
    // function animateTo(_left) {
    //     // анимируем сдвиг слайдера
    //     $dragMe.animate({
    //         left: _left
    //     }, 'slow', 'linear');
    //     // и картинки
    //     $viewAfter.animate({
    //         width: _left
    //     }, 'slow', 'linear');
    // }
})(jQuery);