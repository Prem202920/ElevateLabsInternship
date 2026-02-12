// Select elements
const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

// Open modal when image clicked
images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;

        // Prevent background scroll
        document.body.style.overflow = "hidden";
    });
});

// Close modal function
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Close button click
closeBtn.addEventListener("click", closeModal);

// Close when clicking outside image
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

// Close with ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});
