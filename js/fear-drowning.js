const waterSound = document.getElementById('waterSound');
const swimButton = document.getElementById('swimButton');
const drownText = document.getElementById('drown-text');
const drowningSection = document.querySelector('.drowning-section');


window.addEventListener('load', () => {
    waterSound.play();
});

swimButton.addEventListener('click', () => {
    drownText.textContent = "You struggle to swim up...";
});


swimButton.addEventListener('click', () => {
    drownText.textContent = "You struggle to swim up...";

    drowningSection.style.transform = 'translateY(30px)';

    setTimeout(() => {
        drowningSection.style.transform = 'translateY(0)';
    }, 500);
});