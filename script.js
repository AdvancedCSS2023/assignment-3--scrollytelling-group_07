const imageContainer = document.querySelector('.image-container');
const scene1bigfish = document.querySelector('.scene1-fish img');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      scene1bigfish.classList.add('animate-fish');
    } else {
      scene1bigfish.classList.remove('animate-fish');
    }
  });
}, { threshold: 0.5 });

observer.observe(imageContainer);
