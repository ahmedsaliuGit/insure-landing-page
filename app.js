const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", (event) => {
  nav.classList.toggle("nav--visible");
  event.currentTarget.classList.toggle("open-nav");
});
