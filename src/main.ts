import "./styles/main.css";
import { initNav } from "./components/nav.ts";
import { initSmoothScroll } from "./components/smooth-scroll.ts";
import { initThemeToggle } from "./components/theme-toggle.ts";

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initSmoothScroll();
  initThemeToggle();
});
