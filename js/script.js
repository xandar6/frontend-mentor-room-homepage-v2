const btnOpenMenu = document.querySelector(".btn-open-menu");
const btnCloseMenu = document.querySelector(".btn-close-menu");
const primaryNav = document.querySelector(".primary-nav");
const navLinks = document.querySelectorAll(".primary-nav a");
const html = document.documentElement;
const body = document.body;
const overlay = document.querySelector(".overlay");

if (btnOpenMenu) {
  btnOpenMenu.addEventListener("click", () => setMenuOpen(true));
}

if (btnCloseMenu) {
  btnCloseMenu.addEventListener("click", () => setMenuOpen(false));
}

if (overlay) {
  overlay.addEventListener("click", () => setMenuOpen(false));
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

function setMenuOpen(isOpen) {
  if (!primaryNav || !overlay) return;

  primaryNav.classList.toggle("is-open", isOpen);
  overlay.classList.toggle("is-open", isOpen);
  html.classList.toggle("menu-open", isOpen);
  body.classList.toggle("menu-open", isOpen);
  btnOpenMenu?.setAttribute("aria-expanded", String(isOpen));
}
