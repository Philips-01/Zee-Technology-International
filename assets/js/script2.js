  // Random floating icons generator with infinite loop
  const icons = ["bi-code-slash", "bi-laptop", "bi-braces", "bi-terminal", "bi-cpu", "bi-phone"];
  const colors = ["#0d6efd", "#6610f2", "#20c997", "#ffc107", "#198754", "#fd7e14"];

  const container = document.getElementById("floating-icons");

  function createIcon() {
    const icon = document.createElement("i");
    icon.classList.add("bi", icons[Math.floor(Math.random() * icons.length)]);
    icon.style.left = Math.random() * 100 + "vw";
    icon.style.top = "100vh"; // start at bottom
    icon.style.color = colors[Math.floor(Math.random() * colors.length)];
    icon.style.fontSize = (1 + Math.random() * 2) + "rem";

    // Random animation speed
    const duration = 15 + Math.random() * 10;
    icon.style.animation = `float-up ${duration}s linear infinite`;

    container.appendChild(icon);

    // Reset position when animation ends (loop)
    icon.addEventListener("animationiteration", () => {
      icon.style.left = Math.random() * 100 + "vw";
      icon.style.fontSize = (1 + Math.random() * 2) + "rem";
      icon.style.color = colors[Math.floor(Math.random() * colors.length)];
    });
  }

  for (let i = 0; i < 15; i++) {
    createIcon();
  }


// nav bg
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});