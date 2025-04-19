document.addEventListener("DOMContentLoaded", () => {
  const signInBtn = document.querySelector(".btn-outline");
  const signUpBtn = document.querySelector(".btn-fill");

  signInBtn.addEventListener("click", () => {
    alert("Redirecting to Sign In page...");
    // window.location.href = "/signin"; // Uncomment to redirect
  });

  signUpBtn.addEventListener("click", () => {
    alert("Redirecting to Sign Up page...");
    // window.location.href = "/signup"; // Uncomment to redirect
  });

});

const optionButtons = document.querySelectorAll('.option-btn');
optionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    optionButtons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

// Add more logic as needed
document.querySelector('.inspire-btn').addEventListener('click', () => {
  alert('Get inspired!');
});

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll('.grid-container .item');

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.boxShadow = 'none';
    });
  });
});

// OPTION BUTTON SELECTION LOGIC
const optionButtons = document.querySelectorAll(".option-btn");
optionButtons.forEach(button => {
  button.addEventListener("click", () => {
    optionButtons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

// INSPIRE BUTTON (EXAMPLE LOGIC)
const inspireBtn = document.querySelector(".inspire-btn");
const textarea = document.querySelector("textarea");

if (inspireBtn && textarea) {
  inspireBtn.addEventListener("click", () => {
    textarea.value = "Here's a bit of inspiration to get you started... 🚀";
  });
}

// SEND BUTTON - BASIC EMAIL VALIDATION
const sendBtn = document.querySelector(".send-btn");
const emailInput = document.querySelector('input[type="email"]');

if (sendBtn && emailInput) {
  sendBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Thanks! We'll send updates to: ${email}`);
    emailInput.value = ""; // Reset field
  });
}

// NAVBAR COLLAPSE FOR MOBILE (OPTIONAL ENHANCEMENT)
const navbar = document.querySelector(".navbar");
const menuToggle = document.createElement("button");
menuToggle.textContent = "☰ Menu";
menuToggle.style.background = "none";
menuToggle.style.border = "none";
menuToggle.style.color = "white";
menuToggle.style.fontSize = "1.25rem";
menuToggle.style.cursor = "pointer";
menuToggle.style.display = "none";

if (window.innerWidth <= 768 && navbar) {
  menuToggle.style.display = "block";
  navbar.insertBefore(menuToggle, navbar.firstChild);

  const navbarLinks = document.querySelectorAll(".navbar a");
  const toggleNav = () => {
    navbarLinks.forEach(link => {
      link.style.display = (link.style.display === "none" || !link.style.display) ? "inline-flex" : "none";
    });
  };

  menuToggle.addEventListener("click", toggleNav);

  // Hide links initially
  toggleNav();
}
