const playButton = document.getElementById("playButton");
const song = document.getElementById("song");

playButton.addEventListener("click", () => {
  song.play();
  playButton.style.display = "none";
});

// Flower animation
const flowerContainer = document.querySelector(".flowers-container");
const flowerEmojis = ["🌸", "💐", "🌺", "🌷", "🌼"];

for (let i = 0; i < 10; i++) {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.textContent = flowerEmojis[i % flowerEmojis.length];
  flower.style.left = `${Math.random() * 100}%`;
  flower.style.top = `${Math.random() * 50 + 30}px`;
  flowerContainer.appendChild(flower);
}

// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[slideIndex].classList.add("active");
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 2500);
}

showSlides();
