const nextEl = document.querySelector(".next");

let imgsEl = document.querySelectorAll("img");


const prevEl = document.querySelector(".prev");
prevEl.addEventListener("click", () => {
    
    currentImage--;
    clearTimeout(timeout);
    updateImage();
});


let currentImage = 1;

let timeout

nextEl.addEventListener("click", () => {
    currentImage++;
    clearInterval(timeout);
    updateImage();

});

function updateImage() {
    if (currentImage > imgsEl.length) {
        currentImage = 1;
    } else if (currentImage < 1) {
        currentImage = imgsEl.length;
    }
    const imageContainerEl = document.querySelector(".image-container");
    imageContainerEl.style.transform = `translateX(-${(currentImage - 1) * 500}px)`;
 timeout=setTimeout(() => {
   currentImage++;
    updateImage();
}, 3000);
}
