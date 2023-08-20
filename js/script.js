// toggle class aktif
const navbarnav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav //
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
