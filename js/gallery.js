

(() => {
  //gallery dynamic animation

  const galleryImages = document.querySelectorAll('.gallery-image');
  galleryImages.forEach(image => {
    image.addEventListener('mouseover', () => {
      image.classList.toggle('scale-image');
    })
    image.addEventListener('mouseout', () => {
    image.classList.remove('scale-image');
  });
  });



})();