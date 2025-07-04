
  function toggleSearch() {
    const input = document.getElementById("searchInput");
    input.classList.toggle("show");
    if (input.classList.contains("show")) {
      input.focus();
    }
  }
