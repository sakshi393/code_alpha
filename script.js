const images = [
    "images/img1.png",
    "images/img2.png",
    "images/img3.png",
    "images/img4.png",
    "images/img5.png",
    "images/img6.png"
];

let currentIndex = 0;

function showImage(index) {
    const mainImage = document.getElementById('main-image');
    
    
    mainImage.style.opacity = 0;
    
    setTimeout(() => {
        mainImage.src = images[index];
        mainImage.style.opacity = 1;
    }, 300); // Wait 300ms before changing src
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}
