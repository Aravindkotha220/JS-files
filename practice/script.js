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
  
    // OPTIONAL: Mobile nav toggle (if you add a hamburger menu)
    // const mobileToggle = document.querySelector(".mobile-toggle");
    // const navSections = document.querySelectorAll(".navbar-left, .navbar-center, .navbar-right");
  
    // mobileToggle?.addEventListener("click", () => {
    //   navSections.forEach(section => section.classList.toggle("open"));
    // });
  });
  