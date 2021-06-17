const btn = document.querySelector(".hamburger");
const nav = document.querySelector(".pageNav");
const line1 = document.querySelector("#line1");
const line2 = document.querySelector("#line2");
const line3 = document.querySelector("#line3");
btn.addEventListener("click", () => {
  nav.classList.toggle("open");
  btn.classList.toggle("hamAni");
  line1.classList.toggle("line1");
  line2.classList.toggle("line2");
  line3.classList.toggle("line3");
});

