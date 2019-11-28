const getSailAnchor = () => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const ourId = item.getAttribute('href');
            if (ourId == '#') {
                return false;
            }
            document.querySelector('' + ourId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
};
  
export default getSailAnchor;