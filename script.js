const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector("i");
const body = document.body;

function applyTheme(theme) {
  body.classList.remove("light", "dark-alt");

  // Remove all icon states
  icon.classList.remove("fa-gear", "fa-moon", "fa-sun");

  if (theme === "light") {
    body.classList.add("light");
    icon.classList.add("fa-sun");
  } 
  else if (theme === "dark-alt") {
    body.classList.add("dark-alt");
    icon.classList.add("fa-gear");
  } 
  else {
    // true dark
    icon.classList.add("fa-moon");
  }

  localStorage.setItem("theme", theme);
}

// Cycle: monokai → dark → light → monokai
toggle.addEventListener("click", () => {
  if (body.classList.contains("dark-alt")) {
    applyTheme("dark");
  } 
  else if (body.classList.contains("light")) {
    applyTheme("dark-alt");
  } 
  else {
    applyTheme("light");
  }
});

// On page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  applyTheme(savedTheme);
} else {
  // DEFAULT = monokai
  applyTheme("dark-alt");
}
