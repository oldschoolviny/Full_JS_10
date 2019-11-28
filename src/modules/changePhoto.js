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
  
export default changePhoto;