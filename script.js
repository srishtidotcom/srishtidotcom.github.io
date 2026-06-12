// Small enhancements only: mobile navigation and persistent theme preference.
const root = document.documentElement;
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
  root.dataset.theme = "dark";
}

function syncThemeButtons() {
  const isDark = root.dataset.theme === "dark";
  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.textContent = isDark ? "Light" : "Dark";
  });
}

document.querySelectorAll(".theme-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    syncThemeButtons();
  });
});

syncThemeButtons();

document.querySelectorAll(".nav-toggle").forEach((button) => {
  const links = document.getElementById(button.getAttribute("aria-controls"));

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    links.classList.toggle("is-open", !isOpen);
  });
});
