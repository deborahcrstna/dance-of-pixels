document.addEventListener("DOMContentLoaded", function() {
    const danceFloor = document.querySelector('.dance-floor');
  
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    for (let i = 0; i < 200; i++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
  
      pixel.addEventListener('mouseover', function() {
        pixel.style.backgroundColor = getRandomColor();
      });
  
      danceFloor.appendChild(pixel);
    }
  });
  