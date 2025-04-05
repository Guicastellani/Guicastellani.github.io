/*========== Toggle Navbar Icon ========== */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*========== Scroll Sections Active Link ========== */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*========== Sticky Navbar ========== */
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*========== Remove Navbar When Click ========== */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*========== Scroll Reveal ========== */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(
  ".home-content, .heading, .about-content p, .about-content",
  {
    origin: "top",
  }
);

ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  {
    origin: "bottom",
  }
);

ScrollReveal().reveal(".home-content h1, .about-img, .about-content h3", {
  origin: "left",
});

ScrollReveal().reveal(".home-content p, .about-content h2", { origin: "top" });

/*========== Typed JS ========== */
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Graphic Designer", "Video Editor"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const typed2 = new Typed(".multiple-text2", {
  strings: ["Frontend Developer", "Graphic Designer", "Video Editor"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*========== Phone Mask ========== */
phoneMask = (event) => {
  var valor =
    document.getElementById("tel").attributes[0].ownerElement["value"];
  var result = valor.replace(/\D/g, "");
  result = result.replace(/^0/, "");
  if (result.length > 10) {
    result = result.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (result.length > 5) {
    if (result.length == 6 && event.code == "Backspace") {
      // necessário pois senão o "-" fica sempre voltando ao dar backspace
      return;
    }
    result = result.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (result.length > 2) {
    result = result.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    if (result.length != 0) {
      result = result.replace(/^(\d*)/, "($1");
    }
  }
  document.getElementById("tel").attributes[0].ownerElement["value"] = result;
};
