const toggle = document.getElementById("theme-toggle");
const body = document.body;

toggle.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark-alt");
    localStorage.setItem("theme", "dark-alt");
  } else if (body.classList.contains("dark-alt")) {
    body.classList.remove("dark-alt");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
});

// Apply theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  if (savedTheme === "light") body.classList.add("light");
  else if (savedTheme === "dark-alt") body.classList.add("dark-alt");
}
