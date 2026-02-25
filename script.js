const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector("i");
const body = document.body;

function applyTheme(theme) {
  body.classList.remove("light", "dark-alt");
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
    icon.classList.add("fa-moon");
  }

  localStorage.setItem("theme", theme);
}

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

const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme || "dark-alt");
