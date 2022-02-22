const header = document.querySelector(".site-header")

function menuToggle() {
  header.classList.toggle("menu-clicked")
  header.classList.remove("search-clicked")
}

function searchToggle() {
  header.classList.toggle("search-clicked")
  header.classList.remove("menu-clicked")
}
