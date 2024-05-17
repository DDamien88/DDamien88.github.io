document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const items = document.querySelectorAll('.carousel-item');
    let counter = 0;

    items[counter].classList.add('active'); // Mostrar el primer elemento por defecto

    nextBtn.addEventListener('click', () => {
        items[counter].classList.remove('active');
        counter = (counter + 1) % items.length; // Ciclar hacia adelante
        items[counter].classList.add('active');
    });

    prevBtn.addEventListener('click', () => {
        items[counter].classList.remove('active');
        counter = (counter - 1 + items.length) % items.length; // Ciclar hacia atrás
        items[counter].classList.add('active');
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



