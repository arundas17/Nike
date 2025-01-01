
  const container = document.querySelector('.carousel-container');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0; // Track the current visible item

  const updateCarousel = () => {
    const itemWidth = items[0].clientWidth; // Get the width of a single item
    container.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // Move the container
  };

  nextBtn.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

