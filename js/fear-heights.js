const lookDownBtn = document.getElementById('lookDownButton');
const background = document.querySelector('.heights-background');
const reactionText = document.getElementById('reactionText');

lookDownBtn.addEventListener('click', () => {
  background.classList.add('shake');
  reactionText.innerText = "";

  setTimeout(() => {
    background.classList.remove('shake');
    reactionText.innerText = "You feel dizzy...";
  }, 600);
});