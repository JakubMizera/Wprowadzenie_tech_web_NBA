const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const img5 = document.querySelector("#img5");
const img6 = document.querySelector("#img6");
const img7 = document.querySelector("#img7");
const img8 = document.querySelector("#img8");
const img9 = document.querySelector("#img9");

const lightBox = document.querySelector(".lightBox");
const lightBoxImage = document.querySelector("#lightBoxImage");
const body = document.querySelector("body");

img1.addEventListener("click", () => openLightBox("../images/jordanVsJazz.jpg"));
img2.addEventListener("click", () => openLightBox("../images/jordan.jpg"));
img3.addEventListener("click", () => openLightBox("../images/nbaPhoto.jpg"));
img4.addEventListener("click", () => openLightBox("../images/lebron.jpg"));
img5.addEventListener("click", () => openLightBox("../images/iverson2.jpg"));
img6.addEventListener("click", () => openLightBox("../images/butler.jpg"));
img7.addEventListener("click", () => openLightBox("../images/bookerFlexing.jpg"));
img8.addEventListener("click", () => openLightBox("../images/atlantaBlog.jpg"));
img9.addEventListener("click", () => openLightBox("../images/nbaWall.jpg"));



function openLightBox(imgSrc) {
    lightBoxImage.src = imgSrc;
    lightBox.classList.add("visible");
    body.style.overflow = "hidden";
}

lightBox.addEventListener("click", () => closeLightBox());

function closeLightBox() {
    lightBox.classList.remove("visible");
    body.style.overflow = "visible";
}