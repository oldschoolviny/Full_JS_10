const toggleMenu = () => {
    const menu = document.querySelector('menu'),
      body = document.body;
  
    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };
  
    body.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('close-btn') || target.tagName === 'A' ){
        menu.classList.remove('active-menu');
      }
  
      target = target.closest('menu');
      if (!target) {
        menu.classList.remove('active-menu');
      }
  
      target = event.target;
      target = target.closest('.menu');
      if (target) {
        handlerMenu();
      }
    });
};
  
export default toggleMenu;