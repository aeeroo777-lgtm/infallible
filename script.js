const revealElements = document.querySelectorAll(
  ".info-card, .program-card, .facility-card, .testimonial-card, .gallery-tile, .form-card, .trust-grid > div"
);

revealElements.forEach((element) => element.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => observer.observe(element));

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}

["demo-form", "admission-form", "contact-form"].forEach((formId) => {
  const form = document.getElementById(formId);

  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    showToast("Thank you. Our admissions team will contact you shortly.");
  });
});
