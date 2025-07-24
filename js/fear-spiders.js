const jumpscare = document.getElementById('jumpscare');
const waitingText = document.getElementById('waiting-text');
const closeButton = document.getElementById('closeButton');
const scarySound = document.getElementById('spiderSound');

function startJumpscare() {
    waitingText.style.display = 'none';
    jumpscare.classList.add('show');
    scarySound.play();
}

closeButton.addEventListener('click', () => {
    jumpscare.classList.remove('show');
    scarySound.pause();
    scarySound.currentTime = 0;
    waitingText.style.display = 'block';

    setTimeout(() => {
        startJumpscare();
    }, 3000);
});

setTimeout(() => {
    startJumpscare();
}, 3000);

