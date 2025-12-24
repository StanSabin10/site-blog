document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href="/"]').forEach(link => {
      link.addEventListener('click', function(event) {
        // previne comportamentul default (optional, doar dacă e SPA)
        // event.preventDefault(); 

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    });
  });
  
  let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 150) {
    // scroll în jos → ascunde
    navbar.classList.add("navbar--hidden");
  } else {
    // scroll în sus → arată
    navbar.classList.remove("navbar--hidden");
  }

  lastScrollY = currentScrollY;
});
