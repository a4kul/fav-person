// Optional: Add floating sparkles
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 30; i++) {
    let sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.top = `${Math.random() * 100}vh`;
    document.body.appendChild(sparkle);
  }
});
