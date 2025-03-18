document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file');
    const img = document.getElementById('img');
    const imageBox = document.getElementById('imageBox');

    const saturate = document.getElementById('saturate');
    const contrast = document.getElementById('contrast');
    const brightness = document.getElementById('brightness');
    const grayscale = document.getElementById('grayscale');
    const sepia = document.getElementById('sepia');
    const blur = document.getElementById('blur');
    const hueRotate = document.getElementById('hue-rotate');

    const downloadLink = document.getElementById('download');
    const resetButton = document.querySelector('.tools ul li span');

    // Hide elements on window load
    window.addEventListener('load', hideElements);

    // Show elements and load image on file input change
    fileInput.addEventListener('change', handleFileChange);

    function hideElements() {
        imageBox.style.display = 'none';
        downloadLink.style.display = 'none';
        resetButton.style.display = 'none';
    }

    function handleFileChange() {
        imageBox.style.display = 'block';
        downloadLink.style.display = 'block';
        resetButton.style.display = 'block';

        const file = new FileReader();
        file.readAsDataURL(fileInput.files[0]);

        file.onload = function() {
            img.src = file.result;
        };
    }
});