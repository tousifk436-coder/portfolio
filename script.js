// Typing Effect
const text = ["MERN Stack Developer", "Frontend Expert", "Backend Developer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = text[i];
  
  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.querySelector(".typing").textContent = current.substring(0, j);

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Dark Mode Toggle
document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("light-mode");
};

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    let top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Form
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent 🚀");
});