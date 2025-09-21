// ===== NAV TOGGLE FOR MOBILE =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ===== SMOOTH SCROLL ANIMATIONS =====
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ===== CONTACT FORM VALIDATION =====
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop form from refreshing

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();
    const errorDiv = document.querySelector("#form-error");
    const successDiv = document.querySelector("#form-success");

    errorDiv.textContent = "";
    successDiv.textContent = "";

    if (!name || !email || !message) {
      errorDiv.textContent = "⚠️ Please fill out all fields.";
      return;
    }

    // very simple email regex check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      errorDiv.textContent = "⚠️ Please enter a valid email address.";
      return;
    }

    // If everything is fine
    successDiv.textContent = "✅ Message sent successfully!";
    contactForm.reset();
  });
}

// ===== HIGHLIGHT ACTIVE MENU ITEM ON SCROLL =====
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav ul li a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80; // adjust for sticky header
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
