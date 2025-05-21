// ფუნქცია ელემენტის ჩასატვირთად (header-ისთვის და footer-ისთვის)
function loadComponent(id, file, callback) {
  fetch(file)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback(); // თუ callback გადაეცემა არგუმენტად, მაშინ გაუშვებს callback ფუნქციას
    });
}

// იტვირთება header და შემდეგ დაედება ბურგერის ლოგიკა
loadComponent("header", "header.html", () => {
  let burger = document.querySelector(".burger");
  let xmark = document.querySelector(".xmark");
  let mobileMenu = document.querySelector(".header_nav");

  burger.addEventListener("click", () => {
    burger.style.display = "none";
    xmark.style.display = "block";
    mobileMenu.classList.add("show");
  });

  xmark.addEventListener("click", () => {
    burger.style.display = "block";
    xmark.style.display = "none";
    mobileMenu.classList.remove("show");
  });
});

// Footer-ის ჩატვირთვა (callback არ მჭირდება)
loadComponent("footer", "footer.html");
