const btn = document.querySelector(".hamburger");
const nav = document.querySelector(".pageNav");
btn.addEventListener("click", () => {
  nav.classList.toggle("open");
});