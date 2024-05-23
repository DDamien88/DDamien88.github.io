document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const items = document.querySelectorAll('.carousel-item');
    let count = 0;

    items[count].classList.add('active'); // Mostrar el primer elemento por defecto

    nextBtn.addEventListener('click', () => {
        items[count].classList.remove('active');
        count = (count + 1) % items.length; // Ciclar hacia adelante
        items[count].classList.add('active');
    });

    prevBtn.addEventListener('click', () => {
        items[count].classList.remove('active');
        count = (count - 1 + items.length) % items.length; // Ciclar hacia atrás
        items[count].classList.add('active');
    });
});

/*function limpiar() {
    const imagesToShow = document.querySelectorAll('.imageToShow');
    imagesToShow.forEach(function (image, index) {
        if (image.style.display !== 'none') {
            image.style.display = 'none';
            const nextIndex = (index + 1) % imagesToShow.length;
            imagesToShow[nextIndex].style.display = 'block';
            return;
        }
    });
}

const hideButton = document.getElementById('hideButton');
hideButton.addEventListener('click', limpiar);*/
