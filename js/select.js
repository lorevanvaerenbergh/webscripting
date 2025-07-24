document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', () => {
    if (option.id === 'fear-heights') {
      window.location.href = 'fear-heights.html';
    } else if (option.id === 'fear-clowns') {
      window.location.href = 'fear-clowns.html';
    } else if (option.id === 'fear-drowning') {
      window.location.href = 'fear-drowning.html';
    } else if (option.id === 'fear-spiders') {
      window.location.href = 'fear-spiders.html';
    }
  });
});

const name = localStorage.getItem('playerName');
if (name) {
  document.getElementById('greeting').textContent = `Hello there ${name}. What is your biggest fear?`;
} else {
  document.getElementById('greeting').textContent = `Hello there stranger. What is your biggest fear?`;
}

const music = document.getElementById('bg-music');
const toggleBtn = document.getElementById('music-toggle');

let isPlaying = false;
toggleBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    toggleBtn.innerText = "Enable Music";
    isPlaying = false;
  } else {
    music.play().catch(() => {
    });
    toggleBtn.innerText = "Disable Music";
    isPlaying = true;
  }
});
