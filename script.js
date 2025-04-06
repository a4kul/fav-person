const btn = document.getElementById("playBtn");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {
  music.play();
  btn.textContent = "Playing 🎵";
});
