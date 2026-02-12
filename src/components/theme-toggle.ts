const STORAGE_KEY = "theme";

type Theme = "light" | "dark";

function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : null;
}

function getPreferredTheme(): Theme {
  return getStoredTheme() ?? "dark";
}

function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  if (theme === "light") {
    root.setAttribute("data-theme", "light");
  } else {
    root.removeAttribute("data-theme");
  }
}

function updateToggleLabel(button: HTMLButtonElement, theme: Theme): void {
  const nextTheme = theme === "dark" ? "light" : "dark";
  button.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
  button.classList.toggle("theme-toggle--light", theme === "light");
}

export function initThemeToggle(): void {
  const button = document.getElementById(
    "theme-toggle"
  ) as HTMLButtonElement | null;
  if (!button) return;

  let current = getPreferredTheme();
  applyTheme(current);
  updateToggleLabel(button, current);

  button.addEventListener("click", () => {
    current = current === "dark" ? "light" : "dark";
    applyTheme(current);
    updateToggleLabel(button, current);
    localStorage.setItem(STORAGE_KEY, current);
  });
}
