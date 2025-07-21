fetch("componentes/header.html")
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML("afterbegin", data);

    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  });

fetch("componentes/footer.html")
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML("beforeend", data);
  });
