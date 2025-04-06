const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('bgMusic');

playBtn.addEventListener('click', () => {
  audio.currentTime = 159; // Start at 2:39
  audio.play();
  playBtn.style.display = 'none';
});

// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 3000);

// Flowers
const flowerContainer = document.getElementById('flower-container');
const flowerEmojis = ['🌸','💐','🌷','🌺','🌼','🌻'];

for (let i = 0; i < 25; i++) {
  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.innerText = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
  flower.style.left = `${Math.random() * 90 + 5}%`;
  flower.style.top = `${Math.random() * 60 + 20}px`;
  flower.style.animationDelay = `${Math.random() * 3}s`;
  flowerContainer.appendChild(flower);
}
