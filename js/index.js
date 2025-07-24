const nameInput = document.getElementById('player-name');
const startLink = document.getElementById('start-btn');

let playerName = '';


nameInput.addEventListener('input', () => {
  if (nameInput.value.trim() !== '') {
    startLink.classList.remove('disabled-link');
    startLink.classList.add('enabled-link');
  } else {
    startLink.classList.add('disabled-link');
    startLink.classList.remove('enabled-link');
  }
});

startLink.addEventListener('click', (e) => {
  const name = nameInput.value.trim();

  if (name === '') {
    e.preventDefault();

  } else {
    localStorage.setItem('playerName', name);
    window.location.href = 'select.html';
    console.log('Game started for:', name);
  }
});


