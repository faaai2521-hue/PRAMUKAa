document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-grid img");
  images.forEach(img => {
    img.addEventListener("click", () => {
      alert(`Kegiatan: ${img.alt}`);
    });
  });
});