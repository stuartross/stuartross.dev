export function initNav(): void {
  const toggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
  const nav = document.getElementById("main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when a nav link is clicked
  nav.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "A" && target.closest("#nav-links")) {
      nav.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // Close menu on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("nav-open")) {
      nav.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
}
