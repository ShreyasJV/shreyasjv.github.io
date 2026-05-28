const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector("i");
const body = document.body;
const DEFAULT_THEME = "default";

function applyTheme(theme) {
  body.classList.remove("light", "dark-alt");
  icon.classList.remove("fa-gear", "fa-moon", "fa-sun");

  if (theme === "light") {
    body.classList.add("light");
    icon.classList.add("fa-moon"); // show moon → go to dark
    localStorage.setItem("theme", theme);
  }
  else if (theme === "dark-alt") {
    body.classList.add("dark-alt");
    icon.classList.add("fa-gear"); // show sun → go to light
    localStorage.setItem("theme", theme);
  }
  else {
    icon.classList.add("fa-sun"); // default dark base → show sun
    localStorage.removeItem("theme");
  }
}

toggle.addEventListener("click", () => {
  if (body.classList.contains("dark-alt")) {
    applyTheme(DEFAULT_THEME);
  }
  else if (body.classList.contains("light")) {
    applyTheme("dark-alt");
  }
  else {
    applyTheme("light");
  }
});

const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme || DEFAULT_THEME);
