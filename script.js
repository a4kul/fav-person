// Music setup
const playButton = document.getElementById('playButton');
const audio = document.getElementById('backgroundMusic');

playButton.addEventListener('click', () => {
  audio.currentTime = 159; // Start from 2:39
  audio.play();
});

// Slideshow logic
const slideshow = document.getElementById('slideshow');
const images = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg'
];

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  slideshow.src = images[index];
}, 3000); // Change every 3 seconds
