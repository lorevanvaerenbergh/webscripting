const turnBtn = document.getElementById('turnButton');
const scareText = document.getElementById('scareText');
const clownHorn = document.getElementById('clownHorn');

turnBtn.addEventListener('click', () => {
    const clownSection = document.querySelector('.clown-section');
    clownSection.style.background = "url('assets/clown.jpg') no-repeat center center/cover"

    clownHorn.play();

    scareText.textContent = "The clown is here...";
    scareText.classList.add('flash');

    turnButton.style.display = 'none';
});
