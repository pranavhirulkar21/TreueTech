let currentIndex = 0;
const images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg"]; // Replace with your image URLs
const captions = ["Caption for Image 1", "Caption for Image 2", "Caption for Image 3", "Caption for Image 4", "Caption for Image 5", "Caption for Image 6", "Caption for Image 7", "Caption for Image 8", "Caption for Image 9"]; // Optional captions

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const caption = lightbox.querySelector(".caption");

function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "block";
    lightboxImage.src = images[currentIndex];
    caption.innerText = captions[currentIndex] || "";
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function changeImage(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    lightboxImage.src = images[currentIndex];
    caption.innerText = captions[currentIndex] || "";
}

// Add click event listeners to thumbnail images
const thumbnails = document.querySelectorAll(".thumbnails img");
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => openLightbox(index));
});

// Add keyboard navigation
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeLightbox();
    } else if (event.key === "ArrowLeft") {
        changeImage(-1);
    } else if (event.key === "ArrowRight") {
        changeImage(1);
    }
});
