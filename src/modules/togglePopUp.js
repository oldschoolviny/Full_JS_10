const togglePopup = () => {
    const popup = document.querySelector('.popup'),
      popupContent = document.querySelector('.popup-content'),
      popupBtn = document.querySelectorAll('.popup-btn');
  
    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        let fat = document.documentElement.clientWidth;
  
        if (fat >= 480) {
          popup.style.display = 'block';
          popupContent.animate([{
              transform: 'translateX(0px)'
            },
            {
              transform: 'translateX(-100px)'
            },
            {
              transform: 'translateX(100px)'
            },
            {
              transform: 'translateX(0px)'
            }
          ], {
            duration: 1000,
            iterations: 2
          });
        } else {
          popup.style.display = 'block';
        }
      });
    });
  
    popup.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('popup-close')) {
        popup.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popup.style.display = 'none';
        }
      }
    });
};
  
export default togglePopup;