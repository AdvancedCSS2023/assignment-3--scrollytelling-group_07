const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });
  
  const imageContainers = document.querySelectorAll('.section__image-container');
  imageContainers.forEach(container => observer.observe(container));
  