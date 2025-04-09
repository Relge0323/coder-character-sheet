console.log("character sheet ready!");

let xp = 0;
let level = 1;

const form = document.getElementById('character-form');
const display = document.getElementById('character-display');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // stop page from refreshing

    const name = document.getElementById('name').value;
    const charClass = document.getElementById('class').value;

    xp = 0;
    level = 1;

    display.innerHTML = `<h2>${name}</h2>
                        <p>Class: ${charClass}</p>
                        <p id="xp">XP: ${xp}</p>
                        <button id="add-xp">Add 10 XP</button>
                        <p id="level">Level: ${level}</p>`;
    
    setupXpButton(); // important: re-setup button event!
});

function setupXpButton() {
    const xpButton = document.getElementById('add-xp');
    xpButton.addEventListener('click', function() {
        xp += 10;
        document.getElementById('xp').textContent = `XP: ${xp}`;

        if (xp >= level * 100) {
            level++;

            document.getElementById('level').textContent = `Level: ${level}`;
            alert(`Level Up! You are now Level ${level}!`);
        }
    });
}