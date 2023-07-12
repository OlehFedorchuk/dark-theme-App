const btnEl = document.querySelector(".btn");
const bodyEl = document.querySelector("body");

if (localStorage.length !== 0) {
  bodyEl.classList.add("dark-theme");
}

btnEl.addEventListener("click", () => {
  bodyEl.classList.toggle("dark-theme");
  if (localStorage.length === 0) {
    localStorage.setItem("dark", "theme");
  } else {
    localStorage.removeItem("dark", "theme");
  }
});
