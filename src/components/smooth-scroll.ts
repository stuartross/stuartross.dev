export function initSmoothScroll(): void {
  document.addEventListener("click", (e) => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>(
      'a[href^="#"]'
    );
    if (!link) return;

    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const navHeight =
      document.getElementById("main-nav")?.offsetHeight ?? 0;

    const top =
      target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({ top, behavior: "smooth" });
  });
}
