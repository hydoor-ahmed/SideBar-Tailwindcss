const openIcon = document.querySelector(".open-icon");
const sidebar = document.querySelector(".sidebar");

openIcon.addEventListener("click", () => {
  openIcon.classList.toggle("bx-x");
  if (openIcon.className.includes("bx-x")) {
    sidebar.classList.remove("close");
    sidebar.classList.add("open")
  } else {
    sidebar.classList.add("close");
    sidebar.classList.remove("open");
  }
});
