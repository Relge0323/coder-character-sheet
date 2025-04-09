let xp = 0;
let level = 1;

const form = document.getElementById('character-form');
const display = document.getElementById('character-display');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const charClass = document.getElementById('class').value;

  xp = 0;
  level = 1;

  display.innerHTML = `
    <h2>${name}</h2>
    <p>Class: ${charClass}</p>
    <p id="xp">XP: ${xp}</p>
    <button id="add-xp">Add 10 XP</button>
    <p id="level">Level: ${level}</p>
    <div id="level-up-popup">🎉 Level Up! You are now Level ${level}! 🎉</div>
  `;

  setupXpButton(); // Re-setup the button event
});

function setupXpButton() {
  const xpButton = document.getElementById('add-xp');
  xpButton.addEventListener('click', function() {
    xp += 10;
    document.getElementById('xp').textContent = `XP: ${xp}`;

    if (xp >= level * 100) {
      level++;
      document.getElementById('level').textContent = `Level: ${level}`;
      showLevelUpPopup(level); // Pass the updated level to the popup
    }
  });
}

function showLevelUpPopup(updatedLevel) {
  const popup = document.getElementById('level-up-popup');
  // Update the popup text with the updated level
  popup.textContent = `🎉 Level Up! You are now Level ${updatedLevel}! 🎉`;
  popup.style.display = 'block'; // Show the popup
  setTimeout(function() {
    popup.style.display = 'none'; // Hide the popup after the animation ends
  }, 3000); // Match the animation time
}
