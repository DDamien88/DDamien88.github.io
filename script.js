document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const images = document.querySelectorAll('.carousel img');
    let counter = 0;

    images[counter].style.display = 'block'; // Mostrar la primera imagen por defecto

    nextBtn.addEventListener('click', () => {
        images[counter].style.display = 'none';
        counter++;
        if (counter >= images.length) {
            counter = 0;
        }
        images[counter].style.display = 'block';
    });

    prevBtn.addEventListener('click', () => {
        images[counter].style.display = 'none';
        counter--;
        if (counter < 0) {
            counter = images.length - 1;
        }
        images[counter].style.display = 'block';
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



