// Music setup
const playButton = document.getElementById('playButton');
const audio = document.getElementById('backgroundMusic');

playButton.addEventListener('click', () => {
  audio.currentTime = 159; // Start from 2:39
  audio.play();

  // ✨ Add fade-out effect
  playButton.classList.add('fade-out');
});

// Slideshow logic
const slideshow = document.getElementById('slideshow');
const images = [
  'assets/img1.jpg',
  'assets/img2.jpg',
  'assets/img3.jpg',
  'assets/img4.jpg',
  'assets/img5.jpg'
];

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  slideshow.src = images[index];
}, 3000); // Change every 3 seconds
