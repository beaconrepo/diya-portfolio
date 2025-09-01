 
  // Tailwind config (optional fonts & container)
tailwind.config = {
    theme: {
    extend: {
        fontFamily: {
        display: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
        },
        boxShadow: {
        glow: '0 0 30px rgba(14,165,233,0.35)'
        }
    }
    }
}

var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
function openModal(modalName) {
   
    document.getElementById(modalName).classList.remove('hidden');
    document.getElementById(modalName).classList.add('flex');
    if(modalName == 'gbmAbstractModal') {
        slides = document.querySelectorAll('.slide');
    }
}
function closeModal(modalName) {
    document.getElementById(modalName).classList.remove('flex');
    document.getElementById(modalName).classList.add('hidden');
}
//document.getElementById('year').textContent = new Date().getFullYear();
window.addEventListener('load', () => document.body.classList.add('ready'));

document.addEventListener("keydown", function(e) {
    console.log('keydown:', e.key, e.keyCode);
    if (event.key === "Escape") {
    closeModal('umbcAbstractModal');
    closeModal('gbmAbstractModal');
    closeImageModal();
    }
});


function openImageModal(img) {
    document.getElementById("fullImage").src = img.src;
    document.getElementById("imgModal").style.display = "flex";
}
function closeImageModal() {
    document.getElementById("imgModal").style.display = "none";
}
//slideshow


function showSlide(index) {
    slides.forEach((slide, i) => {
        console.log(slide.classList);
    slide.classList.toggle('active', i === index);
    });
}

function changeSlide(direction) {

    console.log(currentSlide);
    console.log(direction);
    console.log(slides.length);
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    console.log(currentSlide);
    showSlide(currentSlide);
}

