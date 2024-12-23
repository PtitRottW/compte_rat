const timerEl = document.getElementById('timer');
const ratEl = document.getElementById('rat');

let timeLeft = 600; // 10 minutes in seconds

// Compte à rebours
const countdown = setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');
    timerEl.textContent = `${minutes}:${seconds}`;
  } else {
    clearInterval(countdown);
    timerEl.textContent = "BOOM!";
  }
}, 1000);

// Déplacement aléatoire
function moveRat() {
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;

  const ratWidth = ratEl.offsetWidth;
  const ratHeight = ratEl.offsetHeight;

  const randomX = Math.random() * (containerWidth - ratWidth);
  const randomY = Math.random() * (containerHeight - ratHeight);

  ratEl.style.transition = 'transform 0.5s ease';
  ratEl.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Animation de saut
function startJumpAnimation() {
  ratEl.style.animation = 'jump 1s infinite';
}

// Lancer les animations
setInterval(moveRat, 2000); // Déplacement toutes les 2 secondes
startJumpAnimation();
