// navBar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// active sections
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

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.screenY > 100);

  // remove nabbar on click
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duraion: 3000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skills-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed js
const typed = new Typed(".multiple-text", {
  strings: ["Coder.", "Frontend Developer.", "Web Develoeper."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//mailer
// function sendEmail() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "2041016134.anshumanpatnaik@gmail.com",
//     Password: "password",
//     To: "p.anshuman.2002@gmail.com",
//     From: document.getElementById("email").value,
//     Subject: document.getElementById("subject").value,
//     Body: "Name: " + document.getElementById("name").value +<br />+ 
//           "Email Address: " + document.getElementById("email").value +<br />+
//           "Phone: " + document.getElementById("phone").value +<br />+ 
//           "Message: " + document.getElementById("message").value,
//   }).then((message) => alert("Message sent succefully"));
// }
