const btnEl = document.querySelector(".btn");
const bodyEl = document.querySelector("body");

if (localStorage.getItem("dark") === "theme") {
  console.log("message");
  bodyEl.classList.add("dark-theme");
}

btnEl.addEventListener("click", () => {
  bodyEl.classList.toggle("dark-theme");

  if (localStorage.getItem("dark") !== "theme") {
    localStorage.setItem("dark", "theme");
  } else if (localStorage.getItem("dark") === "theme") {
    localStorage.removeItem("dark");
  }
});

localStorage.setItem("test", "1");
