window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timerRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timerRemaining % 60),
            minutes = Math.floor((timerRemaining / 60) % 60),
            hours = Math.floor(timerRemaining / 60 / 60);
            return {timerRemaining, hours, minutes, seconds};
    }

    function updateClock() {
        let timer = getTimeRemaining();
        
        if (timer.hours < 10 ? timerHours.textContent =`0${timer.hours}`: timerHours.textContent = timer.hours);
        if (timer.minutes < 10 ? timerMinutes.textContent =`0${timer.minutes}`: timerMinutes.textContent = timer.minutes);
        if (timer.seconds < 10 ? timerSeconds.textContent =`0${timer.seconds}`: timerSeconds.textContent = timer.seconds);

        if (timer.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        } else if (timer.timerRemaining < 0) {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }
    setInterval(updateClock, 1000);
}
  countTimer('22 december 2019');

  // Меню
  const toggleMenu = () => {
    const menu = document.querySelector('menu'),
          body = document.body;

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('close-btn') || target.tagName === 'A') {
        handlerMenu();
      }

      target = target.closest('.menu');
      if (target) {
        handlerMenu();
      } else if (!target) {
        menu.classList.remove('active-menu');
      }
    });
  };

  toggleMenu();

  // popup
  const togglePopup = () => {
      const popup = document.querySelector('.popup'),
            popupContent = document.querySelector('.popup-content'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                let fat = document.documentElement.clientWidth;
                console.log('fat: ', fat);

        if (fat >= 480) {
            popup.style.display = 'block';
            popupContent.animate([
                { transform: 'translateX(0px)' }, 
                { transform: 'translateX(-100px)' },
                { transform: 'translateX(100px)' },
                { transform: 'translateX(0px)' }
            ], {
                duration: 1000,
                iterations: 2
            });
        } else {
            popup.style.display = 'block';
        }
    });
});

    popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
    });
};

    togglePopup();

// табы
  const tabs = () => {
      const tabHeader = document.querySelector('.service-header'),
            tab = document.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', (event) => {
        let target = event.target;
        target = target.closest('.service-header-tab');
        
        if (target.classList.contains('service-header-tab')) {
            tab.forEach((item, i) => {
                if (item === target) {
                    toggleTabContent(i);
                }
            });
        }
    });
};

  tabs();

// слайдер
const slider = () => {
    const slide  = document.querySelectorAll('.portfolio-item'),
          btn    = document.querySelectorAll('.portfolio-btn'),
          dotContainer = document.querySelector('.portfolio-dots'),
          slider = document.querySelector('.portfolio-content');
    let   dot;

    let currentSlide = 0,
        interval;

    const createDots = () => {
      slide.forEach(() => {
        let newDot = document.createElement('li');
        newDot.classList.add('dot');
        dotContainer.appendChild(newDot);
        dot = document.querySelectorAll('.dot');
      });
    };
    createDots();

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };
    
    slider.addEventListener('click', (event) => {
      event.preventDefault();
      
      let target = event.target;;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      
      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }

      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', (event) => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        startSlide();
      }
    });

    startSlide();
  };
  slider();

  // фотографии
  const changePhoto = () => {
    const photoBlock = document.getElementById('command');

    let photoFunction = (target) => {
      let defaultSrc = target.src;
      target.src = target.dataset.img;
      target.dataset.img = defaultSrc;
    };

    photoBlock.addEventListener('mouseover', (event) => {
      let target = event.target;
      if (target.classList.contains('command__photo')) {
        photoFunction(target);
      }
    });

    photoBlock.addEventListener('mouseout', (event) => {
      let target = event.target;
      if (target.classList.contains('command__photo')) {
        photoFunction(target);
      }
    });
};

  changePhoto();

// калькулятор расчёта стоимости
const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcDay = document.querySelector('.calc-day'),
    calcCount = document.querySelector('.calc-count'),
    totalValue = document.getElementById('total');

  const countSum = () => {
    let total = 0,
      countValue = 1,
      dayValue = 1;
    const typeValue = calcType.options[calcType.selectedIndex].value,
      squareValue = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }

    if (typeValue && squareValue) {
      total = price * typeValue * squareValue * countValue * dayValue;
    }

    totalValue.textContent = total;
  };

  calcBlock.addEventListener('change', (event) => {
    let target = event.target;

    if (target.matches('select') || target.matches('input')) {
      countSum();
    }
  });

  calcBlock.addEventListener('input', (event) => {
    let target = event.target;
    if (target.classList.contains('calc-square') || target.classList.contains('calc-count') || target.classList.contains('calc-day')) {
      target.value = target.value.replace(/\D/g, '');
    }
  });
};

calc(100);
});