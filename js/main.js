const links= document.querySelectorAll(".nav-link")
console.log(links)


links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(l => l.classList.remove("_active"));
      this.classList.add("_active");
    });
  });