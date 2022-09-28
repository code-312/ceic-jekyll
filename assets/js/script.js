const header = document.querySelector(".site-header")

function menuToggle() {
  header.classList.toggle("menu-clicked")
  header.classList.remove("search-clicked")
}

function searchToggle() {
  header.classList.toggle("search-clicked")
  header.classList.remove("menu-clicked")
}

const searchForm = document.querySelector(".form-search");
const searchInput = document.querySelector(".search__input");
function toggleSearchInput() {
  searchForm.classList.toggle("active")
  searchInput.focus()
}

function scrollToNextSection(event) {
  const sections = document.getElementsByTagName('section')
  sections[1].scrollIntoView({behavior: "smooth"})
}